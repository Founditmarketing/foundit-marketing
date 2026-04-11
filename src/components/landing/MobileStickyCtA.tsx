'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Sticky CTA bar that appears on mobile after scrolling past the hero.
 * Hidden on desktop (lg:hidden). Appears with a smooth slide-up animation.
 */
export function MobileStickyCtA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling 80% of the viewport height (past the hero)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <div className="bg-background/80 backdrop-blur-xl border-t border-border/30 px-4 py-3 safe-area-bottom">
            <Link href="/contact" className="block">
              <button className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-[0.97] transition-transform">
                Free Strategy Session
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
