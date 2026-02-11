'use client';

import Link from 'next/link';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { submitContactForm } from '@/app/actions/forms';
import { useToast } from '@/hooks/use-toast';
import { NeuralNetworkBackground } from '@/components/ui/NeuralNetworkBackground';
import { TextScramble } from '@/components/ui/TextScramble';
import { motion, Variants } from 'framer-motion';

const titleMap: { [key: string]: { title: string; description: string } } = {
  google: {
    title: 'Supercharge Your Google Presence',
    description: "Whether it's rankings or ad performance, tell us your Google-related challenges and we'll outline a plan to get you to the top.",
  },
  meta: {
    title: 'Amplify Your Social Media ROI',
    description: "From low engagement to poor ad results on Meta platforms (Facebook/Instagram), we build social strategies that convert. Let's talk.",
  },
  website: {
    title: 'Transform Your Website & SEO',
    description: "Your website is your digital storefront. If it's outdated, slow, or not converting, we can help. Tell us what needs fixing.",
  },
  ai: {
    title: 'Leverage AI for Growth',
    description: "Confused about how to show up in AI overviews or use AI in your marketing? We'll guide you through the new landscape of AI-driven search and content.",
  },
  content: {
    title: 'Elevate Your Content Strategy',
    description: "From engaging blog posts to high-converting video scripts, we'll build a strategy that engages and converts. Let's talk.",
  },
  default: {
    title: 'Get a Free, Custom Proposal',
    description: "Let's talk about your goals. We'll get back to you in one hour with the kind of proposal other agencies take weeks to build.",
  },
};

const liquidEasing = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(20px)', scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      ease: liquidEasing as any,
      duration: 1.2,
    },
  },
};

