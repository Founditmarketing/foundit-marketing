'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';

const DynamicBackground = dynamic(
  () =>
    import('@/components/landing/LightModeArtwork').then(
      (mod) => mod.DynamicBackground
    ),
  { ssr: false }
);


import { LucideIcon, Users, DollarSign, Zap } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

// StatCard component integrated from the former TrustBar
const StatCard = ({
  value,
  label,
  icon: Icon,
  prefix = '',
  suffix = '',
  isAnimated = false,
  decimals = 0,
}: {
  value: string | number;
  label: string;
  icon: LucideIcon;
  prefix?: string;
  suffix?: string;
  isAnimated?: boolean;
  decimals?: number;
}) => {
  const [displayValue, setDisplayValue] = useState(isAnimated ? 0 : value);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isAnimated || typeof value !== 'number' || value === 0 || !isInView) {
      if (!isInView && isAnimated) setDisplayValue(0);
      else setDisplayValue(value);
      return;
    }

    let start = 0;
    const end = value;
    const duration = 2000;
    const range = end - start;
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutExpo = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };
      const currentVal = start + easeOutExpo(progress) * range;
      setDisplayValue(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, isAnimated, decimals, isInView]);

  const formatValue = (val: number) => {
    return val.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <div className="flex flex-col items-center group" ref={countRef}>
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 bg-primary/5 rounded-2xl border border-primary/10 group-hover:bg-primary/15 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.1)]">
          <Icon className="w-8 h-8 text-primary" strokeWidth={1} />
        </div>
        <span className="text-foreground text-5xl font-black tabular-nums tracking-tighter italic">
          {prefix}
          {typeof displayValue === 'number'
            ? formatValue(displayValue)
            : displayValue}
          {suffix}
        </span>
      </div>
      <p className="text-muted-foreground font-black text-[10px] uppercase tracking-[0.4em] opacity-60">
        {label}
      </p>
    </div>
  );
};

