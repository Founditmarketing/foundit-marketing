'use client';

import {
  Twitter,
  Linkedin,
  Youtube,
  Clock,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const liquidEasing = [0.16, 1, 0.3, 1] as const;

export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const phoneNumber = '(318) 280-0115';
  const phoneHref = 'tel:3182800115';

  return (
    <footer className="bg-background text-foreground pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(30px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: liquidEasing as any }}
          className="lg:grid lg:grid-cols-12 gap-12 items-center bg-card/40 backdrop-blur-3xl p-6 md:p-12 lg:p-24 rounded-[2.5rem] md:rounded-[4rem] mb-32 border border-border/50 shadow-3xl overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="lg:col-span-8 relative z-10">
            <div className="p-5 bg-primary/10 rounded-2xl w-fit mb-10 border border-primary/20">
              <Clock className="h-10 w-10 text-primary" strokeWidth={1} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[5.5rem] font-black mb-10 uppercase italic tracking-tighter leading-[0.9] text-foreground">
              We Don't Do Campaigns. <br />
              <span className="text-primary drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">We Build Empires.</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-3xl text-muted-foreground max-w-2xl font-medium italic border-l-4 md:border-l-8 border-primary pl-6 md:pl-10 leading-relaxed opacity-80">
              The average agency keeps a client for 8 months. Our partners stay for decades. We build the digital infrastructure for you to dominate.
            </p>
          </div>
          <div className="lg:col-span-4 mt-16 lg:mt-0 relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-background/40 backdrop-blur-3xl border border-primary/20 rounded-[3.5rem] p-16 text-center shadow-3xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="text-[12rem] lg:text-[16rem] font-black text-primary leading-none italic tracking-tighter drop-shadow-[0_0_30px_rgba(249,115,22,0.2)] animate-pulse-slow">5+</p>
              <p className="text-muted-foreground uppercase font-black tracking-[0.4em] text-[10px] mt-2 opacity-60">Avg. Partner Tenure (Years)</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 pb-32">
          <div className="md:col-span-12 lg:col-span-3">
            <Link
              href="/"
              className="font-black text-6xl tracking-tighter text-foreground group inline-block transition-transform hover:scale-105"
            >
              found it<span className="text-primary inline-block animate-bounce-dot">.</span>
            </Link>
            <p className="text-2xl text-muted-foreground mt-10 max-w-sm font-medium italic leading-relaxed opacity-60">
              We're not a marketing agency. <span className="text-foreground font-black">We're your unfair advantage.</span>
            </p>
          </div>

          <div className="md:col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="space-y-10">
              <h4 className="font-black text-xs uppercase tracking-[0.5em] text-primary opacity-50 italic">Strategic Lab</h4>
              <ul className="space-y-6">
                <li><Link href="/seo" className="text-2xl font-black hover:text-primary transition-all italic tracking-tighter uppercase hover:translate-x-2 inline-block">GEO / SEO</Link></li>
                <li><Link href="/ppc" className="text-2xl font-black hover:text-primary transition-all italic tracking-tighter uppercase hover:translate-x-2 inline-block">PPC Performance</Link></li>
                <li><Link href="/case-studies" className="text-2xl font-black hover:text-primary transition-all italic tracking-tighter uppercase hover:translate-x-2 inline-block">The Archives</Link></li>
              </ul>
            </div>
            <div className="space-y-10">
              <h4 className="font-black text-xs uppercase tracking-[0.5em] text-primary opacity-50 italic">Intelligence</h4>
              <ul className="space-y-6">
                <li><Link href="/solutions" className="text-2xl font-black hover:text-primary transition-all italic tracking-tighter uppercase hover:translate-x-2 inline-block">AI Strategist</Link></li>
                <li><Link href="/ai-visibility-check" className="text-2xl font-black hover:text-primary transition-all italic tracking-tighter uppercase hover:translate-x-2 inline-block">Visibility</Link></li>
                <li><Link href="/about" className="text-2xl font-black hover:text-primary transition-all italic tracking-tighter uppercase hover:translate-x-2 inline-block">Philosophy</Link></li>
              </ul>
            </div>
            <div className="space-y-10">
              <h4 className="font-black text-xs uppercase tracking-[0.5em] text-primary opacity-50 italic">Local Presence</h4>
              <ul className="space-y-6">
                <li><Link href="/marketing-alexandria" className="text-2xl font-black hover:text-primary transition-all italic tracking-tighter uppercase hover:translate-x-2 inline-block">Alexandria</Link></li>
                <li><Link href="/pineville-seo" className="text-2xl font-black hover:text-primary transition-all italic tracking-tighter uppercase hover:translate-x-2 inline-block">Pineville</Link></li>
                <li><Link href="/central-louisiana-web-design" className="text-2xl font-black hover:text-primary transition-all italic tracking-tighter uppercase hover:translate-x-2 inline-block">Cenla Design</Link></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-12 lg:col-span-3 flex flex-col lg:items-end">
            <h4 className="font-black text-xs uppercase tracking-[0.5em] text-primary mb-12 opacity-50 italic">Global Headquarters</h4>
            <div className="space-y-10 flex flex-col items-start lg:items-end">
              <a href={mounted ? phoneHref : '#'} className="flex items-center gap-8 text-foreground hover:text-primary transition-all group p-4 border border-transparent hover:border-primary/20 rounded-[2rem] hover:bg-primary/5">
                <div className="p-5 bg-muted rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-8 h-8" strokeWidth={1} />
                </div>
                <span className="font-black text-4xl italic tracking-tighter">{mounted ? phoneNumber : '...'}</span>
              </a>
              <div className="flex items-center gap-10 pt-8 px-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all scale-150 hover:scale-[1.75]">
                  <Linkedin className="w-6 h-6" strokeWidth={1} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all scale-150 hover:scale-[1.75]">
                  <Twitter className="w-6 h-6" strokeWidth={1} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all scale-150 hover:scale-[1.75]">
                  <Youtube className="w-6 h-6" strokeWidth={1} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-20 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left opacity-40">
          <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-[0.6em]">
            © {new Date().getFullYear()} FOUND IT. ARCHITECTED BY DATA.
          </p>
          <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-[0.6em]">
            <Link href="/solutions" className="hover:text-primary transition-colors">
              POWERED BY GEMINI PRO 1.5.
            </Link>
          </p>
          <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-[0.6em] opacity-100">
            <Link href="/privacy-policy" className="text-primary/80 hover:text-primary hover:tracking-[0.8em] transition-all duration-500 font-black">
              PRIVACY POLICY
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