export function ContactSection() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const problem = searchParams.get('problem') || 'default';
  const { title, description } = titleMap[problem] || titleMap.default;
  const [revenue, setRevenue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [revenueError, setRevenueError] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!revenue) {
      setRevenueError('Please select your annual revenue bracket.');
      return;
    }
    setRevenueError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append('revenue', revenue);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitted(true);
        toast({
          title: "Proposal Requested!",
          description: "We've received your request and will be in touch within one hour.",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: result.error || "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRevenueChange = (value: string) => {
    setRevenue(value);
    if (revenueError) {
      setRevenueError(null);
    }
  }

  return (
    <section className="bg-background text-foreground py-12 lg:py-48 relative overflow-hidden">
      <div className="hidden lg:block absolute inset-0 z-0 opacity-100">
        <NeuralNetworkBackground />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1440px] mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div variants={itemVariants} className="lg:col-span-12 mb-16">
            <h1 className="text-oversized leading-none mb-8">
              <TextScramble text={title} />
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl border-l-[6px] lg:border-l-[12px] border-primary pl-6 lg:pl-10 font-medium italic">
              {description}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-48">
              <div className="bg-card/30 backdrop-blur-xl border border-border/50 p-12 rounded-[4rem] shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <h3 className="text-primary font-mono text-xl font-black uppercase tracking-[0.3em] mb-8 opacity-60">
                  Response Protocol
                </h3>
                <div className="space-y-10 relative z-10">
                  <div className="flex gap-8 items-start">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 border border-primary/20">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-black uppercase tracking-tighter text-2xl mb-2 italic">60 Minute Triage</p>
                      <p className="text-muted-foreground text-lg leading-relaxed">Every request is reviewed by a Senior Strategist within one hour.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 items-start">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 border border-primary/20">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-black uppercase tracking-tighter text-2xl mb-2 italic">Zero-Fluff Proposal</p>
                      <p className="text-muted-foreground text-lg leading-relaxed">We deliver the kind of data-backed blueprint other agencies take weeks to build.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="bg-card/40 backdrop-blur-2xl border border-border/50 rounded-[1.5rem] lg:rounded-[4rem] p-4 lg:p-20 shadow-3xl min-h-[500px] lg:min-h-[600px] flex items-center justify-center relative overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent pointer-events-none" />
              {submitted ? (
                <div className="text-center animate-in fade-in-50 duration-1000 slide-in-from-bottom-10">
                  <CheckCircle2 className="w-24 h-24 text-primary mx-auto mb-8" />
                  <h2 className="text-5xl font-black text-foreground italic uppercase tracking-tighter mb-4">Transmission Received.</h2>
                  <p className="text-xl text-muted-foreground mb-12 max-w-sm mx-auto font-medium">Our experts are analyzing your footprint. Anticipate a response within 60 minutes.</p>
                  <Button
                    variant="outline"
                    className="rounded-full px-12 h-16 text-lg font-black border-primary text-primary hover:bg-primary/10 transition-all uppercase italic tracking-tighter"
                    onClick={() => { setSubmitted(false); setRevenue(''); }}
                  >
                    Submit New Protocol
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 w-full relative z-10">
                  <input type="hidden" name="problem" value={problem} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">

                    <div className="space-y-4">
                      <Label htmlFor="name" className="text-foreground font-black uppercase tracking-[0.3em] text-[10px] opacity-60">Identity</Label>
                      <Input id="name" name="name" placeholder="John Doe" required className="bg-background/40 border-border/40 h-14 lg:h-16 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all text-base lg:text-lg font-medium" />
                    </div>
                    <div className="space-y-4">
                      <Label htmlFor="email" className="text-foreground font-black uppercase tracking-[0.3em] text-[10px] opacity-60">Uplink Address</Label>
                      <Input id="email" name="email" type="email" placeholder="you@company.com" required className="bg-background/40 border-border/40 h-14 lg:h-16 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all text-base lg:text-lg font-medium" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="website" className="text-foreground font-black uppercase tracking-[0.3em] text-[10px] opacity-60">Digital Domain</Label>
                    <Input id="website" name="website" placeholder="https://yourcompany.com" required className="bg-background/40 border-border/40 h-14 lg:h-16 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all text-base lg:text-lg font-medium" />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="revenue" className="text-foreground font-black uppercase tracking-[0.3em] text-[10px] opacity-60">Velocity (Annual Revenue)</Label>
                    <Select onValueChange={handleRevenueChange} value={revenue}>
                      <SelectTrigger id="revenue" className="w-full bg-background/40 border-border/40 h-14 lg:h-16 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all text-base lg:text-lg font-medium">
                        <SelectValue placeholder="Select revenue" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border/50 rounded-2xl p-2 backdrop-blur-3xl">
                        <SelectItem value="< $500K" className="rounded-xl focus:bg-primary/10 focus:text-primary font-bold py-3">&lt; $500K</SelectItem>
                        <SelectItem value="$500K - $1M" className="rounded-xl focus:bg-primary/10 focus:text-primary font-bold py-3">$500K - $1M</SelectItem>
                        <SelectItem value="$1M - $5M" className="rounded-xl focus:bg-primary/10 focus:text-primary font-bold py-3">$1M - $5M</SelectItem>
                        <SelectItem value="$5M - $10M" className="rounded-xl focus:bg-primary/10 focus:text-primary font-bold py-3">$5M - $10M</SelectItem>
                        <SelectItem value="$10M - $50M" className="rounded-xl focus:bg-primary/10 focus:text-primary font-bold py-3">$10M - $50M</SelectItem>
                        <SelectItem value="$50M+" className="rounded-xl focus:bg-primary/10 focus:text-primary font-bold py-3">$50M+</SelectItem>
                      </SelectContent>
                    </Select>
                    {revenueError && <p className="text-primary text-sm mt-3 font-black uppercase italic tracking-tighter animate-bounce">{revenueError}</p>}
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="message" className="text-foreground font-black uppercase tracking-[0.3em] text-[10px] opacity-60">Operational Obstacles</Label>
                    <div className="relative">
                      <Textarea id="message" name="message" placeholder="Describe your challenge..." rows={4} required className="bg-background/40 border-border/40 rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all text-base lg:text-lg font-medium p-3 lg:p-6" />
                    </div>
                  </div>
                  <div className="pt-4 lg:pt-6">

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary text-primary-foreground font-black h-20 lg:h-24 px-12 uppercase italic tracking-tighter text-xl lg:text-2xl rounded-[2rem] shadow-3xl shadow-primary/40 hover:scale-[1.01] active:scale-[0.98] transition-all duration-700 ease-liquid magnetic"
                    >
                      {loading ? (
                        <div className="flex items-center gap-4">
                          <Loader2 className="h-8 w-8 animate-spin" strokeWidth={3} />
                          <span>Processing...</span>
                        </div>
                      ) : (
                        'Initiate Analysis'
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center max-w-md mx-auto">
                    By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link> and consent to receive SMS communications. Message frequency varies. Reply STOP to opt out.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
