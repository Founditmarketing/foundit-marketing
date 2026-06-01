import type { Metadata } from 'next';
import { CheckoutClient } from './client';

export const metadata: Metadata = {
  title: 'Subscribe | Found IT Marketing',
  description:
    'Choose your marketing package and start growing your business today. Secure monthly billing via Forte Payments.',
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
