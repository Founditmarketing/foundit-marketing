'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';

/* ─── Premium Cinematic Easing ─── */
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ─── Orchestrator: Controls the overall reveal timeline ─── */
const orchestrator = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

/* ─── Line Reveal: Each headline rises from below with a mask ─── */
const lineReveal = {
  hidden: {
    y: '110%',
    rotateX: -25,
    opacity: 0,
  },
  visible: {
    y: '0%',
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease,
    },
  },
};

/* ─── Fade Rise: Softer elements (subline, CTA) ─── */
const fadeRise = {
  hidden: {
    y: 40,
    opacity: 0,
    filter: 'blur(8px)',
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease,
    },
  },
};

/* ─── Accent Line: The orange border slides in ─── */
const accentLine = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b pt-32 lg:pt-48 pb-16 lg:pb-24 bg-transparent">
      <motion.div
        style={{ y, opacity }}
        className="flex-grow flex items-center relative z-10 w-full overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-6 w-full relative">
          <motion.div
            variants={orchestrator}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
            style={{ perspective: '1200px' }}
          >
            {/* Line 1 */}
            <div className="mb-0 py-1 lg:py-2 text-left w-full overflow-hidden">
              <motion.h1
                variants={lineReveal}
                className="text-white text-[11vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.85] tracking-tight font-black font-heading select-none uppercase italic origin-bottom-left"
              >
                Elevate Your
              </motion.h1>
            </div>

            {/* Line 2 */}
            <div className="mb-0 py-1 lg:py-2 text-left w-full overflow-hidden">
              <motion.h1
                variants={lineReveal}
                className="text-white text-[11.5vw] sm:text-[11vw] md:text-[8.5vw] lg:text-[6.5vw] leading-[0.85] tracking-tight font-black font-heading select-none uppercase italic pb-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] origin-bottom-left"
              >
                Digital{' '}
                <motion.span
                  className="text-primary inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.0, ease }}
                >
                  Empire.
                </motion.span>
              </motion.h1>
            </div>

            {/* Subline */}
            <motion.div
              variants={fadeRise}
              className="flex items-stretch mb-12 max-w-[95%] sm:max-w-2xl"
            >
              <motion.div
                variants={accentLine}
                className="w-1 bg-primary rounded-full origin-top shrink-0"
              />
              <p className="text-base sm:text-lg md:text-2xl text-white/80 pl-4 sm:pl-8 font-medium drop-shadow-md bg-black/5 sm:bg-black/10 backdrop-blur-[1px] sm:backdrop-blur-[2px] p-2 rounded-r-lg">
                We build the digital infrastructure that turns local businesses
                into industry titans. Custom websites. AI-powered marketing.
                Measurable dominance.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeRise} className="flex items-start w-full">
              <Link href="/contact" className="w-full sm:w-auto">
                <LiquidButton className="w-full sm:w-auto px-8 sm:px-14 h-16 sm:h-20 text-base sm:text-xl tracking-normal sm:tracking-[0.15em] shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-transform">
                  Free Strategy Session
                </LiquidButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
