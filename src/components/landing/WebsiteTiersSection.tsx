'use client';

import { motion, Variants } from 'framer-motion';
import { Rocket, Zap, Crown, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

const liquidEasing = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      ease: liquidEasing as any,
      duration: 1,
    },
  },
};

interface WebsiteTier {
  slug: string;
  name: string;
  hook: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  accent: string;
}

const tiers: WebsiteTier[] = [
  {
    slug: 'ignite',
    name: 'Ignite',
    hook: 'Launch with confidence.',
    description:
      'Professional template-based design infused with your brand identity. Mobile-optimized, lightning-fast, and SEO-ready from day one. The perfect launchpad for new businesses ready to make their mark.',
    icon: Rocket,
    features: [
      'Brand-integrated responsive design',
      'SEO-optimized architecture',
      'Mobile-first performance',
      'Lead capture forms',
      'Google Analytics integration',
    ],
    accent: 'from-orange-500/20 to-amber-500/10',
  },
  {
    slug: 'accelerate',
    name: 'Accelerate',
    hook: 'Outpace your competition.',
    description:
      'Fully custom-designed website with conversion optimization baked into every pixel. Advanced integrations, strategic content architecture, and data-driven design that turns visitors into customers.',
    icon: Zap,
    features: [
      'Everything in Ignite, plus:',
      'Custom UI/UX design',
      'Conversion rate optimization',
      'Advanced third-party integrations',
      'Content strategy & architecture',
      'A/B testing infrastructure',
    ],
    accent: 'from-orange-500/25 to-red-500/10',
  },
  {
    slug: 'dominate',
    name: 'Dominate',
    hook: 'Own your market.',
    description:
      'Full custom build with AI-powered features, advanced analytics dashboards, and custom functionality. Ongoing optimization ensures you stay ahead while competitors scramble to keep up.',
    icon: Crown,
    features: [
      'Everything in Accelerate, plus:',
      'AI-powered features & chatbots',
      'Custom application development',
      'Advanced analytics & reporting',
      'Ongoing performance optimization',
      'Priority support & dedicated team',
    ],
    accent: 'from-orange-500/30 to-rose-500/15',
  },
  {
    slug: 'empire',
    name: 'Empire',
    hook: 'Scale without limits.',
    description:
      'Multi-location enterprise solution engineered for scale. Custom microsites per location, centralized management, franchise-ready infrastructure — built for businesses that refuse to think small.',
    icon: Building2,
    features: [
      'Everything in Dominate, plus:',
      'Multi-location microsite system',
      'Centralized content management',
      'Franchise-ready infrastructure',
      'Custom API & data pipelines',
      'Enterprise SLA & white-glove onboarding',
    ],
    accent: 'from-orange-500/30 to-primary/20',
  },
];

export function WebsiteTiersSection() {
  return (
    <section className="bg-background py-24 lg:py-32 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Decorative blobs */}
        <div className="blur-blob w-[500px] h-[500px] bg-primary/10 -top-40 -right-40" />
        <div className="blur-blob w-[400px] h-[400px] bg-blue-500/5 bottom-0 -left-40" />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: liquidEasing as any }}
          className="mb-24"
        >
          <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8 block border-l-4 border-primary pl-4">
            CUSTOM WEB DESIGN
          </span>
          <h2 className="text-foreground text-oversized mb-4">
            Your Website, <span className="text-primary">Your Tier.</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl font-medium border-l-8 border-primary pl-8 mt-8">
            From ambitious startups to multi-location empires, we have a website tier engineered for exactly where you are — and where you&apos;re going.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {tiers.map((tier, index) => (
            <motion.div key={tier.name} variants={itemVariants}>
              <Link
                href={`/websites/${tier.slug}`}
                className="block group h-full"
              >
                <div className="relative bg-card border border-border/40 p-8 lg:p-12 rounded-[3rem] flex flex-col h-full hover:border-primary/50 transition-all duration-700 ease-liquid shadow-xl hover:shadow-2xl overflow-hidden">
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                  <div className="relative z-10">
                    {/* Tier badge */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          className="p-4 bg-primary/10 rounded-2xl border border-primary/20 group-hover:bg-primary/20 transition-colors"
                        >
                          <tier.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                        </motion.div>
                        <div>
                          <h3 className="text-card-foreground text-3xl lg:text-4xl font-black italic uppercase tracking-tighter">
                            {tier.name}
                          </h3>
                          <p className="text-primary text-sm font-bold italic mt-1">
                            {tier.hook}
                          </p>
                        </div>
                      </div>
                      <span className="text-primary/30 text-8xl font-black italic leading-none select-none hidden lg:block">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8 font-medium">
                      {tier.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className={feature.startsWith('Everything') ? 'text-primary font-bold italic' : ''}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-black uppercase italic tracking-tighter text-sm group-hover:gap-4 transition-all duration-500">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
