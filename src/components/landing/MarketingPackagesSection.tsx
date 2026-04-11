'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, TrendingUp, Target, Flame, ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

const liquidEasing = [0.16, 1, 0.3, 1] as const;

interface MarketingTier {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  inheritsFrom: string | null;
  features: string[];
}

const tiers: MarketingTier[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    tagline: 'Ready to get found?',
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
    id: 'velocity',
    name: 'Velocity',
    tagline: 'Ready to accelerate growth?',
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
    id: 'authority',
    name: 'Authority',
    tagline: 'Ready to own your market?',
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
    id: 'dominion',
    name: 'Dominion',
    tagline: 'Ready for total market dominance?',
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

export function MarketingPackagesSection() {
  const [activeId, setActiveId] = useState('foundation');
  const activeTier = tiers.find((t) => t.id === activeId) || tiers[0];

  return (
    <section className="bg-background py-24 lg:py-32 overflow-hidden relative border-t border-border/10">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Decorative */}
        <div className="blur-blob w-[500px] h-[500px] bg-primary/8 top-20 -left-40" />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: liquidEasing as any }}
          className="mb-24"
        >
          <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8 block border-l-4 border-primary pl-4">
            MARKETING PACKAGES
          </span>
          <h2 className="text-foreground text-oversized mb-4">
            Growth on <span className="text-primary">Your Terms.</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl font-medium border-l-8 border-primary pl-8 mt-8">
            Every tier builds on the last. Start where you are, scale as you grow. No wasted spend, no missing pieces — just a proven ladder to market dominance.
          </p>
        </motion.div>

        {/* Tier Selector Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: liquidEasing as any }}
        >
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-auto bg-card/30 p-2 rounded-[2rem] border border-border/50 mb-16 shadow-lg backdrop-blur-xl relative z-10">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveId(tier.id)}
                className={cn(
                  'text-muted-foreground font-black uppercase italic tracking-tighter py-6 px-4 text-sm rounded-[1.5rem] transition-all duration-500 text-center',
                  activeId === tier.id
                    ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/30 scale-[1.05] z-20'
                    : 'hover:bg-primary/5 hover:text-primary'
                )}
              >
                {tier.name}
              </button>
            ))}
          </div>

          {/* Active Tier Content */}
          <motion.div
            key={activeTier.id}
            initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: liquidEasing as any }}
            className="bg-card border border-border/50 rounded-[4rem] p-8 sm:p-12 lg:p-20 relative z-10 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-start">
              {/* Left: Info */}
              <div className="lg:col-span-7">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <activeTier.icon
                    className="w-16 h-16 lg:w-20 lg:h-20 text-primary mb-8"
                    strokeWidth={1}
                  />
                </motion.div>

                <p className="text-primary text-sm font-black uppercase tracking-[0.3em] mb-4">
                  {activeTier.tagline}
                </p>

                <h3 className="text-card-foreground font-black text-4xl lg:text-6xl italic uppercase tracking-tighter mb-6 leading-none">
                  {activeTier.name}
                </h3>

                {activeTier.inheritsFrom && (
                  <p className="text-primary/80 font-bold italic text-lg mb-8 border-l-4 border-primary/40 pl-6">
                    Includes everything from {activeTier.inheritsFrom}, plus:
                  </p>
                )}

                {/* Feature List */}
                <ul className="space-y-4">
                  {activeTier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <div className="p-1 bg-primary/10 rounded-lg mt-0.5 shrink-0">
                        <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                      </div>
                      <span className="text-muted-foreground text-base lg:text-lg font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: CTA */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center lg:sticky lg:top-8">
                <div className="bg-background/40 backdrop-blur-2xl border border-primary/20 rounded-[2.5rem] p-10 lg:p-14 text-center w-full shadow-2xl">
                  <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.4em] mb-4 opacity-60">
                    NO PRICING ON SITE
                  </p>
                  <p className="text-card-foreground text-2xl lg:text-3xl font-black italic uppercase tracking-tighter mb-2">
                    Custom Pricing
                  </p>
                  <p className="text-muted-foreground text-sm mb-8 font-medium">
                    Every business is different. Let&apos;s find the right tier and investment for your goals.
                  </p>
                  <Link href="/contact">
                    <button className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-5 px-8 rounded-2xl text-lg hover:scale-[1.03] active:scale-[0.97] transition-transform shadow-2xl shadow-primary/30 flex items-center justify-center gap-3">
                      Get Your Strategy Session
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>

                {/* Cumulative Visual */}
                <div className="mt-8 flex items-center gap-3 opacity-60">
                  {tiers.map((t, i) => (
                    <div
                      key={t.id}
                      className={cn(
                        'h-2 rounded-full transition-all duration-500',
                        tiers.findIndex((x) => x.id === activeId) >= i
                          ? 'bg-primary w-8'
                          : 'bg-border w-4'
                      )}
                    />
                  ))}
                  <span className="text-[9px] text-muted-foreground uppercase tracking-[0.3em] font-bold ml-2">
                    Cumulative
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
