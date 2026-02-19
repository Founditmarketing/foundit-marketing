'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { NeuralNetworkBackground } from '@/components/ui/NeuralNetworkBackground';
import { TextScramble } from '@/components/ui/TextScramble';
import { Play, Sparkles, Globe, Mail, User, Loader2, CheckCircle2, ArrowRight, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FreeProposalPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
  });
  const [loading, setLoading] = useState(false);
  const [proposal, setProposal] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setProposal(null);

    try {
      const response = await fetch('/api/generate-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate proposal');
      }

      setProposal(data.proposal);
      // Scroll to proposal
      setTimeout(() => {
        document.getElementById('proposal-result')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen pt-24 pb-20 overflow-hidden bg-background">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <NeuralNetworkBackground />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Free AI Strategy Proposal</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl italic uppercase text-foreground"
            >
              Scale Your <span className="text-primary italic">Empire</span> <br />
              With AI Intelligence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl font-medium"
            >
              Watch the video below to see how we build digital dominance, then get your custom Generative Engine Optimization proposal instantly.
            </motion.p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start mb-20">
            {/* Video Placeholder Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-border bg-card group shadow-2xl shadow-primary/5"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                  <Button
                    size="icon"
                    className="relative w-20 h-20 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <Play className="w-8 h-8 fill-current" />
                  </Button>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-40 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-primary" />
                  </div>
                  <span className="text-xs font-mono text-white">02:45 / 12:00</span>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000"
                alt="AI Intelligence Background"
                className="w-full h-full object-cover opacity-60"
              />
            </motion.div>

            {/* Lead Capture Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-8 sm:p-10 shadow-2xl shadow-black/20"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-black tracking-tight uppercase italic mb-2">Secure Your Strategy</h3>
                <p className="text-muted-foreground font-medium">Complete the form to unlock your custom AI growth plan.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest opacity-70">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={loading}
                      className="pl-10 h-14 bg-background/50 border-border/50 focus:border-primary transition-colors text-base font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest opacity-70">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={loading}
                      className="pl-10 h-14 bg-background/50 border-border/50 focus:border-primary transition-colors text-base font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="text-xs font-bold uppercase tracking-widest opacity-70">
                    Website URL
                  </Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://yourcompany.com"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      disabled={loading}
                      className="pl-10 h-14 bg-background/50 border-border/50 focus:border-primary transition-colors text-base font-bold"
                    />
                  </div>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm font-bold bg-red-500/10 p-3 rounded-xl border border-red-500/20"
                  >
                    {error}
                  </motion.p>
                )}

                <div className="pt-4">
                  <LiquidButton
                    style={{ cursor: 'pointer' }}
                    type="submit"
                    disabled={loading}
                    className="w-full h-16 text-xs sm:text-sm tracking-[0.2em] font-black uppercase italic"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Analyzing Website...
                      </span>
                    ) : (
                      'Get Immediate Custom AI Proposal'
                    )}
                  </LiquidButton>
                </div>

                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                  By clicking, you agree to our Terms and Data Privacy Policy.
                </p>
              </form>
            </motion.div>
          </div>

          {/* Proposal Result Section */}
          <AnimatePresence>
            {proposal && (
              <motion.div
                id="proposal-result"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="mt-20 max-w-4xl mx-auto"
              >
                <div className="relative p-[1px] rounded-[1.5rem] sm:rounded-[2.5rem] bg-border/40 overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50" />
                  <div className="relative bg-card rounded-[1.4rem] sm:rounded-[2.4rem] p-6 sm:p-12 md:p-16">
                    <div className="space-y-6">
                      {proposal.split('\n').map((line, i) => {
                        if (line.trim() === '') return <div key={i} className="h-4" />;

                        // Headings
                        if (line.startsWith('# ')) {
                          return <h2 key={i} className="text-2xl sm:text-4xl font-black uppercase italic tracking-tighter mt-8 sm:mt-12 mb-6 sm:mb-8 border-b border-primary/20 pb-4 text-white leading-tight">{line.replace('# ', '')}</h2>;
                        }
                        if (line.startsWith('## ')) {
                          return <h3 key={i} className="text-xl sm:text-2xl font-black uppercase italic tracking-tight mt-8 sm:mt-10 mb-4 sm:mb-6 text-primary">{line.replace('## ', '')}</h3>;
                        }
                        if (line.startsWith('### ')) {
                          return <h4 key={i} className="text-xl font-bold uppercase tracking-wide mt-8 mb-4 flex items-center gap-3 text-white">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {line.replace('### ', '')}
                          </h4>;
                        }

                        // Implementation Steps (Numbered)
                        if (line.match(/^\d\. /)) {
                          return (
                            <div key={i} className="flex gap-4 mb-6 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-primary/30 transition-all duration-300">
                              <span className="text-2xl sm:text-3xl font-black italic text-primary">{line.match(/^\d/)?.[0]}</span>
                              <p className="text-base sm:text-lg font-medium leading-relaxed text-gray-200">
                                {line.slice(3).split(/(\*\*.*?\*\*)/g).map((part, index) =>
                                  part.startsWith('**') && part.endsWith('**')
                                    ? <span key={index} className="text-primary font-black italic">{part.slice(2, -2)}</span>
                                    : part
                                )}
                              </p>
                            </div>
                          );
                        }

                        // List items
                        if (line.startsWith('* ') || line.startsWith('- ')) {
                          return (
                            <div key={i} className="flex gap-3 ml-4 mb-3 text-gray-300">
                              <Sparkles className="w-4 h-4 text-primary shrink-0 mt-1" />
                              <div className="leading-relaxed font-medium">
                                {line.replace(/^(\* |- )/, '').split(/(\*\*.*?\*\*)/g).map((part, index) =>
                                  part.startsWith('**') && part.endsWith('**')
                                    ? <span key={index} className="text-primary font-black italic">{part.slice(2, -2)}</span>
                                    : part
                                )}
                              </div>
                            </div>
                          );
                        }

                        // Default Paragraph
                        return (
                          <p key={i} className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-medium">
                            {line.split(/(\*\*.*?\*\*)/g).map((part, index) =>
                              part.startsWith('**') && part.endsWith('**')
                                ? <span key={index} className="text-primary font-black italic">{part.slice(2, -2)}</span>
                                : part
                            )}
                          </p>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 sm:mt-12 p-6 sm:p-12 md:p-16 bg-white/5 rounded-[1.5rem] sm:rounded-[2rem] flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 border border-white/5 text-center sm:text-left">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-black uppercase italic mb-2 sm:mb-3 text-white">Ready to Execute?</h4>
                      <p className="text-gray-300 text-sm sm:text-base font-medium max-w-md">Schedule a deep-dive strategy call with Trevor's elite team to dominate your market.</p>
                    </div>
                    <LiquidButton className="w-full sm:w-auto px-8 sm:px-12 h-14 sm:h-16 group magnetic">
                      <span className="flex items-center justify-center gap-2">
                        Book Strategy Call
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </LiquidButton>
                  </div>
                </div>

                {/* Final Checkout CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-10 sm:mt-20 flex flex-col items-center text-center px-4 mb-20"
                >
                  <LiquidButton
                    onClick={() => console.log('Initiate Stripe Checkout')}
                    className="w-full sm:w-auto px-6 sm:px-16 py-4 sm:py-0 h-auto sm:h-24 min-h-[4.5rem] text-base sm:text-xl font-black tracking-tight sm:tracking-widest leading-[1.1] sm:leading-normal rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_0_60px_-15px_rgba(var(--primary-rgb),0.6)] bg-primary text-primary-foreground hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="max-w-[280px] sm:max-w-none font-black uppercase">
                      Accept Proposal & <br className="sm:hidden" /> Secure My Spot ($200 Deposit)
                    </span>
                  </LiquidButton>
                  <p className="mt-6 text-[10px] sm:text-sm font-bold uppercase tracking-[0.3em] text-primary animate-pulse">
                    Priority Booking Active
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social Proof Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 flex flex-wrap justify-center gap-8 opacity-40 grayscale"
          >
            <div className="flex items-center gap-2 font-black italic tracking-widest uppercase text-xs">
              <Sparkles className="w-4 h-4" /> Trusted by 500+ Empires
            </div>
            <div className="flex items-center gap-2 font-black italic tracking-widest uppercase text-xs">
              <Sparkles className="w-4 h-4" /> AI Powered Analysis
            </div>
            <div className="flex items-center gap-2 font-black italic tracking-widest uppercase text-xs">
              <Sparkles className="w-4 h-4" /> 100% Free Consultation
            </div>
          </motion.div>
        </div>
      </div>
    </main >
  );
}
