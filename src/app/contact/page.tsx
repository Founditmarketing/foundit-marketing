import { ContactSection } from '@/components/landing/ContactSection';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Proposal | Start Building Your Empire',
  description: "Ready to dominate your market? Get a custom digital marketing proposal in 60 minutes. No fluff, just data-driven strategy.",
};

export default function ContactPage() {
  return (
    <main>
      <Suspense>
        <ContactSection />
      </Suspense>
    </main>
  );
}
