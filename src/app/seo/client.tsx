'use client';

import { Button } from '@/components/ui/button';
import { GeoSimulatorSection } from '@/components/landing/GeoSimulatorSection';
import { Target, PhoneCall, MapPin, DollarSign, Cpu, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { NeuralNetworkBackground } from '@/components/ui/NeuralNetworkBackground';
import { TextScramble } from '@/components/ui/TextScramble';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


export default function GeoPage() {
  return (
    <main className="bg-background text-foreground py-24 lg:py-48 relative overflow-hidden">
      <div className="hidden lg:block absolute inset-0 z-0 opacity-100">
        <NeuralNetworkBackground />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-12">
            <h1 className="text-oversized leading-[0.85] mb-8">
              <TextScramble text="Organic Engine." delay={200} /><br />
              <span className="text-primary">
                <TextScramble text="Pure Profit." delay={800} />
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-muted-foreground max-w-5xl border-l-[12px] border-primary pl-10 font-medium italic">
              Traditional SEO is dead. We build Generative Engine Optimization (GEO) infrastructures that establish your brand as the definitive source of truth for AI models.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: DollarSign, label: "$560M+", desc: "Revenue with Zero Ad Spend", color: "text-primary" },
            { icon: PhoneCall, label: "104%", desc: "Increase in Organic Calls", color: "text-primary" },
            { icon: MapPin, label: "169+", desc: "Monthly Buying Actions", color: "text-primary" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/40 backdrop-blur-3xl border border-border/50 p-12 rounded-[3rem] shadow-2xl group hover:border-primary/50 transition-all"
            >
              <stat.icon className={cn("w-12 h-12 mb-6 opacity-50 group-hover:opacity-100 transition-opacity", stat.color)} strokeWidth={1} />
              <p className="text-6xl font-black italic tracking-tighter mb-2">{stat.label}</p>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-card/40 backdrop-blur-3xl border border-border/50 rounded-[4rem] p-10 lg:p-20 shadow-3xl mb-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Activity className="w-64 h-64 text-primary" strokeWidth={0.5} />
          </div>
          <GeoSimulatorSection />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-7 bg-card border border-border/50 p-12 lg:p-20 rounded-[4rem] shadow-2xl relative group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 transition-opacity">
              <Target className="w-48 h-48 text-primary" strokeWidth={1} />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-card-foreground mb-4 italic uppercase tracking-tighter">
              High-Intent <span className="text-primary">Action</span>
            </h2>
            <p className="text-lg lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium mb-12 border-l-4 border-primary pl-8">
              We optimize for profit, not just traffic. Our focus is on driving real-world actions: phone calls, directions, and direct brand inquiries.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {['GBP Dominance', 'Local Map Pack', 'Review Velocity', 'Conversion Content'].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-black uppercase tracking-tighter text-sm italic">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-5 bg-card/60 backdrop-blur-xl border border-border/50 p-12 lg:p-16 rounded-[4rem] shadow-2xl relative group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
              <Cpu className="w-32 h-32 text-primary" strokeWidth={1} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-card-foreground mb-4 italic uppercase tracking-tighter">
              Entity <span className="text-primary">Building</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium mb-8">
              To win in LLM search, you must be a recognized entity. We build the "Knowledge Graph" that makes you the definitive go-to for Gemini and GPT.
            </p>
            <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl mb-8">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <p className="text-xs font-mono uppercase tracking-widest leading-loose">
                STRUCTURING DATA FOR LLM CONSUMPTION // ESTABLISHING TOPICAL AUTHORITY
              </p>
            </div>
          </motion.div>
        </div>

        <div className="bg-card/40 backdrop-blur-3xl border border-border/50 rounded-[5rem] p-12 lg:p-24 shadow-3xl mb-32 relative overflow-hidden">
          <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-primary font-mono text-xl font-black uppercase tracking-[0.3em] block mb-8">
                Case Study // Weiss & Goldring
              </span>
              <h2 className="text-4xl lg:text-7xl font-black text-card-foreground italic uppercase tracking-tighter mb-8 leading-none">
                Owning The <br />
                <span className="text-primary">Answer.</span>
              </h2>
              <p className="text-xl lg:text-3xl text-muted-foreground leading-relaxed font-medium italic border-l-8 border-primary pl-12">
                "You aren't just on Page 1. You are the only recommendation."
              </p>
            </div>
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div className="bg-background/40 p-12 rounded-[3rem] border border-border/50">
                <div className="flex items-center gap-6 mb-8 group">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl italic tracking-tighter">#1 Recommendation</p>
                    <p className="text-muted-foreground text-sm uppercase font-mono mt-1">LLM Verified Authority</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  We established Weiss & Goldring as the definitive entity for "Luxury Suits" within Gemini and GPT architectures, bypassing tradition search competition.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <h2 className="text-oversized mb-12 opacity-10 select-none">PROFIT.</h2>
          <Button
            asChild
            className="bg-primary text-primary-foreground font-black h-24 px-16 uppercase italic tracking-tighter text-3xl rounded-[2rem] shadow-2xl shadow-primary/30 hover:scale-[1.05] transition-all relative z-10"
          >
            <Link href="/contact?problem=website">Build Your Empire</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
