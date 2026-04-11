import { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LiquidButton } from '@/components/ui/LiquidButton';
import {
  Brain,
  BarChart3,
  MousePointerClick,
  Layers,
  TrendingUp,
  HeartHandshake,
  Check,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FoundIt OS™ | Our Proprietary Intelligence Platform',
  description:
    'The proprietary intelligence layer that separates showing up from dominating. AI-powered GEO, real-time analytics, conversion architecture, and white-glove partnership.',
};

interface PlatformFeature {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
}

const features: PlatformFeature[] = [
  {
    icon: Brain,
    title: 'AI-Powered GEO Engine',
    tagline: 'Be the answer AI recommends.',
    description:
      'We reverse-engineer what AI models want, structuring your digital presence to be the answer Google, ChatGPT, Gemini, and Perplexity recommend to their users. While your competitors optimize for keywords, we optimize for AI comprehension.',
    capabilities: [
      'Generative Engine Optimization (GEO) for AI visibility',
      'Answer Engine Optimization (AEO) for featured snippets',
      'Structured data and schema markup for AI comprehension',
      'Content architecture designed for LLM citation',
      'Multi-platform AI monitoring and ranking reports',
    ],
  },
  {
    icon: BarChart3,
    title: 'Real-Time KPI Dashboard',
    tagline: 'Every dollar tracked. Every result measured.',
    description:
      'Our custom data pipelines aggregate performance data from every channel into a single, real-time dashboard. Leads, revenue, ad spend, ROI — all visible as it happens, not buried in a monthly PDF.',
    capabilities: [
      'Real-time lead and revenue tracking',
      'Cross-channel attribution modeling',
      'Custom KPI dashboards tailored to your business',
      'Automated reporting with executive summaries',
      'Integration with your CRM for closed-loop analytics',
    ],
  },
  {
    icon: MousePointerClick,
    title: 'Conversion Architecture',
    tagline: 'Every click has a purpose.',
    description:
      'Every page is engineered for conversion with heat mapping, A/B testing, and AI-driven UX optimization. We don\'t guess what works — we test, measure, and iterate until your website becomes a lead-generating machine.',
    capabilities: [
      'Heat mapping and user behavior analysis',
      'A/B and multivariate testing infrastructure',
      'AI-powered UX optimization recommendations',
      'Conversion funnel analysis and optimization',
      'Page speed and Core Web Vitals optimization',
    ],
  },
  {
    icon: Layers,
    title: 'Omni-Channel Orchestration',
    tagline: 'One strategy. Every platform.',
    description:
      'Unified campaigns across Google, Meta, YouTube, and AI platforms — managed from one strategic command center. Cross-channel attribution ensures every touchpoint is optimized for maximum ROI.',
    capabilities: [
      'Unified campaign management across all channels',
      'Cross-platform budget optimization',
      'Audience segmentation and retargeting',
      'Creative testing and performance optimization',
      'Full-funnel attribution from click to close',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    tagline: 'Stay two moves ahead.',
    description:
      'AI models forecast market trends and recommend budget allocation before your competitors even notice the shift. Predictive analytics turn reactive marketing into proactive market domination.',
    capabilities: [
      'AI-powered trend forecasting for your market',
      'Predictive budget allocation recommendations',
      'Seasonal demand modeling and planning',
      'Competitor movement detection and alerts',
      'Market opportunity scoring and prioritization',
    ],
  },
  {
    icon: HeartHandshake,
    title: 'White-Glove Partnership',
    tagline: 'We don\'t do 8-month engagements.',
    description:
      'The average agency keeps clients for 8 months. Our average partnership tenure is over 5 years. That\'s not luck — it\'s the result of dedicated strategists, direct lines, and treating your business growth as our mission.',
    capabilities: [
      'Dedicated senior strategist with a direct line',
      'Quarterly business reviews and roadmap planning',
      'Priority support with same-day response',
      'Proactive strategy recommendations, not just reports',
      'Access to our full team: design, dev, analytics, content',
    ],
  },
];

export default function FoundItOSPage() {
  return (
    <main className="pt-32 lg:pt-40">
      {/* Hero */}
      <section className="pb-20 lg:pb-32 border-b border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8 block border-l-4 border-primary pl-4">
              OUR PROPRIETARY PLATFORM
            </span>
            <h1 className="text-foreground text-4xl sm:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
              The <span className="text-primary">FoundIt OS</span>™
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl font-medium border-l-8 border-primary pl-8">
              Every agency offers web design and SEO. We built a proprietary
              intelligence layer that makes the difference between showing up
              and dominating. This is the technology that powers every client
              relationship and every result we deliver.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature Deep Dives */}
      {features.map((feature, i) => {
        const FeatureIcon = feature.icon;
        return (
          <section
            key={feature.title}
            className="py-24 lg:py-32 border-b border-border/10"
          >
            <div className="max-w-[1440px] mx-auto px-6">
              <ScrollReveal>
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                        <FeatureIcon
                          className="w-8 h-8 text-primary"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-primary/30 text-5xl font-black italic leading-none select-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="text-foreground text-3xl lg:text-5xl font-black italic uppercase tracking-tighter mb-4 leading-none">
                      {feature.title}
                    </h2>
                    <p className="text-primary text-lg font-bold italic mb-8">
                      {feature.tagline}
                    </p>
                    <p className="text-muted-foreground text-base lg:text-lg font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="lg:col-span-6">
                    <div className="bg-card border border-border/40 rounded-[2.5rem] p-8 lg:p-10">
                      <h3 className="text-foreground font-black uppercase italic tracking-tighter text-lg mb-6">
                        Key Capabilities
                      </h3>
                      <ul className="space-y-4">
                        {feature.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-4">
                            <div className="p-1 bg-primary/10 rounded-lg mt-0.5 shrink-0">
                              <Check
                                className="w-4 h-4 text-primary"
                                strokeWidth={2.5}
                              />
                            </div>
                            <span className="text-muted-foreground text-base font-medium">
                              {cap}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-4 text-primary">
              See the OS in Action.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Schedule a strategy session and we&apos;ll show you exactly how
              FoundIt OS™ drives results for businesses like yours.
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
