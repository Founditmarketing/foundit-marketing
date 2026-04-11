'use client';

import { motion, Variants } from 'framer-motion';

const liquidEasing = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: liquidEasing as any,
      duration: 0.9,
    },
  },
};

interface TrustPillar {
  anchor: string;
  line: string;
  stat: string | null;
  statLabel: string | null;
}

const pillars: TrustPillar[] = [
  {
    anchor: 'Technology',
    line: 'AI-first. Always innovating. We build the tools that other agencies wish they had.',
    stat: 'GEO',
    statLabel: 'Pioneers',
  },
  {
    anchor: 'Results',
    line: 'Complete transparency. Clear ROI. Every dollar tracked, every result measured.',
    stat: '$2.3B+',
    statLabel: 'Client Revenue',
  },
  {
    anchor: 'Urgency',
    line: "We move fast. Your project won't stagnate. Speed is a competitive advantage — we wield it.",
    stat: '48hrs',
    statLabel: 'Avg. Response',
  },
  {
    anchor: 'Partnership',
    line: "We don't do 8-month engagements. We build decade-long empires with our clients.",
    stat: '5+ yrs',
    statLabel: 'Avg. Tenure',
  },
];

export function TrustBlock() {
  return (
    <section className="bg-background py-12 sm:py-24 lg:py-32 overflow-hidden relative border-t border-border/10">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: liquidEasing as any }}
          className="mb-20"
        >
          <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8 block border-l-4 border-primary pl-4">
            THE FOUND IT DIFFERENCE
          </span>
          <h2 className="text-foreground text-oversized">
            What We <span className="text-primary">Stand For.</span>
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.anchor}
              variants={itemVariants}
              className="group relative"
            >
              <div className="border-t-2 border-primary/30 group-hover:border-primary transition-colors duration-500 pt-8">
                {/* Stat */}
                {pillar.stat && (
                  <div className="mb-6">
                    <p className="text-primary text-4xl lg:text-5xl font-black italic tracking-tighter leading-none">
                      {pillar.stat}
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.4em] mt-2 opacity-60">
                      {pillar.statLabel}
                    </p>
                  </div>
                )}

                {/* Anchor word */}
                <h3 className="text-foreground text-2xl lg:text-3xl font-black uppercase italic tracking-tighter mb-4 group-hover:text-primary transition-colors duration-500">
                  {pillar.anchor}
                </h3>

                {/* Supporting line */}
                <p className="text-muted-foreground text-sm lg:text-base font-medium leading-relaxed">
                  {pillar.line}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 13+ Years bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: liquidEasing as any }}
          className="mt-20 bg-card/30 backdrop-blur-xl border border-border/30 rounded-[2rem] p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <span className="text-primary text-6xl lg:text-7xl font-black italic tracking-tighter leading-none">
              13+
            </span>
            <div>
              <p className="text-foreground font-black uppercase italic tracking-tighter text-xl">
                Years of Excellence
              </p>
              <p className="text-muted-foreground text-sm font-medium mt-1">
                Building digital empires since 2013
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 opacity-60">
            <div className="text-center">
              <p className="text-foreground text-2xl font-black italic tracking-tighter">
                $560M+
              </p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-[0.3em] font-bold mt-1">
                Organic Revenue
              </p>
            </div>
            <div className="w-px h-12 bg-border/50" />
            <div className="text-center">
              <p className="text-foreground text-2xl font-black italic tracking-tighter">
                48
              </p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-[0.3em] font-bold mt-1">
                States Served
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
