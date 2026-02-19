'use client';

import { NeuralNetworkBackground } from '@/components/ui/NeuralNetworkBackground';
import { TextScramble } from '@/components/ui/TextScramble';
import { motion } from 'framer-motion';
import { TrendingUp, BarChartBig, BrainCircuit } from 'lucide-react';


export default function AboutPage() {
  return (
    <main className="bg-background text-foreground py-24 lg:py-48 relative overflow-hidden">
      <div className="hidden lg:block absolute inset-0 z-0 opacity-100">
        <NeuralNetworkBackground />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-oversized leading-[0.85] mb-8">
              <TextScramble text="Data Driven." delay={200} /><br />
              <span className="text-primary">
                <TextScramble text="Empire Built." delay={800} />
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-muted-foreground max-w-4xl border-l-[12px] border-primary pl-10 font-medium italic">
              From our headquarters in Louisiana, we engineer digital empires for clients across the nation. That number isn't a Silicon Valley valuation—it's cold, hard revenue we've generated for our partners.
            </p>
          </div>
          <div className="hidden lg:block lg:col-span-4">
            <div className="text-right">
              <span className="text-primary font-mono text-xl font-black uppercase tracking-[0.3em] block mb-4">
                EST. 2005
              </span>
              <p className="text-muted-foreground text-lg uppercase tracking-widest font-bold">
                20 Years of Dominance
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          {/* Paid Engine - Offset Up/Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-7 bg-card border border-border/50 p-12 lg:p-20 rounded-[4rem] shadow-2xl relative z-20 group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 transition-opacity">
              <TrendingUp className="w-48 h-48 text-primary" strokeWidth={1} />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-card-foreground mb-4 italic uppercase tracking-tighter">
              The <span className="text-primary">Paid</span> Engine
            </h2>
            <p className="text-xl text-primary font-mono font-black mb-8 tracking-[0.2em] uppercase">
              Velocity & Scale // 2.3M Leads
            </p>
            <p className="text-lg lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
              For clients who need to drive growth now, we deploy a
              high-velocity paid acquisition strategy. This engine is built for
              speed and scale, leveraging AI-powered bidding to turn ad spend
              into measurable revenue.
            </p>
            <div className="mt-12 pt-12 border-t border-border/50">
              <p className="text-xl text-muted-foreground italic leading-relaxed">
                "For a single dealer client, we drove over{' '}
                <strong className="text-card-foreground">
                  800 ad interactions
                </strong>{' '}
                in one month during the 'slow' season."
              </p>
            </div>
          </motion.div>

          {/* Organic Engine - Offset Down/Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-5 bg-card border border-border/50 p-12 lg:p-16 rounded-[4rem] shadow-2xl relative z-10 lg:translate-y-24 group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
              <BarChartBig className="w-32 h-32 text-primary" strokeWidth={1} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-card-foreground mb-4 italic uppercase tracking-tighter">
              The <span className="text-primary">Organic</span> Engine
            </h2>
            <p className="text-lg text-primary font-mono font-black mb-6 tracking-[0.2em] uppercase">
              GEO & Profit // $560M+
            </p>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium">
              This is our pure profit machine. Through Generative Engine
              Optimization (GEO), we establish brands as the definitive answer
              on Google, generating massive revenue with zero ad spend.
            </p>
          </motion.div>
        </div>

        <div className="mb-32 relative">
          {/* Decorative Artifact */}
          <div className="absolute -right-40 top-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-[5rem] p-12 lg:p-24 grid lg:grid-cols-12 gap-16 items-center shadow-3xl"
          >
            <div className="lg:col-span-7">
              <BrainCircuit className="w-24 h-24 text-primary mb-12" strokeWidth={1} />
              <h2 className="text-4xl lg:text-7xl font-black text-card-foreground italic uppercase tracking-tighter mb-8 leading-none">
                AI Logic & <br />
                <span className="text-primary">Strategy.</span>
              </h2>
              <p className="text-xl lg:text-3xl text-muted-foreground leading-relaxed font-medium italic">
                We leverage Google's Gemini models to stress-test our plans
                and uncover data-backed revenue streams before implementation.
                This AI layer amplifies our 20 years of experience.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border-l-8 border-primary pl-12 py-8">
                <h4 className="text-foreground text-5xl font-black mb-4">221+</h4>
                <p className="text-muted-foreground text-xl uppercase tracking-widest font-bold">Accounts Signed in 2025</p>
              </div>
              <div className="border-l-8 border-primary pl-12 py-8 mt-8">
                <h4 className="text-foreground text-5xl font-black mb-4">25</h4>
                <p className="text-muted-foreground text-xl uppercase tracking-widest font-bold">Full-Time Strategists</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center py-24">
          <h3 className="text-oversized mb-12 opacity-10 select-none">EMPIRE.</h3>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-medium italic">
            By integrating a high-velocity paid engine with a high-profit
            organic foundation, we build systems that deliver consistent,
            predictable, and scalable growth.
            <br /><br />
            <span className="text-foreground font-black uppercase not-italic tracking-tighter text-4xl">
              That's the difference between running a campaign <br />
              and building an empire.
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
