import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    stripe_key_set: !!process.env.STRIPE_SECRET_KEY,
    stripe_key_prefix: process.env.STRIPE_SECRET_KEY?.slice(0, 7) ?? 'MISSING',
    webhook_secret_set: !!process.env.STRIPE_WEBHOOK_SECRET,
    resend_key_set: !!process.env.RESEND_API_KEY,
    node_env: process.env.NODE_ENV,
  });
}
