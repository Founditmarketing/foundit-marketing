import { HeroSection } from '@/components/landing/HeroSection';
import { WebsiteTiersSection } from '@/components/landing/WebsiteTiersSection';
import { MarketingPackagesSection } from '@/components/landing/MarketingPackagesSection';
import { PlatformSection } from '@/components/landing/PlatformSection';
import { TrustBlock } from '@/components/landing/TrustBlock';
import { LeadMagnetSection } from '@/components/landing/LeadMagnetSection';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { Metadata } from 'next';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';

export const metadata: Metadata = {
  title: 'Elevate Your Digital Empire | Found It Marketing',
  description:
    "We build the digital infrastructure that turns local businesses into industry titans. Custom websites, AI-powered marketing, and measurable dominance. Serving doctors, contractors, dealerships, realtors, lawyers & more.",
};

export default function Home() {
  return (
    <main>
      <LocalBusinessSchema />

      {/* S1: Hero — Mood + Single CTA */}
      <HeroSection />

      {/* S2: Website Tiers — Self-select by budget */}
      <div id="websites">
        <ScrollReveal delay={0.1}>
          <WebsiteTiersSection />
        </ScrollReveal>
      </div>

      {/* S3: Marketing Packages — Self-select by growth stage */}
      <div id="marketing">
        <ScrollReveal delay={0.1}>
          <MarketingPackagesSection />
        </ScrollReveal>
      </div>

      {/* S4: Platform Differentiator — Why us, not them */}
      <div id="platform">
        <ScrollReveal delay={0.1}>
          <PlatformSection />
        </ScrollReveal>
      </div>

      {/* S5: Trust Block — Values + Stats */}
      <ScrollReveal delay={0.1}>
        <TrustBlock />
      </ScrollReveal>

      {/* S6: Lead Magnet — Case Study + Industry Form */}
      <ScrollReveal delay={0.1}>
        <LeadMagnetSection />
      </ScrollReveal>

      {/* S7: Closing CTA — Mirror Hero */}
      <section className="bg-background text-foreground py-24 lg:py-32 relative overflow-hidden border-t border-border/10">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-4 text-primary">
              We&apos;ll Help You Get Started.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Schedule time to learn how Found It Marketing can elevate your
              digital strategy today.
            </p>
            <Link href="/contact">
              <LiquidButton className="h-16 px-10 text-xl tracking-[0.2em]">
                Free Strategy Session
              </LiquidButton>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
