'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import {
  Rocket, Zap, Crown, Building2,
  Search, TrendingUp, Target, Flame,
  Brain, BarChart3, MousePointerClick, Layers,
  TrendingUp as TrendingUpAlt, HeartHandshake,
  ChevronRight,
} from 'lucide-react';
import type { IndustryData } from './data';

const liquidEasing = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: {
    y: 0, opacity: 1, filter: 'blur(0px)',
    transition: { ease: liquidEasing as any, duration: 1 },
  },
};

/* ─── Shared Tier Data ─── */
const websiteTiers = [
  { slug: 'ignite', name: 'Ignite', hook: 'Launch with confidence.', icon: Rocket },
  { slug: 'accelerate', name: 'Accelerate', hook: 'Outpace the competition.', icon: Zap },
  { slug: 'dominate', name: 'Dominate', hook: 'Own your market.', icon: Crown },
  { slug: 'empire', name: 'Empire', hook: 'Scale without limits.', icon: Building2 },
];

const marketingTiers = [
  { name: 'Foundation', hook: 'Get found.', icon: Search },
  { name: 'Velocity', hook: 'Accelerate growth.', icon: TrendingUp },
  { name: 'Authority', hook: 'Own the market.', icon: Target },
  { name: 'Dominion', hook: 'Total dominance.', icon: Flame },
];

const platformFeatures = [
  { title: 'AI-Powered GEO Engine', icon: Brain },
  { title: 'Real-Time KPI Dashboard', icon: BarChart3 },
  { title: 'Conversion Architecture', icon: MousePointerClick },
  { title: 'Omni-Channel Orchestration', icon: Layers },
  { title: 'Predictive Analytics', icon: TrendingUpAlt },
  { title: 'White-Glove Partnership', icon: HeartHandshake },
];