import { NeuralNetworkBackground } from '@/components/ui/NeuralNetworkBackground';
import { TextScramble } from '@/components/ui/TextScramble';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const revealVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.98, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        ease: [0.16, 1, 0.3, 1] as any,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1] as any,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative bg-background min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b pt-0 pb-20 lg:pb-60">
      <div className="hidden lg:block absolute inset-0 z-0 opacity-100">
        <NeuralNetworkBackground />
      </div>

      <div className="flex-grow flex items-center relative z-10 w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 w-full relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-8 relative z-20">
              <div className="mb-0 py-2 lg:py-8 pl-2 pr-6 text-center w-full">
                <motion.h1
                  variants={revealVariants}
                  className="text-foreground text-[8vw] lg:text-[7vw] leading-[0.85] tracking-[-0.04em] font-black font-heading select-none uppercase italic"
                >
                  <TextScramble text="Stop Competing." delay={100} />
                </motion.h1>
              </div>

              <div className="mb-0 py-2 lg:py-8 pl-2 pr-6 text-center w-full">
                <motion.h1
                  variants={revealVariants}
                  className="text-foreground dark:text-primary text-[8vw] lg:text-[7vw] leading-[0.85] tracking-[-0.04em] font-black font-heading select-none uppercase italic pb-6"
                >
                  <TextScramble text="Start Dominating." delay={450} />
                </motion.h1>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl border-l-4 border-primary pl-8 font-medium"
              >
                You don't need another marketing agency. You need an unfair advantage.
                We build digital empires that render competition irrelevant.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center gap-6 w-auto"
              >
                <Link href="/contact" className="w-auto">
                  <LiquidButton className="w-auto px-6 sm:px-12 h-20 text-lg sm:text-xl tracking-normal sm:tracking-[0.2em] shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-transform">
                    Initiate Dominance
                  </LiquidButton>
                </Link>
                <Button
                  asChild
                  variant="ghost"
                  className="h-20 px-6 sm:px-12 text-xl font-black uppercase italic tracking-tighter border-2 border-primary/10 hover:border-primary/40 hover:bg-primary/5 transition-all w-auto group"
                >
                  <Link href="/about" className="flex items-center">
                    The Philosophy
                    <motion.span
                      className="inline-block ml-3"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mission Control: Responsive high-fidelity element */}
            <div className="hidden lg:block lg:col-span-4 relative mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 60, rotate: 5, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, rotate: -2, scale: 1 }}
                transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[400px] mx-auto aspect-[9/19] bg-card/40 border border-primary/20 backdrop-blur-3xl rounded-[3rem] lg:rounded-[4.5rem] p-1 shadow-[0_0_100px_rgba(var(--primary-rgb),0.1)] overflow-hidden group"
              >
                {/* Holographic Edge Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
                <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 blur-sm" />

                {/* Device Frame Inner */}
                <div className="w-full h-full bg-background/60 rounded-[2.9rem] lg:rounded-[4.4rem] border border-white/5 overflow-hidden flex flex-col p-6 lg:p-10 relative">
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:24px_24px] pointer-events-none" />

                  {/* Dynamic Island / Header */}
                  <div className="flex justify-between items-center mb-8 lg:mb-12 relative z-10">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-primary/20" />
                      <div className="w-2 h-2 rounded-full bg-primary/10" />
                    </div>
                    <div className="h-6 w-24 lg:w-32 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center">
                      <p className="text-primary font-mono text-[6px] lg:text-[8px] uppercase tracking-[0.3em] font-black">Uplink Active</p>
                    </div>
                    <div className="flex gap-1 items-end h-4">
                      {[40, 70, 50, 90].map((h, i) => (
                        <div key={i} className="w-1 bg-primary/40 rounded-full" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>

                  {/* Main Display: System Diagnostics */}
                  <div className="flex-grow space-y-6 lg:space-y-8 relative z-10">
                    <div className="space-y-3 lg:space-y-4">
                      <h4 className="text-primary/60 font-mono text-[8px] lg:text-[10px] uppercase tracking-widest">Market Saturation Analysis</h4>
                      <div className="h-20 lg:h-24 w-full bg-primary/5 rounded-2xl lg:rounded-3xl border border-primary/10 p-4 lg:p-6 overflow-hidden relative group/chart">
                        <motion.svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <motion.path
                            d="M 0 60 Q 50 20 100 60 T 200 60 T 300 60 T 400 60 T 500 60"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.4 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          />
                        </motion.svg>
                        <div className="relative flex justify-between items-end h-full">
                          <p className="text-primary font-black text-xl lg:text-2xl italic">98.4%</p>
                          <p className="text-primary/40 font-mono text-[7px] lg:text-[8px] uppercase">Alpha Extraction</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      <div className="bg-primary/5 border border-primary/10 p-3 lg:p-5 rounded-2xl lg:rounded-3xl">
                        <p className="text-primary/40 font-mono text-[7px] lg:text-[8px] uppercase tracking-widest mb-1 lg:mb-2">GEO Authority</p>
                        <p className="text-foreground font-black text-sm lg:text-xl italic uppercase font-mono">Tier 1</p>
                      </div>
                      <div className="bg-primary/5 border border-primary/10 p-3 lg:p-5 rounded-2xl lg:rounded-3xl">
                        <p className="text-primary/40 font-mono text-[7px] lg:text-[8px] uppercase tracking-widest mb-1 lg:mb-2">Sync Delta</p>
                        <p className="text-foreground font-black text-sm lg:text-xl italic uppercase font-mono">0.02ms</p>
                      </div>
                    </div>

                    <div className="pt-4 lg:pt-6 border-t border-primary/10">
                      <div className="flex justify-between items-center mb-3 lg:mb-4">
                        <p className="text-primary font-mono text-[8px] lg:text-[10px] uppercase tracking-[0.2em]">Neural Nodes</p>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40" />)}
                        </div>
                      </div>
                      <div className="space-y-2 lg:space-y-3">
                        <div className="flex justify-between text-[8px] lg:text-[10px] font-mono">
                          <span className="text-foreground/60 uppercase">Gemini-Pro Uplink</span>
                          <span className="text-primary">OK</span>
                        </div>
                        <div className="flex justify-between text-[8px] lg:text-[10px] font-mono">
                          <span className="text-foreground/60 uppercase">Market Crawler</span>
                          <span className="text-primary italic animate-pulse">Scanning...</span>
                        </div>
                        <div className="flex justify-between text-[8px] lg:text-[10px] font-mono">
                          <span className="text-foreground/60 uppercase">Revenue Predictor</span>
                          <span className="text-primary/30">Standby</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats / Scanner Line */}
                  <div className="mt-8 lg:mt-12 relative">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/30 animate-[scan_3s_ease-in-out_infinite]" />
                    <div className="bg-primary text-primary-foreground p-4 lg:p-6 rounded-2xl lg:rounded-3xl flex justify-between items-center shadow-lg shadow-primary/20">
                      <div>
                        <p className="text-[6px] lg:text-[8px] font-mono uppercase tracking-widest opacity-80">Estimated ROI</p>
                        <p className="text-lg lg:text-2xl font-black italic tracking-tighter">MAX_IMPACT</p>
                      </div>
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-lg lg:rounded-xl flex items-center justify-center backdrop-blur-md">
                        <div className="w-3 h-3 lg:w-4 lg:h-4 border-2 border-white rounded-sm rotate-45" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glass reflections */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 pt-16 md:pt-24 max-w-7xl mx-auto px-6 w-full pb-12">
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4"
          >
            <StatCard
              icon={Users}
              value={2.8}
              label="Leads & Interactions"
              isAnimated={true}
              suffix="M+"
              decimals={1}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4"
          >
            <StatCard
              icon={DollarSign}
              value={2.3}
              label="Client Revenue"
              isAnimated={true}
              prefix="$"
              suffix="B+"
              decimals={1}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4"
          >
            <StatCard
              icon={Zap}
              value={560}
              label="Organic Revenue"
              isAnimated={true}
              prefix="$"
              suffix="M+"
              decimals={0}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
