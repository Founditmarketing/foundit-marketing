import { Metadata } from 'next';
import AboutPage from './client';

export const metadata: Metadata = {
  title: 'About Found It Marketing | Local Louisiana Agency, 13+ Years',
  description: 'Digital marketing agency based in Alexandria, LA. Google Ads, web design, SEO, and AI search optimization. 13+ years, 100+ clients. No contracts.',
  openGraph: {
    title: 'About Found It Marketing | Local Louisiana Agency, 13+ Years',
    description: 'Digital marketing agency based in Alexandria, LA. Google Ads, web design, SEO, and AI search optimization. 13+ years, 100+ clients. No contracts.',
    type: 'website',
    url: 'https://founditmarketing.com/about',
  },
  alternates: { canonical: 'https://founditmarketing.com/about' },
};

export default function Page() {
  return <AboutPage />;
}