/* ─── The Component ─── */
export default function IndustryPageClient({ data }: { data: IndustryData }) {
  return (
    <main className="pt-32 lg:pt-40 overflow-x-hidden">
      {/* ── S1: Hero ── */}
      <section className="pb-24 lg:pb-32 border-b border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8 block border-l-4 border-primary pl-4">
              {data.name}
            </span>
            <h1 className="text-foreground text-4xl sm:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
              {data.headline.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary">
                {data.headline.split(' ').slice(-1)}
              </span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl font-medium border-l-8 border-primary pl-8 mb-12">
              {data.subline}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
              <Link href="/contact">
                <LiquidButton className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-xl tracking-[0.1em] sm:tracking-[0.15em]">
                  {data.ctaText}
                </LiquidButton>
              </Link>
              <div className="flex items-center gap-6">
                <span className="text-primary text-4xl sm:text-5xl lg:text-6xl font-black italic leading-none tracking-tighter">
                  {data.heroStat.value}
                </span>
                <span className="text-muted-foreground text-sm uppercase tracking-widest font-bold max-w-[120px] leading-tight">
                  {data.heroStat.label}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── S2: Pain Points ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-foreground text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-6">
              The Challenges You <span className="text-primary">Face</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl font-medium mb-16">
              Every {data.name.toLowerCase().split('/')[0].trim()} business faces these digital roadblocks. We&apos;ve solved them hundreds of times.
            </p>
          </ScrollReveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {data.painPoints.map((point, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="bg-card border border-border/40 rounded-[2rem] p-8 lg:p-10 hover:border-destructive/50 transition-all duration-500 h-full group">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-destructive/40 text-5xl font-black italic leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-card-foreground text-xl lg:text-2xl font-black italic uppercase tracking-tighter mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-base font-medium leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── S3: Solutions ── */}
      <section className="py-24 lg:py-32 border-t border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-foreground text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-6">
              How We <span className="text-primary">Solve It</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl font-medium mb-16">
              Proven strategies, proprietary technology, and the experience of 13+ years building digital empires for {data.name.toLowerCase()} businesses.
            </p>
          </ScrollReveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {data.solutions.map((solution, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="bg-card border border-border/40 rounded-[2rem] p-8 lg:p-10 hover:border-primary/50 transition-all duration-500 h-full group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest">
                      Solution {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-card-foreground text-xl lg:text-2xl font-black italic uppercase tracking-tighter mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-base font-medium leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── S4: Website Tiers (Roya-style) ── */}
      <section className="py-24 lg:py-32 border-t border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8 block border-l-4 border-primary pl-4">
              CUSTOM WEB DESIGN FOR {data.name.toUpperCase().split('/')[0].trim()}
            </span>
            <h2 className="text-foreground text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-6">
              Choose Your <span className="text-primary">Tier.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl font-medium mb-16">
              {data.websiteCopy}
            </p>
          </ScrollReveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {websiteTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <motion.div key={tier.slug} variants={itemVariants}>
                  <Link href={`/websites/${tier.slug}`} className="block group h-full">
                    <div className="bg-card border border-border/40 p-8 rounded-[2rem] h-full hover:border-primary/50 transition-all duration-500 flex flex-col">
                      <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                        <TierIcon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-card-foreground text-2xl font-black italic uppercase tracking-tighter mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-primary text-sm font-bold italic mb-4">{tier.hook}</p>
                      <div className="mt-auto flex items-center gap-2 text-primary font-black uppercase italic tracking-tighter text-sm group-hover:gap-4 transition-all duration-500">
                        Learn More <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── S5: Marketing Packages (Roya-style) ── */}
      <section className="py-24 lg:py-32 border-t border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8 block border-l-4 border-primary pl-4">
              MARKETING FOR {data.name.toUpperCase().split('/')[0].trim()}
            </span>
            <h2 className="text-foreground text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-6">
              Proven Marketing <span className="text-primary">Packages.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl font-medium mb-16">
              {data.marketingCopy}
            </p>
          </ScrollReveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {marketingTiers.map((tier, i) => {
              const MktIcon = tier.icon;
              return (
                <motion.div key={tier.name} variants={itemVariants}>
                  <Link href="/marketing" className="block group h-full">
                    <div className="bg-card border border-border/40 p-8 rounded-[2rem] h-full hover:border-primary/50 transition-all duration-500 flex flex-col">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <MktIcon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="text-primary/30 text-3xl font-black italic leading-none select-none">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-card-foreground text-2xl font-black italic uppercase tracking-tighter mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-primary text-sm font-bold italic mb-4">{tier.hook}</p>
                      <div className="mt-auto flex items-center gap-2 text-primary font-black uppercase italic tracking-tighter text-sm group-hover:gap-4 transition-all duration-500">
                        View Package <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── S6: FoundIt OS™ Platform Section ── */}
      <section className="py-24 lg:py-32 border-t border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8 block border-l-4 border-primary pl-4">
              THE TECHNOLOGY BEHIND YOUR RESULTS
            </span>
            <h2 className="text-foreground text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-6">
              Powered by <span className="text-primary">FoundIt OS™</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl font-medium mb-16">
              Every agency offers web design and SEO. We built a proprietary intelligence layer that makes the difference between showing up and dominating.
            </p>
          </ScrollReveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {platformFeatures.map((feat) => {
              const FeatIcon = feat.icon;
              return (
                <motion.div key={feat.title} variants={itemVariants}>
                  <Link href="/platform" className="block group">
                    <div className="bg-card border border-border/40 p-5 sm:p-6 lg:p-8 rounded-[1.5rem] hover:border-primary/50 transition-all duration-500 flex items-center sm:items-start gap-3 sm:gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 shrink-0 group-hover:bg-primary/20 transition-colors">
                        <FeatIcon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <span className="text-card-foreground font-bold text-sm lg:text-base">
                        {feat.title}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── S7: Closing CTA ── */}
      <section className="py-24 lg:py-32 border-t border-border/10">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-4 text-primary">
              Ready to Dominate?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Get a custom strategy built specifically for the{' '}
              {data.name.toLowerCase()} industry. No pressure, no obligations.
            </p>
            <Link href="/contact">
              <LiquidButton className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-xl tracking-[0.1em] sm:tracking-[0.15em]">
                {data.ctaText}
              </LiquidButton>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
