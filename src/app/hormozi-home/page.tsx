import { Metadata } from 'next';
import HormoziHome from './client';

export const metadata: Metadata = {
  title: 'Found It Marketing | Get More Customers Guaranteed',
  description: 'Google Ads, web design, SEO, and AI search optimization for local businesses. No contracts. Free audit. Based in Louisiana, serving 48 states.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://founditmarketing.com' },
};

export default function Page() {
  return <HormoziHome />;
}
