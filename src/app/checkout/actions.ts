'use server';

import { Resend } from 'resend';

// ─── Forte API Config ─────────────────────────────────────────────────────────
// Environment variables required in .env.local:
//   FORTE_API_ACCESS_ID   – API Access ID from Forte developer portal
//   FORTE_API_SECURE_KEY  – API Secure Key from Forte developer portal
//   FORTE_ORG_ID          – Organization ID (e.g. "295656")
//   FORTE_LOCATION_ID     – Location ID (e.g. "102345")
//   FORTE_SANDBOX         – "true" for sandbox, omit or "false" for production
//
// Public env vars (safe to expose, used by Forte.js in the browser):
//   NEXT_PUBLIC_FORTE_API_LOGIN_ID  – API Login ID for Forte.js tokenization
//   NEXT_PUBLIC_FORTE_SANDBOX       – "true" for sandbox Forte.js endpoint

const FORTE_BASE =
  process.env.FORTE_SANDBOX === 'true'
    ? 'https://sandbox.forte.net/api/v3'
    : 'https://api.forte.net/v3';

const ORG = process.env.FORTE_ORG_ID ?? '';
const LOC = process.env.FORTE_LOCATION_ID ?? '';
const ACCESS_ID = process.env.FORTE_API_ACCESS_ID ?? '';
const SECURE_KEY = process.env.FORTE_API_SECURE_KEY ?? '';

const resend = new Resend(process.env.RESEND_API_KEY);

function forteHeaders(): Record<string, string> {
  const credentials = Buffer.from(`${ACCESS_ID}:${SECURE_KEY}`).toString('base64');
  return {
    Authorization: `Basic ${credentials}`,
    'Content-Type': 'application/json',
    'X-Forte-Auth-Organization-Id': `org_${ORG}`,
  };
}

