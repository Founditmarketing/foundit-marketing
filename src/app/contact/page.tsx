import { ContactSection } from '@/components/landing/ContactSection';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Strategy Session | Found It Marketing',
  description: "Book your free strategy session. We'll analyze your market, audit your digital presence, and deliver a custom growth plan — no pressure, no obligations.",
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
