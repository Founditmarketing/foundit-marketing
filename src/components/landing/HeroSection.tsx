'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
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
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b pt-32 lg:pt-48 pb-16 lg:pb-24 bg-transparent">
      <div className="flex-grow flex items-center relative z-10 w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 w-full relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Main Headline */}
            <div className="mb-0 py-1 lg:py-2 text-left w-full">
              <motion.h1
                variants={revealVariants}
                className="text-white text-[11vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.85] tracking-tight font-black font-heading select-none uppercase italic"
              >
                <TextScramble text="Elevate Your" delay={100} />
              </motion.h1>
            </div>

            <div className="mb-0 py-1 lg:py-2 text-left w-full">
              <motion.h1
                variants={revealVariants}
                className="text-white text-[11.5vw] sm:text-[11vw] md:text-[8.5vw] lg:text-[6.5vw] leading-[0.85] tracking-tight font-black font-heading select-none uppercase italic pb-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <TextScramble text="Digital Empire." delay={450} />
              </motion.h1>
            </div>

            {/* Subline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-2xl text-white/80 mb-12 max-w-2xl border-l-4 border-primary pl-4 sm:pl-8 font-medium drop-shadow-md bg-black/5 sm:bg-black/10 backdrop-blur-[1px] sm:backdrop-blur-[2px] p-2 rounded-r-lg max-w-[95%] sm:max-w-2xl"
            >
              We build the digital infrastructure that turns local businesses into industry titans. Custom websites. AI-powered marketing. Measurable dominance.
            </motion.p>

            {/* Single CTA */}
            <motion.div
              variants={itemVariants}
              className="flex items-start w-full"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <LiquidButton className="w-full sm:w-auto px-8 sm:px-14 h-16 sm:h-20 text-base sm:text-xl tracking-normal sm:tracking-[0.15em] shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-transform">
                  Free Strategy Session
                </LiquidButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
