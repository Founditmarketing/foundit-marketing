'use server';

import Stripe from 'stripe';
import { Resend } from 'resend';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-05-27.dahlia',
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const PLANS = [
  {
    id: 'essentials',
    name: 'Marketing Essentials',
    subtitle: 'Website Development/Management, Search Engine Optimization',
    price: 599,
    popular: false,
    features: [
      'Website Design, Management, Hosting, Backups, Security & SSL',
      'Search Engine Optimization & Listing Directories',
      'Google Business Profile Management',
    ],
  },
  {
    id: 'growth',
    name: 'Business Growth',
    subtitle: 'SEO / Web Design / Social Media Management',
    price: 1000,
    popular: false,
    features: [
      'Website Design, Management, Hosting, Backups, Security & SSL',
      'Search Engine Optimization & Listing Directories',
      'Google Business Profile Management',
      'Social Media Management, Graphics Production & Scheduled Posting',
    ],
  },
  {
    id: 'domination',
    name: 'Market Domination',
    subtitle: 'SEO / Web Design / Social Media Management',
    price: 1500,
    popular: true,
    features: [
      'Website Design, Management, Hosting, Backups, Security & SSL',
      'Search Engine Optimization & Listing Directories',
      'Google Business Profile Management',
      'Social Media Management, Graphics Production & Scheduled Posting',
      'Targeted Ads',
      'Google Ads, PPC & Google Local Services',
    ],
  },
  {
    id: 'ai',
    name: 'Market Domination + AI Optimization',
    subtitle: 'SEO / Web Design / Social Media Management + AIO GEO',
    price: 2200,
    popular: false,
    features: [
      'Everything in Market Domination',
      'AIO/SEO+ Package — AI visibility across major LLMs',
      'Personalized AI content optimization',
      'On-page & off-page GEO/SEO optimization',
      'Search performance reporting & GEO/SEO Specialist support',
    ],
  },
] as const;

export type Plan = (typeof PLANS)[number];

export async function createCheckoutSession(formData: FormData) {
  const planId = formData.get('planId') as string;
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const businessName = formData.get('businessName') as string;
  const phone = formData.get('phone') as string;

  const plan = PLANS.find((p) => p.id === planId);
  if (!plan) throw new Error('Invalid plan selected.');

  const headersList = headers();
  const origin = headersList.get('origin') ?? 'https://founditmarketing.com';

  // Create or retrieve Stripe customer
  const customer = await stripe.customers.create({
    name: `${firstName} ${lastName}`,
    email,
    phone,
    metadata: {
      business_name: businessName,
      plan_id: plan.id,
    },
  });

  // Create Stripe Checkout session in subscription mode
  const session = await stripe.checkout.sessions.create({
    customer: customer.id,
    payment_method_types: ['card', 'us_bank_account'],
    mode: 'subscription',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: plan.name,
            description: plan.subtitle,
          },
          unit_amount: plan.price * 100,
          recurring: { interval: 'month' },
        },
        quantity: 1,
      },
    ],
    customer_update: { name: 'auto', address: 'auto' },
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/checkout?plan=${plan.id}`,
    metadata: {
      plan_id: plan.id,
      plan_name: plan.name,
      business_name: businessName,
    },
    subscription_data: {
      metadata: {
        plan_id: plan.id,
        business_name: businessName,
      },
    },
  });

  // Send notification email
  try {
    await resend.emails.send({
      from: 'Found IT Marketing <contact@founditmarketing.com>',
      to: ['trevor@founditmarketing.com'],
      subject: `New Checkout Started: ${businessName} — ${plan.name}`,
      html: `
        <h2>New Subscription Checkout Started</h2>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Contact:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Plan:</strong> ${plan.name} — $${plan.price}/mo</p>
        <p><strong>Stripe Session:</strong> ${session.id}</p>
      `,
    });
  } catch {
    // Don't block redirect if email fails
  }

  redirect(session.url!);
}
