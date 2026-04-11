import { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LiquidButton } from '@/components/ui/LiquidButton';
import {
  Search,
  TrendingUp,
  Target,
  Flame,
  Check,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Marketing Packages | Found It Marketing',
  description:
    'Cumulative marketing packages built for every growth stage. From SEO baselines to total market dominance with AI-powered campaigns.',
};

interface PackageTier {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  inheritsFrom: string | null;
  features: string[];
}

const packages: PackageTier[] = [
  {
    slug: 'foundation',
    name: 'Foundation',
    tagline: 'Ready to get found?',
    description:
      'The baseline that every digital presence needs. We build the search-friendly infrastructure that puts you on the map — literally. GEO/SEO optimization, Google Business management, and analytics reporting so you always know where you stand.',
    icon: Search,
    inheritsFrom: null,
    features: [
      'GEO / SEO Baseline Optimization',
      'Google Business Profile Setup & Optimization',
      'Monthly Analytics & Performance Reporting',
      'Search-Friendly Content Architecture',
      'Reputation Monitoring & Alerts',
      'Secure Cloud Hosting & Domain Services',
      'Lead Capture Form Integration',
    ],
  },
  {
    slug: 'velocity',
    name: 'Velocity',
    tagline: 'Ready to accelerate growth?',
    description:
      'Foundation gets you found. Velocity gets you growing. Monthly SEO optimizations, professional content creation, social media management, and quarterly strategy sessions with a dedicated strategist who knows your business.',
    icon: TrendingUp,
    inheritsFrom: 'Foundation',
    features: [
      'Monthly Local & Organic SEO Optimizations',
      'Professional Blog Content Creation',
      'Social Media Content & Management',
      'Call Tracking & Recording',
      'Quarterly Strategy Sessions with Dedicated Strategist',
      'Competitor Monitoring & Benchmarking',
    ],
  },
  {
    slug: 'authority',
    name: 'Authority',
    tagline: 'Ready to own your market?',
    description:
      'Organic growth meets paid acceleration. Google PPC campaigns, Meta advertising, AI-powered bidding, custom landing pages, and conversion rate optimization — all working together to dominate your market from every angle.',
    icon: Target,
    inheritsFrom: 'Velocity',
    features: [
      'Google PPC & Search Ad Campaign Management',
      'AI-Powered Smart Bidding Optimization',
      'Custom High-Converting Landing Pages',
      'Conversion Rate Optimization (CRO)',
      'Meta / Facebook & Instagram Ad Campaigns',
      'Bi-Weekly Performance Reporting & Calls',
    ],
  },
  {
    slug: 'dominion',
    name: 'Dominion',
    tagline: 'Ready for total market dominance?',
    description:
      'The full arsenal. GEO optimization for AI visibility, Answer Engine Optimization, YouTube video ads, omni-channel campaign orchestration, a dedicated senior strategist, and weekly reporting with real-time dashboard access. This is total market control.',
    icon: Flame,
    inheritsFrom: 'Authority',
    features: [
      'Generative Engine Optimization (GEO) for AI Visibility',
      'Answer Engine Optimization (AEO) for AI Answer Boxes',
      'YouTube Video Ad Management',
      'Omni-Channel Campaign Orchestration',
      'Dedicated Senior Strategist & Direct Line',
      'Weekly Reporting & Real-Time Dashboard Access',
      'Custom AI Data Pipelines & Insights',
    ],
  },
];

export default function MarketingPage() {
  return (
    <main className="pt-32 lg:pt-40">
      {/* Hero */}
      <section className="pb-20 lg:pb-32 border-b border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8 block border-l-4 border-primary pl-4">
              MARKETING PACKAGES
            </span>
            <h1 className="text-foreground text-4xl sm:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
              Growth on <span className="text-primary">Your Terms.</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl font-medium border-l-8 border-primary pl-8">
              Every tier builds on the last. Start where you are, scale as you
              grow. No wasted spend, no missing pieces — just a proven ladder
              to market dominance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Package Cards */}
      {packages.map((pkg, i) => {
        const PkgIcon = pkg.icon;
        return (
          <section
            key={pkg.slug}
            id={pkg.slug}
            className="py-24 lg:py-32 border-b border-border/10"
          >
            <div className="max-w-[1440px] mx-auto px-6">
              <ScrollReveal>
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  {/* Left: Info */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                        <PkgIcon
                          className="w-8 h-8 text-primary"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-primary/40 text-6xl font-black italic leading-none select-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p className="text-primary text-sm font-black uppercase tracking-[0.3em] mb-2">
                      {pkg.tagline}
                    </p>
                    <h2 className="text-foreground text-4xl lg:text-6xl font-black italic uppercase tracking-tighter mb-6 leading-none">
                      {pkg.name}
                    </h2>

                    {pkg.inheritsFrom && (
                      <p className="text-primary/80 font-bold italic text-lg mb-6 border-l-4 border-primary/40 pl-6">
                        Includes everything from {pkg.inheritsFrom}, plus:
                      </p>
                    )}

                    <p className="text-muted-foreground text-base lg:text-lg font-medium leading-relaxed mb-10">
                      {pkg.description}
                    </p>

                    <ul className="space-y-4">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-4">
                          <div className="p-1 bg-primary/10 rounded-lg mt-0.5 shrink-0">
                            <Check
                              className="w-4 h-4 text-primary"
                              strokeWidth={2.5}
                            />
                          </div>
                          <span className="text-muted-foreground text-base lg:text-lg font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: CTA */}
                  <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start lg:sticky lg:top-32">
                    <div className="bg-card/50 backdrop-blur-2xl border border-primary/20 rounded-[2.5rem] p-10 lg:p-14 text-center w-full shadow-2xl">
                      <p className="text-card-foreground text-2xl lg:text-3xl font-black italic uppercase tracking-tighter mb-2">
                        Custom Pricing
                      </p>
                      <p className="text-muted-foreground text-sm mb-8 font-medium">
                        Every business is different. Let&apos;s find the right
                        investment for your goals.
                      </p>
                      <Link href="/contact">
                        <button className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-5 px-8 rounded-2xl text-lg hover:scale-[1.03] active:scale-[0.97] transition-transform shadow-2xl shadow-primary/30 flex items-center justify-center gap-3">
                          Get Your Strategy Session
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-4 text-primary">
              Not Sure Which Tier?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
              We&apos;ll help you find the perfect starting point during your
              free strategy session. No pressure, no obligations.
            </p>
            <Link href="/contact">
              <LiquidButton className="h-16 px-10 text-xl tracking-[0.15em]">
                Free Strategy Session
              </LiquidButton>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
