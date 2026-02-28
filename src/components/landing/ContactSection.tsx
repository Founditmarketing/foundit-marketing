'use client';

import Link from 'next/link';
import Script from 'next/script';

import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
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
  const problem = searchParams.get('problem') || 'default';
  const { title, description } = titleMap[problem] || titleMap.default;

  return (
    <section className="bg-transparent text-foreground pt-32 pb-12 lg:py-48 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1440px] mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <motion.div variants={itemVariants} className="lg:col-span-12 mb-16">
            <h1 className="text-5xl md:text-7xl lg:text-oversized leading-[1.1] lg:leading-none mb-8">
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
            <div className="bg-black/40 backdrop-blur-xl border border-primary/20 rounded-[1.5rem] lg:rounded-[2.5rem] p-4 lg:p-8 shadow-[0_0_40px_rgba(249,115,22,0.1)] min-h-[500px] lg:min-h-[600px] flex items-center justify-center relative overflow-hidden group">

              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity duration-700" />
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/FXyD279qmIC0yUDrZfYz"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px', minHeight: '600px' }}
                id="inline-FXyD279qmIC0yUDrZfYz"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 1"
                data-height="586"
                data-layout-iframe-id="inline-FXyD279qmIC0yUDrZfYz"
                data-form-id="FXyD279qmIC0yUDrZfYz"
                title="Form 1"
                className="relative z-10 w-full rounded-2xl shadow-2xl bg-black"
              />
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
