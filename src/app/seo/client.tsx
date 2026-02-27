'use client';

import { Button } from '@/components/ui/button';
import { GeoSimulatorSection } from '@/components/landing/GeoSimulatorSection';
import { Target, PhoneCall, MapPin, DollarSign, Cpu, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { TextScramble } from '@/components/ui/TextScramble';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


export default function GeoPage() {
  return (
    <main className="bg-transparent text-foreground py-24 lg:py-48 relative overflow-hidden">

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-12">
            <h1 className="text-oversized leading-[0.85] mb-8">
              <TextScramble text="The New Era" delay={200} /><br />
              <span className="text-primary">
                <TextScramble text="Of Search." delay={800} />
              </span>
            </h1>
            <p className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-8 text-foreground">
              Dominating with Found It Marketing
            </p>
            <div className="text-xl md:text-2xl text-muted-foreground max-w-5xl border-l-[12px] border-primary pl-8 lg:pl-10 font-medium space-y-6">
              <p>The digital landscape has fractured. Consumers no longer scroll through pages of blue links—they ask AI directly. Traditional SEO is rapidly becoming obsolete.</p>
              <p className="text-foreground italic font-black">At Found It Marketing, we don't just adapt to this shift. We weaponize it for you.</p>
              <p>Here is how we ensure your brand doesn't just survive the AI era, but leads it:</p>
            </div>
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

        <div className="hidden lg:block bg-card/40 backdrop-blur-3xl border border-border/50 rounded-[4rem] p-10 lg:p-20 shadow-3xl mb-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Activity className="w-64 h-64 text-primary" strokeWidth={0.5} />
          </div>
          <GeoSimulatorSection />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {[
            {
              title: "1. The Antidote: Generative Engine Optimization",
              desc: "If you are only optimizing for Google, you are invisible to the future. AI models now decide who the authority is and deliver that answer directly to the consumer. We pivot your brand from fighting for clicks to being the definitive answer. When AI is asked for the best in your industry, we make sure it names you.",
              icon: Target
            },
            {
              title: "2. AI-Ready Technical Ecosystems",
              desc: "A beautiful website is useless if an AI bot cannot understand it. We architect your digital foundation with advanced structured data (JSON-LD), acting as a direct feed to models like ChatGPT, Claude, and Gemini. We don't just wait for AI to find you; we explicitly train it to recommend you.",
              icon: Cpu
            },
            {
              title: "3. Elite, AI-Driven Efficiency",
              desc: "Agencies bloated by manual labor are dying. Our agile team of 20 elite specialists leverages enterprise AI to eliminate inefficiencies and accelerate output. For you, this means every dollar of your budget funds needle-moving strategy and growth, not agency overhead.",
              icon: Activity
            },
            {
              title: "4. The Human Moat",
              desc: "Algorithms scale, but they cannot replace human trust. Backed by a multimillion-dollar revenue engine, we provide the ultimate competitive advantage: bleeding-edge technology paired with white-glove project management. We guide you flawlessly from strategy to execution with a hyper-local focus that bots simply cannot replicate.",
              icon: ShieldCheck
            }
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/40 backdrop-blur-3xl border border-border/50 p-10 lg:p-14 rounded-[3rem] shadow-2xl relative group hover:border-primary/50 transition-colors flex flex-col"
            >
              <div className="mb-8 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                <point.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-card-foreground mb-4 italic uppercase tracking-tighter">
                {point.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                {point.desc}
              </p>
            </motion.div>
          ))}
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

        <div className="bg-primary/5 border border-primary/20 rounded-[4rem] p-12 lg:p-20 text-center max-w-5xl mx-auto mb-32 relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <h2 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter mb-8 text-foreground">The Bottom Line</h2>
          <p className="text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed italic border-l-4 border-primary pl-8 text-left max-w-4xl mx-auto">
            The agencies still selling "10 keywords on page one" are already obsolete. Found It Marketing gives you the technical infrastructure to dominate AI-driven search and the human expertise to convert that visibility into revenue.
          </p>
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
