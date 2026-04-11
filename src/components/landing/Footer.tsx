'use client';

import {
  Twitter,
  Linkedin,
  Youtube,
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
    <footer className="bg-background text-foreground pt-24 pb-8 relative overflow-hidden border-t border-border/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: liquidEasing as any }}
          className="lg:grid lg:grid-cols-12 gap-8 items-center bg-card/10 backdrop-blur-2xl p-8 md:p-16 lg:p-20 rounded-[2rem] md:rounded-[3rem] mb-24 border border-border/20 shadow-2xl relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          <div className="lg:col-span-8 relative z-10">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black mb-6 uppercase italic tracking-tighter leading-[0.85] text-foreground">
              We Don&apos;t Do Campaigns. <br />
              <span className="text-primary drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">We Build Empires.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-2xl font-medium italic border-l-4 border-primary pl-6 leading-relaxed opacity-80">
              For over 13 years, we&apos;ve built the Generative Engine Optimization (GEO) infrastructure for local brands to dominate. The average agency keeps a client for 8 months. Our partners stay for decades.
            </p>
          </div>
          <div className="lg:col-span-4 mt-12 lg:mt-0 relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-background/60 backdrop-blur-3xl border border-primary/20 rounded-[2rem] p-10 md:p-14 text-center shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <p className="text-7xl sm:text-8xl lg:text-[10rem] font-black text-primary leading-none italic tracking-tighter drop-shadow-[0_0_30px_rgba(249,115,22,0.2)]">5+</p>
              <p className="text-muted-foreground uppercase font-black tracking-[0.3em] text-[10px] mt-4 opacity-70">Avg. Partner Tenure (Years)</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 pb-24">
          <div className="md:col-span-12 lg:col-span-3">
            <Link
              href="/"
              className="font-black text-4xl sm:text-5xl tracking-tighter text-foreground group inline-block transition-transform hover:scale-105"
            >
              found it<span className="text-primary inline-block animate-pulse">.</span>
            </Link>
            <p className="text-lg text-muted-foreground mt-6 max-w-sm font-medium italic leading-relaxed opacity-70">
              We&apos;re not a marketing agency. <span className="text-foreground font-black">We&apos;re your unfair advantage.</span>
            </p>
          </div>

          <div className="md:col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="space-y-6">
              <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary opacity-60">Websites</h4>
              <ul className="space-y-4 flex flex-col items-start">
                <li><Link href="/websites/ignite" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Ignite</Link></li>
                <li><Link href="/websites/accelerate" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Accelerate</Link></li>
                <li><Link href="/websites/dominate" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Dominate</Link></li>
                <li><Link href="/websites/empire" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Empire</Link></li>
                <li><Link href="/web-development" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Our Work</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary opacity-60">Marketing</h4>
              <ul className="space-y-4 flex flex-col items-start">
                <li><Link href="/marketing" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Packages</Link></li>
                <li><Link href="/platform" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">FoundIt OS™</Link></li>
                <li><Link href="/case-studies" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Case Studies</Link></li>
                <li><Link href="/blog" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Blog</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary opacity-60">Industries</h4>
              <ul className="space-y-4 flex flex-col items-start">
                <li><Link href="/industries/medical" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Medical</Link></li>
                <li><Link href="/industries/contractors" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Contractors</Link></li>
                <li><Link href="/industries/dealerships" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Dealerships</Link></li>
                <li><Link href="/industries/realtors" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Real Estate</Link></li>
                <li><Link href="/industries/lawyers" className="text-sm md:text-base font-black hover:text-primary transition-all tracking-widest uppercase inline-block">Lawyers</Link></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-12 lg:col-span-3 flex flex-col lg:items-end">
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary mb-8 opacity-60">Headquarters</h4>
            <div className="space-y-8 flex flex-col items-start lg:items-end w-full">
              <p className="text-foreground/80 font-medium text-sm lg:text-right uppercase tracking-widest">
                3803 Rue Left Bank<br />
                Alexandria, LA 71303
              </p>
              <a href={mounted ? phoneHref : '#'} className="flex items-center gap-4 sm:gap-6 text-foreground hover:text-primary transition-all group p-3 sm:p-4 border border-transparent hover:border-primary/20 rounded-2xl sm:rounded-[2rem] hover:bg-primary/5 w-full sm:w-auto overflow-hidden">
                <div className="p-3 sm:p-4 bg-muted rounded-xl sm:rounded-2xl group-hover:bg-primary/20 transition-colors shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                </div>
                <span className="font-black text-2xl sm:text-3xl lg:text-4xl italic tracking-tighter truncate">{mounted ? phoneNumber : '...'}</span>
              </a>
              <div className="flex items-center gap-6 sm:gap-8 pt-4 px-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                  <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                  <Twitter className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                  <Youtube className="w-5 h-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/10 pt-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <p className="text-muted-foreground font-mono text-[9px] uppercase tracking-[0.4em] opacity-40">
            © {new Date().getFullYear()} FOUND IT. ARCHITECTED BY DATA.
          </p>
          <p className="text-muted-foreground font-mono text-[9px] uppercase tracking-[0.4em] opacity-40">
            <Link href="/platform" className="hover:text-primary transition-colors">
              POWERED BY FOUNDIT OS™
            </Link>
          </p>
          <p className="text-muted-foreground font-mono text-[9px] uppercase tracking-[0.4em]">
            <span className="flex items-center gap-4 flex-col sm:flex-row">
              <Link href="/terms-of-service" className="text-primary/70 hover:text-primary hover:tracking-[0.6em] transition-all duration-500 font-black">
                TERMS OF SERVICE
              </Link>
              <Link href="/privacy-policy" className="text-primary/70 hover:text-primary hover:tracking-[0.6em] transition-all duration-500 font-black">
                PRIVACY POLICY
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
