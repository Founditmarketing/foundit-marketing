'use server';

import Stripe from 'stripe';
import { Resend } from 'resend';
import { PLANS } from './plans';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-05-27.dahlia',
});

export type PaymentIntentResult = {
  clientSecret: string;
  subscriptionId: string;
};

export async function createPaymentIntent(formData: FormData): Promise<PaymentIntentResult> {
  const planId = formData.get('planId') as string;
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const businessName = formData.get('businessName') as string;
  const phone = formData.get('phone') as string;

  const plan = PLANS.find((p) => p.id === planId);
  if (!plan) throw new Error('Invalid plan selected.');

  // Create Stripe customer
  const customer = await stripe.customers.create({
    name: `${firstName} ${lastName}`,
    email,
    phone,
    metadata: { business_name: businessName, plan_id: plan.id },
  });

  // Create subscription in incomplete state — generates a PaymentIntent
  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        price_data: {
          currency: 'usd',
          product_data: { name: plan.name, description: plan.subtitle },
          unit_amount: plan.price * 100,
          recurring: { interval: 'month' },
        } as any,
      },
    ],
    payment_behavior: 'default_incomplete',
    payment_settings: {
      save_default_payment_method: 'on_subscription',
      payment_method_types: ['card'],
    },
    expand: ['latest_invoice.payment_intent'],
    metadata: { business_name: businessName, plan_id: plan.id, plan_name: plan.name },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const invoice = subscription.latest_invoice as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paymentIntent = invoice?.payment_intent as any;

  if (!paymentIntent?.client_secret) {
    throw new Error('Failed to initialize payment. Please try again.');
  }

  // Notify team
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Found IT Marketing <contact@founditmarketing.com>',
      to: ['trevor@founditmarketing.com'],
      subject: `Checkout Started: ${businessName} — ${plan.name} ($${plan.price}/mo)`,
      html: `
        <h2>New Subscription Checkout Started</h2>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Contact:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Plan:</strong> ${plan.name} — $${plan.price}/mo</p>
        <p><strong>Stripe Subscription:</strong> ${subscription.id}</p>
      `,
    });
  } catch { /* don't block payment */ }

  return { clientSecret: paymentIntent.client_secret, subscriptionId: subscription.id };
}
