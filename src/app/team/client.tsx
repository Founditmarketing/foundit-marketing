'use client';

import { TextScramble } from '@/components/ui/TextScramble';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Strategic Leadership',
    role: 'Vision & Architecture',
    description: 'Guiding the overarching strategy and ensuring our Generative Engine Optimization models align with client revenue goals.',
    initials: 'SL'
  },
  {
    name: 'AI Engineering',
    role: 'LLM & Search Integration',
    description: 'Specialists who stress-test prompt environments and engineer backend structures for Gemini and GPT recommendation readiness.',
    initials: 'AI'
  },
  {
    name: 'Paid Media Experts',
    role: 'Velocity Engines',
    description: 'Scaling rapid acquisition flows and optimizing high-budget ad spends to drive immediate, measurable revenue.',
    initials: 'PM'
  },
  {
    name: 'Creative & Code',
    role: 'Experience Design',
    description: 'Crafting world-class digital aesthetics and high-performance React architectures to ensure flawless user experiences.',
    initials: 'CC'
  }
];

export default function TeamPage() {
  return (
    <main className="bg-transparent text-foreground py-24 lg:py-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.03)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-oversized leading-[0.85] mb-8">
              <TextScramble text="The Architects." delay={200} /><br />
              <span className="text-primary">
                <TextScramble text="Behind the Empire." delay={800} />
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-muted-foreground max-w-4xl border-l-[12px] border-primary pl-10 font-medium italic">
              Algorithms don't build empires alone. Meet the specialized minds who engineer the data, train the models, and drive the revenue. 
            </p>
          </div>
          <div className="hidden lg:block lg:col-span-4">
            <div className="text-right">
              <span className="text-primary font-mono text-xl font-black uppercase tracking-[0.3em] block mb-4">
                TEAM SIZE
              </span>
              <p className="text-muted-foreground text-lg uppercase tracking-widest font-bold">
                40+ Specialists
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-card/30 backdrop-blur-xl border border-border/50 hover:border-primary/50 p-12 lg:p-16 rounded-[3rem] shadow-2xl relative group overflow-hidden transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center text-primary font-black text-4xl italic">
                  {member.initials}
                </div>
              </div>
              <p className="text-sm text-primary font-mono font-black mb-4 tracking-[0.3em] uppercase opacity-80">
                {member.role}
              </p>
              <h3 className="text-3xl lg:text-4xl font-black text-foreground mb-6 uppercase italic tracking-tight">
                {member.name}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 relative">
          <div className="bg-card border border-border/50 p-12 lg:p-24 rounded-[4rem] text-center max-w-5xl mx-auto overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
            <h2 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter mb-8 max-w-2xl mx-auto leading-tight">
              Join the Vanguard of <span className="text-primary">Search.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto font-medium">
              We're always looking for elite talent to join our Alexandria headquarters. If you speak data fluently, we want to talk.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-black uppercase italic tracking-[0.2em] px-12 py-6 rounded-full hover:scale-105 transition-transform"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
