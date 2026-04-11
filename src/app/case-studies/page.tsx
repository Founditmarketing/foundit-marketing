import { Metadata } from 'next';
import CaseStudiesPage from './client';

export const metadata: Metadata = {
  title: 'Case Studies | $2.3B in Verified Client Revenue',
  description: "See the results. From 349% growth to national market dominance, explore how we build digital empires for our partners.",
};

export default function Page() {
  return <CaseStudiesPage />;
}
