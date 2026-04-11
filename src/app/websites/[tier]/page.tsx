import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { Rocket, Zap, Crown, Building2, Check, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TierData {
  name: string;
  hook: string;
  headline: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
  idealFor: string[];
  ctaText: string;
  prevTier: string | null;
  nextTier: { name: string; slug: string } | null;
}

const tiers: Record<string, TierData> = {
  ignite: {
    name: 'Ignite',
    hook: 'Launch with confidence.',
    headline: 'Your Launchpad to Digital Presence',
    description: 'Professional template-based design infused with your brand identity.',
    longDescription:
      'The Ignite tier is built for businesses ready to establish a powerful online presence without the overhead of a full custom build. We take proven, high-performing design frameworks and infuse them with your unique brand identity — your colors, your voice, your story. The result is a fast, mobile-optimized, SEO-ready website that looks custom-built at a fraction of the cost and timeline.',
    icon: Rocket,
    features: [
      'Brand-integrated responsive design customized to your identity',
      'Mobile-first architecture for flawless performance on every device',
      'SEO-optimized page structure and meta framework',
      'Google Analytics & Search Console integration',
      'Lead capture forms with email notifications',
      'SSL security certificate and fast cloud hosting',
      'Google Business Profile setup and optimization',
      'Social media integration and sharing',
      '30-day post-launch support period',
    ],
    idealFor: [
      'New businesses needing a professional web presence fast',
      'Startups validating their market before investing in custom design',
      'Practices and firms replacing an outdated or DIY website',
      'Businesses on a budget who refuse to compromise on quality',
    ],
    ctaText: 'Launch Your Ignite Website',
    prevTier: null,
    nextTier: { name: 'Accelerate', slug: 'accelerate' },
  },
  accelerate: {
    name: 'Accelerate',
    hook: 'Outpace your competition.',
    headline: 'Custom Design Engineered for Conversion',
    description: 'Fully custom-designed website with conversion optimization baked into every pixel.',
    longDescription:
      'Accelerate is where strategy meets design. Every page is architected around your specific customer journey, with conversion optimization built into every interaction. We don\'t just make it look good — we make it perform. From strategic content architecture to advanced third-party integrations, Accelerate gives you a website that actively works to grow your business.',
    icon: Zap,
    features: [
      'Everything in Ignite, plus:',
      'Fully custom UI/UX design tailored to your brand and audience',
      'Strategic content architecture designed around your customer journey',
      'Conversion rate optimization (CRO) best practices built in',
      'Advanced third-party integrations (CRM, booking, payment, etc.)',
      'A/B testing infrastructure for ongoing optimization',
      'Custom contact and lead generation forms with routing',
      'Blog/content management system for ongoing content marketing',
      'Competitive analysis and design benchmarking',
      'Priority 60-day post-launch support',
    ],
    idealFor: [
      'Established businesses ready to outperform competitors online',
      'Companies whose current website isn\'t converting visitors to leads',
      'Businesses needing CRM, booking, or payment integrations',
      'Growth-stage companies investing in long-term digital infrastructure',
    ],
    ctaText: 'Build Your Accelerate Website',
    prevTier: 'ignite',
    nextTier: { name: 'Dominate', slug: 'dominate' },
  },
  dominate: {
    name: 'Dominate',
    hook: 'Own your market.',
    headline: 'AI-Powered Digital Dominance',
    description: 'Full custom build with AI features, advanced analytics, and ongoing optimization.',
    longDescription:
      'Dominate is for businesses that refuse to settle for second place. This tier delivers a fully custom-built digital experience powered by AI features, real-time analytics dashboards, and custom application development. But the real value is what happens after launch — ongoing performance optimization ensures your site gets better every month while your competitors stand still.',
    icon: Crown,
    features: [
      'Everything in Accelerate, plus:',
      'AI-powered chatbots and intelligent user experiences',
      'Custom application development and interactive tools',
      'Advanced analytics dashboards with real-time reporting',
      'Heat mapping and user behavior analysis',
      'Ongoing performance optimization and monthly improvements',
      'Custom API integrations and data pipeline development',
      'Advanced security hardening and performance monitoring',
      'Dedicated project manager and development team',
      'Priority support with same-day response SLA',
      '90-day comprehensive post-launch optimization period',
    ],
    idealFor: [
      'Market leaders who want to create distance between themselves and competitors',
      'Businesses needing custom tools, calculators, or interactive features',
      'Companies wanting AI-powered features and automation',
      'High-revenue businesses where website performance directly impacts bottom line',
    ],
    ctaText: 'Dominate Your Market',
    prevTier: 'accelerate',
    nextTier: { name: 'Empire', slug: 'empire' },
  },
  empire: {
    name: 'Empire',
    hook: 'Scale without limits.',
    headline: 'Enterprise Infrastructure Built for Scale',
    description: 'Multi-location enterprise solution with centralized management.',
    longDescription:
      'Empire is engineered for businesses that think in multiple locations, multiple markets, and multiple revenue streams. This tier delivers franchise-ready digital infrastructure with custom microsites per location, centralized content management, and custom API integrations that connect your entire operation. If you\'re building an empire, you need infrastructure that scales without breaking.',
    icon: Building2,
    features: [
      'Everything in Dominate, plus:',
      'Multi-location microsite system with location-specific content',
      'Centralized content management across all properties',
      'Franchise-ready infrastructure with role-based access',
      'Custom API development and enterprise data pipelines',
      'Multi-location SEO strategy and local landing pages',
      'Enterprise-grade hosting with 99.99% uptime SLA',
      'White-glove onboarding and training for your team',
      'Dedicated senior development team and account executive',
      'Quarterly business reviews and roadmap planning',
      'Custom reporting portal for stakeholders and investors',
    ],
    idealFor: [
      'Multi-location businesses needing unified digital presence',
      'Franchise brands requiring location-specific microsites',
      'Enterprise companies with complex integration requirements',
      'National brands scaling from regional to coast-to-coast operations',
    ],
    ctaText: 'Build Your Empire',
    prevTier: 'dominate',
    nextTier: null,
  },
};

const tierOrder = ['ignite', 'accelerate', 'dominate', 'empire'];

export async function generateStaticParams() {
  return tierOrder.map((tier) => ({ tier }));
}

export async function generateMetadata({
  params,
}: {
  params: { tier: string };
}): Promise<Metadata> {
  const data = tiers[params.tier];
  if (!data) return {};

  return {
    title: `${data.name} Web Design | Found It Marketing`,
    description: `${data.hook} ${data.description}`,
  };
}

export default function TierPage({
  params,
}: {
  params: { tier: string };
}) {
  const data = tiers[params.tier];
  if (!data) return notFound();

  const TierIcon = data.icon;
  const currentIndex = tierOrder.indexOf(params.tier);

  return (
    <main className="pt-32 lg:pt-40">
      {/* Hero */}
      <section className="pb-20 lg:pb-32 border-b border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                <TierIcon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em]">
                Website Tier {String(currentIndex + 1).padStart(2, '0')}
              </span>
            </div>
            <h1 className="text-foreground text-4xl sm:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-4">
              {data.name}<span className="text-primary">.</span>
            </h1>
            <p className="text-primary text-xl lg:text-2xl font-bold italic mb-8">
              {data.hook}
            </p>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl font-medium border-l-8 border-primary pl-8">
              {data.longDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-foreground text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-16">
              What&apos;s <span className="text-primary">Included</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-card border border-border/40 rounded-[1.5rem] p-6 lg:p-8 hover:border-primary/50 transition-all duration-500 flex items-start gap-4">
                  {feature.startsWith('Everything') ? (
                    <>
                      <div className="p-1.5 bg-primary/20 rounded-lg mt-0.5 shrink-0">
                        <ArrowRight className="w-4 h-4 text-primary" strokeWidth={2.5} />
                      </div>
                      <span className="text-primary font-bold italic text-lg">{feature}</span>
                    </>
                  ) : (
                    <>
                      <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5 shrink-0">
                        <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                      </div>
                      <span className="text-card-foreground text-base lg:text-lg font-medium">{feature}</span>
                    </>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-24 lg:py-32 border-t border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-foreground text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-16">
              Ideal <span className="text-primary">For</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.idealFor.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border/40 rounded-[2rem] p-8 lg:p-10 hover:border-primary/50 transition-all duration-500">
                  <span className="text-primary text-5xl font-black italic opacity-30 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-card-foreground text-lg font-medium mt-4">
                    {item}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-border/10">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-4 text-primary">
              {data.ctaText}
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Let&apos;s discuss how the {data.name} tier fits your goals and budget.
            </p>
            <Link href="/contact">
              <LiquidButton className="h-16 px-10 text-xl tracking-[0.15em]">
                Free Strategy Session
              </LiquidButton>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Tier Navigation */}
      <section className="py-12 border-t border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {data.prevTier ? (
              <Link
                href={`/websites/${data.prevTier}`}
                className="text-muted-foreground hover:text-primary transition-colors font-bold uppercase italic tracking-tighter text-lg flex items-center gap-2"
              >
                ← Previous: {tiers[data.prevTier]?.name}
              </Link>
            ) : (
              <div />
            )}
            <Link
              href="/web-development"
              className="text-muted-foreground hover:text-primary transition-colors font-bold uppercase italic tracking-tighter text-sm"
            >
              View All Projects →
            </Link>
            {data.nextTier ? (
              <Link
                href={`/websites/${data.nextTier.slug}`}
                className="text-muted-foreground hover:text-primary transition-colors font-bold uppercase italic tracking-tighter text-lg flex items-center gap-2"
              >
                Next: {data.nextTier.name} →
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