async function fortePost(path: string, body: Record<string, unknown>) {
  const url = `${FORTE_BASE}/organizations/org_${ORG}/locations/loc_${LOC}${path}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: forteHeaders(),
    body: JSON.stringify(body),
  });
  const json = await res.json();
  // Forte returns response_type "A" for approved
  if (!res.ok || (json.response && json.response.response_type !== 'A' && json.response.response_code !== 'A01')) {
    const desc = json.response?.response_desc ?? json.message ?? 'Forte API error';
    throw new Error(desc);
  }
  return json;
}

// ─── Step 1: Create customer ──────────────────────────────────────────────────
async function createCustomer(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
}): Promise<string> {
  const json = await fortePost('/customers', {
    first_name: data.firstName,
    last_name: data.lastName,
    company_name: data.companyName,
    emails: [{ email_address: data.email, email_type: 'primary' }],
    phones: [{ phone_number: data.phone.replace(/\D/g, ''), phone_type: 'primary' }],
  });
  return json.customer_token as string;
}

// ─── Step 2a: Add credit card directly via Forte REST API ────────────────────
async function addCardPaymethod(
  customerToken: string,
  data: {
    nameOnCard: string;
    cardNumber: string;
    expireMonth: string;
    expireYear: string;
    cvv: string;
  }
): Promise<string> {
  const json = await fortePost(`/customers/${customerToken}/paymethods`, {
    card: {
      name_on_card: data.nameOnCard,
      account_number: data.cardNumber.replace(/\s/g, ''),
      expire_month: data.expireMonth,
      expire_year: data.expireYear,
      cvv: data.cvv,
    },
  });
  return json.paymethod_token as string;
}

// ─── Step 2b: Add ACH bank account ───────────────────────────────────────────
async function addAchPaymethod(
  customerToken: string,
  data: {
    nameOnAccount: string;
    routingNumber: string;
    accountNumber: string;
    accountType: 'checking' | 'savings';
  }
): Promise<string> {
  const json = await fortePost(`/customers/${customerToken}/paymethods`, {
    echeck: {
      account_type: data.accountType,
      routing_number: data.routingNumber,
      account_number: data.accountNumber,
      name_on_account: data.nameOnAccount,
    },
  });
  return json.paymethod_token as string;
}

// ─── Step 3: Create monthly recurring schedule ────────────────────────────────
async function createSchedule(
  customerToken: string,
  paymethodToken: string,
  plan: { name: string; price: number }
): Promise<string> {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const startDate = tomorrow.toISOString().split('T')[0];

  const json = await fortePost('/schedules', {
    action: 'create',
    schedule_status: 'active',
    schedule_description: `${plan.name} — $${plan.price}/mo`,
    frequency_type: 'monthly',
    frequency_time_unit: 1,
    start_date: startDate,
    billing_amount: plan.price,
    customer_token: customerToken,
    paymethod_token: paymethodToken,
  });
  return json.schedule_id as string;
}

// ─── Public server action ─────────────────────────────────────────────────────
export type SubscriptionPayload = {
  // Customer
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  // Plan
  planId: string;
  planName: string;
  planPrice: number;
  // Payment method
  paymentMethod: 'card' | 'ach';
  // Credit card (paymentMethod === 'card')
  nameOnCard?: string;
  cardNumber?: string;
  expireMonth?: string;
  expireYear?: string;
  cvv?: string;
  // ACH (paymentMethod === 'ach')
  nameOnAccount?: string;
  routingNumber?: string;
  accountNumber?: string;
  accountType?: 'checking' | 'savings';
};

export async function createSubscription(
  data: SubscriptionPayload
): Promise<{ success: boolean; scheduleId?: string; error?: string }> {
  try {
    if (!ORG || !LOC || !ACCESS_ID || !SECURE_KEY) {
      throw new Error('Payment processor is not configured. Please contact us directly.');
    }

    // 1. Create customer profile
    const customerToken = await createCustomer({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      companyName: data.businessName,
    });

    // 2. Add payment method
    let paymethodToken: string;
    if (data.paymentMethod === 'card') {
      if (!data.nameOnCard || !data.cardNumber || !data.expireMonth || !data.expireYear || !data.cvv) {
        throw new Error('Card information is incomplete.');
      }
      paymethodToken = await addCardPaymethod(customerToken, {
        nameOnCard: data.nameOnCard,
        cardNumber: data.cardNumber,
        expireMonth: data.expireMonth,
        expireYear: data.expireYear,
        cvv: data.cvv,
      });
    } else {
      if (!data.nameOnAccount || !data.routingNumber || !data.accountNumber || !data.accountType) {
        throw new Error('Bank account information is incomplete.');
      }
      paymethodToken = await addAchPaymethod(customerToken, {
        nameOnAccount: data.nameOnAccount,
        routingNumber: data.routingNumber,
        accountNumber: data.accountNumber,
        accountType: data.accountType,
      });
    }

    // 3. Create monthly schedule
    const scheduleId = await createSchedule(customerToken, paymethodToken, {
      name: data.planName,
      price: data.planPrice,
    });

    // 4. Notify team via email
    await resend.emails.send({
      from: 'Found IT Marketing <contact@founditmarketing.com>',
      to: ['trevor@founditmarketing.com'],
      subject: `New Subscription: ${data.businessName} — ${data.planName} ($${data.planPrice}/mo)`,
      html: `
        <h2 style="color:#111">New Monthly Subscription</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:15px">
          <tr><td style="padding:8px 0;color:#555;width:160px">Business</td><td style="padding:8px 0;font-weight:bold">${data.businessName}</td></tr>
          <tr><td style="padding:8px 0;color:#555">Contact</td><td style="padding:8px 0">${data.firstName} ${data.lastName}</td></tr>
          <tr><td style="padding:8px 0;color:#555">Email</td><td style="padding:8px 0"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#555">Phone</td><td style="padding:8px 0">${data.phone}</td></tr>
          <tr><td style="padding:8px 0;color:#555;border-top:1px solid #eee">Plan</td><td style="padding:8px 0;border-top:1px solid #eee;font-weight:bold">${data.planName}</td></tr>
          <tr><td style="padding:8px 0;color:#555">Amount</td><td style="padding:8px 0;font-weight:bold;color:#e85c0d">$${data.planPrice}/month</td></tr>
          <tr><td style="padding:8px 0;color:#555">Payment</td><td style="padding:8px 0">${data.paymentMethod === 'card' ? 'Credit Card' : 'ACH Bank Transfer'}</td></tr>
          <tr><td style="padding:8px 0;color:#555">Forte Schedule</td><td style="padding:8px 0;font-family:monospace">${scheduleId}</td></tr>
        </table>
      `,
    });

    return { success: true, scheduleId };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'An unexpected error occurred.';
    console.error('[forte] createSubscription error:', message);
    return { success: false, error: message };
  }
}
