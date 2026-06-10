import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

const TEAM_EMAIL = 'trevor@founditmarketing.com';

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-05-27.dahlia',
  });
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  if (!sig) return NextResponse.json({ error: 'Missing signature' }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Webhook verification failed';
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    switch (event.type) {

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        const customer = await stripe.customers.retrieve(invoice.customer as string) as Stripe.Customer;
        const amount = (invoice.amount_paid / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        const planName = invoice.lines.data[0]?.description ?? 'Subscription';

        await resend.emails.send({
          from: 'Found IT Marketing <contact@founditmarketing.com>',
          to: [TEAM_EMAIL],
          subject: `✅ Payment Received: ${customer.name} — ${amount}`,
          html: `
            <h2 style="color:#16a34a">Payment Successful</h2>
            <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%">
              <tr><td style="padding:6px 0;color:#555;width:160px">Customer</td><td style="padding:6px 0;font-weight:bold">${customer.name}</td></tr>
              <tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0">${customer.email}</td></tr>
              <tr><td style="padding:6px 0;color:#555">Business</td><td style="padding:6px 0">${customer.metadata?.business_name ?? '—'}</td></tr>
              <tr><td style="padding:6px 0;color:#555">Plan</td><td style="padding:6px 0">${planName}</td></tr>
              <tr><td style="padding:6px 0;color:#555">Amount</td><td style="padding:6px 0;font-weight:bold;color:#16a34a">${amount}</td></tr>
              <tr><td style="padding:6px 0;color:#555">Invoice</td><td style="padding:6px 0;font-family:monospace;font-size:12px">${invoice.id}</td></tr>
            </table>
          `,
        });
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const customer = await stripe.customers.retrieve(invoice.customer as string) as Stripe.Customer;
        const amount = (invoice.amount_due / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        const nextAttempt = invoice.next_payment_attempt
          ? new Date(invoice.next_payment_attempt * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
          : 'No retry scheduled';

        await resend.emails.send({
          from: 'Found IT Marketing <contact@founditmarketing.com>',
          to: [TEAM_EMAIL],
          subject: `⚠️ Payment Failed: ${customer.name} — ${amount}`,
          html: `
            <h2 style="color:#dc2626">Payment Failed</h2>
            <p style="font-family:sans-serif;color:#555">Action may be required — contact the client.</p>
            <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%">
              <tr><td style="padding:6px 0;color:#555;width:160px">Customer</td><td style="padding:6px 0;font-weight:bold">${customer.name}</td></tr>
              <tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${customer.email}">${customer.email}</a></td></tr>
              <tr><td style="padding:6px 0;color:#555">Business</td><td style="padding:6px 0">${customer.metadata?.business_name ?? '—'}</td></tr>
              <tr><td style="padding:6px 0;color:#555">Amount Due</td><td style="padding:6px 0;font-weight:bold;color:#dc2626">${amount}</td></tr>
              <tr><td style="padding:6px 0;color:#555">Next Retry</td><td style="padding:6px 0">${nextAttempt}</td></tr>
              <tr><td style="padding:6px 0;color:#555">Invoice</td><td style="padding:6px 0;font-family:monospace;font-size:12px">${invoice.id}</td></tr>
            </table>
          `,
        });
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        const customer = await stripe.customers.retrieve(subscription.customer as string) as Stripe.Customer;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const planName = (subscription.items.data[0]?.price as any)?.product?.name ?? 'Subscription';

        await resend.emails.send({
          from: 'Found IT Marketing <contact@founditmarketing.com>',
          to: [TEAM_EMAIL],
          subject: `❌ Subscription Cancelled: ${customer.name}`,
          html: `
            <h2 style="color:#dc2626">Subscription Cancelled</h2>
            <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%">
              <tr><td style="padding:6px 0;color:#555;width:160px">Customer</td><td style="padding:6px 0;font-weight:bold">${customer.name}</td></tr>
              <tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${customer.email}">${customer.email}</a></td></tr>
              <tr><td style="padding:6px 0;color:#555">Business</td><td style="padding:6px 0">${customer.metadata?.business_name ?? '—'}</td></tr>
              <tr><td style="padding:6px 0;color:#555">Plan</td><td style="padding:6px 0">${planName}</td></tr>
              <tr><td style="padding:6px 0;color:#555">Subscription</td><td style="padding:6px 0;font-family:monospace;font-size:12px">${subscription.id}</td></tr>
            </table>
          `,
        });
        break;
      }
    }
  } catch (err) {
    console.error('[webhook] handler error:', err);
  }

  return NextResponse.json({ received: true });
}
