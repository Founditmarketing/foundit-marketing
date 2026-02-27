import { HeroSection } from '@/components/landing/HeroSection';
import { BentoGridSection } from '@/components/landing/BentoGridSection';
import { ProblemSolverSection } from '@/components/landing/ProblemSolverSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { Metadata } from 'next';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';

export const metadata: Metadata = {
  title: 'Digital Empire Building | Found It Marketing',
  description: "We don't just run campaigns; we build digital empires. Stop competing and start dominating with high-velocity paid acquisition and generative engine optimization.",
};

export default function Home() {
  return (
    <main>
      <LocalBusinessSchema />
      <HeroSection />

      <ScrollReveal delay={0.1}>
        <BentoGridSection />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ProblemSolverSection />
      </ScrollReveal>

      <Suspense>
        <ScrollReveal delay={0.1}>
          <TestimonialsSection />
        </ScrollReveal>
      </Suspense>

      <section className="bg-background text-foreground py-24 lg:py-32 relative overflow-hidden">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-4 text-primary">
              Ready to Grow?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Let's talk about your goals. Our experts will create a custom
              proposal to grow your business.
            </p>
            <Link href="/contact">
              <LiquidButton className="h-16 px-10 text-xl tracking-[0.2em]">
                Proposal in 1 Hour
              </LiquidButton>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
