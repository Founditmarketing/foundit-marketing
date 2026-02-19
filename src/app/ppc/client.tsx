'use client';

import { Button } from '@/components/ui/button';
import { DollarSign, Goal, BarChart2, TrendingUp, Users, FunctionSquare, CircleDollarSign, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import { NeuralNetworkBackground } from '@/components/ui/NeuralNetworkBackground';
import { TextScramble } from '@/components/ui/TextScramble';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


export default function PpcPage() {
  return (
    <main className="bg-background text-foreground py-24 lg:py-48 relative overflow-hidden">
      <div className="hidden lg:block absolute inset-0 z-0 opacity-100">
        <NeuralNetworkBackground />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-12">
            <h1 className="text-oversized leading-[0.85] mb-8">
              <TextScramble text="Paid Engine." delay={200} /><br />
              <span className="text-primary">
                <TextScramble text="Velocity & Scale." delay={800} />
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-muted-foreground max-w-5xl border-l-[12px] border-primary pl-10 font-medium italic">
              When you need growth now, we deploy high-velocity acquisition engines powered by Gemini AI to optimize over **$72M in managed spend.**
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: DollarSign, label: "$1.8B+", desc: "Revenue Generated", color: "text-primary" },
            { icon: Goal, label: "2.3M+", desc: "Targeted Leads", color: "text-primary" },
            { icon: BarChart2, label: "$72M+", desc: "Ad Spend Managed", color: "text-primary" },
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-7 bg-card border border-border/50 p-12 lg:p-20 rounded-[4rem] shadow-2xl relative group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 transition-opacity">
              <TrendingUp className="w-48 h-48 text-primary" strokeWidth={1} />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-card-foreground mb-4 italic uppercase tracking-tighter">
              Google & <span className="text-primary">YouTube</span>
            </h2>
            <p className="text-lg lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium mb-12 border-l-4 border-primary pl-8">
              Capturing high-intent demand at the exact moment of search. We leverage AI-powered bidding to drive store visits and online sales with surgical precision.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {['Gemini Bidding', 'KPI Dashboards', 'Search & Video', 'Shopping Ads'].map((item) => (
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
              <Users className="w-32 h-32 text-primary" strokeWidth={1} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-card-foreground mb-4 italic uppercase tracking-tighter">
              Meta <span className="text-primary">Ecosystem</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium mb-8">
              Engaging ideal customers on the world's largest social platforms through sophisticated audience targeting and compelling creative.
            </p>
            <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl mb-8">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <p className="text-xs font-mono uppercase tracking-widest leading-loose">
                ADVANCED RETARGETING // LEAD GENERATION // CATALOG SALES
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card/40 backdrop-blur-3xl border border-border/50 rounded-[4rem] p-12 lg:p-24 shadow-3xl grid lg:grid-cols-12 gap-16 items-center"
          >
            <div className="lg:col-span-7">
              <FunctionSquare className="w-16 h-16 text-primary mb-8" />
              <h2 className="text-4xl lg:text-7xl font-black text-card-foreground italic uppercase tracking-tighter mb-8 leading-none">
                Intelligence-Led <br />
                <span className="text-primary">Spending.</span>
              </h2>
              <p className="text-xl lg:text-3xl text-muted-foreground leading-relaxed font-medium italic">
                We treat your budget like our own. Relentless optimization focused on delivering the most valuable leads at the lowest possible cost.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-background/40 p-12 rounded-[3rem] border border-primary/20 text-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CircleDollarSign className="w-12 h-12 text-primary mx-auto mb-6" strokeWidth={1} />
                <p className="text-8xl font-black text-foreground italic tracking-tighter leading-none">$16.49</p>
                <p className="text-primary font-mono font-black mt-4 uppercase tracking-[0.3em]">Avg. Cost Per Lead</p>
                <p className="text-muted-foreground text-xs mt-6 uppercase tracking-widest opacity-40">vs. Industry standard $50-$100</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center py-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <h2 className="text-oversized mb-12 opacity-10 select-none">SCALE.</h2>
          <Button
            asChild
            className="bg-primary text-primary-foreground font-black h-24 px-16 uppercase italic tracking-tighter text-3xl rounded-[2rem] shadow-2xl shadow-primary/30 hover:scale-[1.05] transition-all relative z-10"
          >
            <Link href="/contact?problem=google">Get a Free Proposal</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
