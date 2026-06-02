'use client';

import { useState, useRef, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Check, Lock, ArrowRight, ArrowLeft, Loader2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { createCheckoutSession } from './actions';
import { PLANS, type Plan } from './plans';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
type Step = 'plans' | 'info';

export function CheckoutClient() {
  const [step, setStep] = useState<Step>('plans');
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  function handlePlanSelect(plan: Plan) {
    setSelectedPlan(plan);
    setStep('info');
    setTimeout(() => {
      infoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedPlan || !formRef.current) return;
    setFormError(null);
    const formData = new FormData(formRef.current);
    formData.set('planId', selectedPlan.id);
    startTransition(async () => {
      try {
        await createCheckoutSession(formData);
      } catch (err: unknown) {
        // redirect() throws internally — ignore NEXT_REDIRECT
        if (err instanceof Error && err.message.includes('NEXT_REDIRECT')) return;
        setFormError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      }
    });
  }

  return (
    <main className="bg-transparent text-foreground min-h-screen pt-28 lg:pt-36 pb-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-primary/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="text-center mb-14 sm:mb-20"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4">
            Monthly Subscription
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
            Choose Your <span className="text-primary">Plan.</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg font-medium max-w-2xl mx-auto">
            All plans bill monthly. Cancel anytime. Secure checkout powered by Stripe.
          </p>
        </motion.div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 mb-8">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className={cn(
                'relative flex flex-col rounded-2xl border transition-all duration-500 overflow-hidden',
                selectedPlan?.id === plan.id
                  ? 'border-primary/50 bg-card shadow-2xl shadow-primary/10'
                  : 'border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/25 hover:shadow-xl',
                plan.popular && selectedPlan?.id !== plan.id && 'border-primary/30'
              )}
            >
              {plan.popular && <div className="absolute top-0 inset-x-0 h-0.5 bg-primary" />}
              {plan.popular && (
                <div className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                  Most Popular
                </div>
              )}

              {/* Top */}
              <div className="p-6 border-b border-border/20">
                <p className="text-primary font-mono text-[9px] font-black uppercase tracking-[0.25em] mb-2 leading-relaxed">
                  {plan.subtitle}
                </p>
                <h3 className="text-foreground font-black text-base sm:text-lg uppercase italic tracking-tighter leading-tight mb-5">
                  {plan.name}
                </h3>
                <div className="mb-1">
                  <span className="text-4xl sm:text-5xl font-black text-foreground tracking-tighter">
                    ${plan.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm font-bold mb-5">Billed Monthly</p>
                <button
                  onClick={() => handlePlanSelect(plan)}
                  className={cn(
                    'w-full py-3 px-4 rounded-xl font-black uppercase italic tracking-tighter text-sm transition-all duration-300',
                    selectedPlan?.id === plan.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                      : 'bg-primary text-primary-foreground hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-primary/20'
                  )}
                >
                  {selectedPlan?.id === plan.id ? 'Selected ✓' : 'Subscribe'}
                </button>
              </div>

              {/* Features */}
              <div className="p-6 flex-1">
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                      </div>
                      <span className="text-muted-foreground text-sm font-medium leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Form */}
        <AnimatePresence>
          {step === 'info' && selectedPlan && (
            <motion.div
              ref={infoRef}
              key="info"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease }}
              className="mt-10 scroll-mt-32"
            >
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => { setStep('plans'); setFormError(null); }}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-bold uppercase tracking-wider"
                >
                  <ArrowLeft className="w-4 h-4" /> Change Plan
                </button>
                <div className="h-px flex-1 bg-border/30" />
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <Lock className="w-4 h-4 text-primary" />
                  Secure Checkout via Stripe
                </div>
              </div>

              <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">

                {/* Form */}
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="bg-card/40 backdrop-blur-xl border border-border/30 rounded-2xl p-6 sm:p-8 mb-6">
                    <h3 className="text-foreground font-black text-lg uppercase italic tracking-tighter mb-6 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-black flex items-center justify-center">1</span>
                      Your Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="First Name" name="firstName" required placeholder="John" />
                      <Field label="Last Name" name="lastName" required placeholder="Smith" />
                      <Field label="Business Name" name="businessName" required placeholder="Smith Roofing LLC" className="sm:col-span-2" />
                      <Field label="Email Address" name="email" type="email" required placeholder="john@smithroofing.com" />
                      <Field label="Phone Number" name="phone" type="tel" required placeholder="(555) 000-0000" />
                    </div>
                  </div>

                  <div className="bg-card/20 border border-border/20 rounded-2xl p-5 mb-6">
                    <div className="flex items-center gap-3 mb-1">
                      <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-foreground text-sm font-black uppercase tracking-wide">
                        Payment collected securely by Stripe
                      </p>
                    </div>
                    <p className="text-muted-foreground/70 text-xs ml-8">
                      You&apos;ll enter your card or bank details on Stripe&apos;s secure page. Found IT Marketing never sees your payment info.
                    </p>
                  </div>

                  <AnimatePresence>
                    {formError && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-medium mb-6"
                      >
                        {formError}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-5 px-8 rounded-2xl text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/25 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Redirecting to Checkout…
                      </>
                    ) : (
                      <>
                        Continue to Payment — ${selectedPlan.price.toLocaleString()}/mo
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-muted-foreground/60 mt-4">
                    You&apos;ll be redirected to Stripe to enter payment details. First charge on{' '}
                    {new Date(Date.now() + 86400000).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}.
                  </p>
                </form>

                {/* Order Summary */}
                <div className="lg:sticky lg:top-28 space-y-4">
                  <div className="bg-card/40 backdrop-blur-xl border border-border/30 rounded-2xl p-6 sm:p-7">
                    <p className="text-primary font-mono text-[9px] font-black uppercase tracking-[0.3em] mb-3">
                      Order Summary
                    </p>
                    <h4 className="text-foreground font-black text-xl uppercase italic tracking-tighter leading-tight mb-1">
                      {selectedPlan.name}
                    </h4>
                    <p className="text-muted-foreground text-xs font-medium mb-5 leading-relaxed">
                      {selectedPlan.subtitle}
                    </p>
                    <ul className="space-y-2.5 mb-5">
                      {selectedPlan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                          </div>
                          <span className="text-muted-foreground text-xs font-medium leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-border/30 pt-4">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-muted-foreground text-sm font-bold">Monthly Total</span>
                        <span className="text-2xl font-black text-foreground tracking-tighter">
                          ${selectedPlan.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-muted-foreground/60 text-xs text-right">Billed monthly • Cancel anytime</p>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="bg-card/20 border border-border/20 rounded-2xl p-5 space-y-3">
                    {[
                      { icon: Lock, label: 'SSL Encrypted', desc: '256-bit TLS encryption' },
                      { icon: ShieldCheck, label: 'Powered by Stripe', desc: 'Bank-level payment security' },
                      { icon: CheckCircle2, label: 'Cancel Anytime', desc: 'No long-term contract' },
                    ].map(({ icon: Icon, label, desc }) => (
                      <div key={label} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-foreground text-xs font-black uppercase tracking-wide">{label}</p>
                          <p className="text-muted-foreground/60 text-[11px]">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-center text-xs text-muted-foreground/60">
                    Questions?{' '}
                    <Link href="/contact" className="text-primary hover:underline font-bold">
                      Contact our team
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function Field({
  label, name, value, onChange, required, placeholder, type = 'text', className,
}: {
  label: string; name: string; value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; placeholder?: string; type?: string; className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-black uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}{required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        required={required} placeholder={placeholder}
        className="w-full h-11 rounded-xl border border-border/40 bg-background/60 px-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors font-medium"
      />
    </div>
  );
}
