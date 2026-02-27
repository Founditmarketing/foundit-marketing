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
        <span className="text-white text-5xl font-black tabular-nums tracking-tighter italic">
          {prefix}
          {typeof displayValue === 'number'
            ? formatValue(displayValue)
            : displayValue}
          {suffix}
        </span>
      </div>
      <p className="text-white/60 font-black text-[10px] uppercase tracking-[0.4em] opacity-60">
        {label}
      </p>
    </div>
  );
};


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
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b pt-32 lg:pt-48 pb-10 lg:pb-16 bg-transparent">

      <div className="flex-grow flex items-center relative z-10 w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 w-full relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-8 relative z-20">
              <div className="mb-0 py-1 lg:py-2 pl-2 pr-6 text-left w-full">
                <motion.h1
                  variants={revealVariants}
                  className="text-white text-[6.5vw] lg:text-[6vw] leading-[0.8] tracking-[-0.04em] font-black font-heading select-none uppercase italic"
                >
                  <TextScramble text="Stop Competing." delay={100} />
                </motion.h1>
              </div>

              <div className="mb-0 py-1 lg:py-2 pl-2 pr-6 text-left w-full">
                <motion.h1
                  variants={revealVariants}
                  className="text-white text-[7vw] lg:text-[6.5vw] leading-[0.8] tracking-[-0.04em] font-black font-heading select-none uppercase italic pb-4"
                >
                  <TextScramble text="Start Dominating." delay={450} />
                </motion.h1>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-2xl text-white/70 mb-12 max-w-2xl border-l-4 border-primary pl-8 font-medium"
              >
                You don't need another marketing agency. You need an unfair advantage.
                We build digital empires that render competition irrelevant.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-start gap-6 w-auto"
              >
                <Link href="/contact" className="w-auto">
                  <LiquidButton className="w-auto px-6 sm:px-12 h-20 text-lg sm:text-xl tracking-normal sm:tracking-[0.2em] shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-transform">
                    Initiate Dominance
                  </LiquidButton>
                </Link>
                <Button
                  asChild
                  variant="ghost"
                  className="h-20 px-6 sm:px-12 text-xl font-black uppercase italic tracking-tighter border-2 border-primary/10 hover:border-primary/40 hover:bg-primary/5 transition-all w-auto group text-white"
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
