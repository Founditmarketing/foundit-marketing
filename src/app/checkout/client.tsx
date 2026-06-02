'use client';

import { useState, useRef, useTransition, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Check, Lock, ArrowRight, ArrowLeft, Loader2,
  ShieldCheck, CheckCircle2, CreditCard,
} from 'lucide-react';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createPaymentIntent } from './actions';
import { PLANS, type Plan } from './plans';
import { cn } from '@/lib/utils';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Step = 'plans' | 'info' | 'payment' | 'success';

// ─── Root checkout component ──────────────────────────────────────────────────
export function CheckoutClient() {
  const [step, setStep] = useState<Step>('plans');
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const paymentRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  function handlePlanSelect(plan: Plan) {
    setSelectedPlan(plan);
    setStep('info');
    setTimeout(() => infoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }

  function handleInfoSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedPlan || !formRef.current) return;
    setFormError(null);

    const formData = new FormData(formRef.current);
    formData.set('planId', selectedPlan.id);
    const name = `${formData.get('firstName')} ${formData.get('lastName')}`;
    setCustomerName(name);

    startTransition(async () => {
      try {
        const result = await createPaymentIntent(formData);
        setClientSecret(result.clientSecret);
        setStep('payment');
        setTimeout(() => paymentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      } catch (err) {
        setFormError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      }
    });
  }

  const handlePaymentSuccess = useCallback(() => {
    setStep('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const stripeAppearance = {
    theme: 'night' as const,
    variables: {
      colorPrimary: '#FF5500',
      colorBackground: '#111111',
      colorText: '#F9F9F9',
      colorDanger: '#f87171',
      fontFamily: 'Inter, system-ui, sans-serif',
      borderRadius: '12px',
      spacingUnit: '5px',
    },
    rules: {
      '.Input': { border: '1px solid rgba(255,255,255,0.12)', backgroundColor: '#1a1a1a' },
      '.Input:focus': { border: '1px solid #FF5500', boxShadow: '0 0 0 3px rgba(255,85,0,0.15)' },
      '.Label': { color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' },
      '.Tab': { border: '1px solid rgba(255,255,255,0.12)', backgroundColor: '#1a1a1a' },
      '.Tab:hover': { backgroundColor: '#222222' },
      '.Tab--selected': { border: '1px solid #FF5500', backgroundColor: 'rgba(255,85,0,0.08)' },
    },
  };

  return (
    <main className="bg-transparent text-foreground min-h-screen pt-28 lg:pt-36 pb-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-primary/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Success ───────────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease }}
              className="max-w-[560px] mx-auto text-center py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
                className="w-20 h-20 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-8"
              >
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </motion.div>
              <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-3">Subscription Confirmed</p>
              <h1 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
                You&apos;re In.
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg font-medium leading-relaxed mb-3">
                Your <span className="text-foreground font-bold">{selectedPlan?.name}</span> subscription is active.
              </p>
              <p className="text-muted-foreground text-sm mb-10">
                Our team will reach out within 1 business day to get you onboarded.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card/40 hover:bg-card/60 backdrop-blur-md border border-border/20 rounded-full text-sm font-bold uppercase tracking-wider transition-all hover:border-primary/30 text-foreground group"
              >
                <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </motion.div>
          )}

          {step !== 'success' && (
            <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

              {/* ── Header ────────────────────────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease }}
                className="text-center mb-14 sm:mb-20"
              >
                <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4">Monthly Subscription</p>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
                  Choose Your <span className="text-primary">Plan.</span>
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg font-medium max-w-2xl mx-auto">
                  All plans bill monthly. Cancel anytime. Secure payments via Stripe.
                </p>
              </motion.div>

              {/* ── Plan Cards ────────────────────────────────────────────── */}
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
                    <div className="p-6 border-b border-border/20">
                      <p className="text-primary font-mono text-[9px] font-black uppercase tracking-[0.25em] mb-2 leading-relaxed">{plan.subtitle}</p>
                      <h3 className="text-foreground font-black text-base sm:text-lg uppercase italic tracking-tighter leading-tight mb-5">{plan.name}</h3>
                      <span className="text-4xl sm:text-5xl font-black text-foreground tracking-tighter">${plan.price.toLocaleString()}</span>
                      <p className="text-muted-foreground text-sm font-bold mt-1 mb-5">Billed Monthly</p>
                      <button
                        onClick={() => handlePlanSelect(plan)}
                        className="w-full py-3 px-4 rounded-xl font-black uppercase italic tracking-tighter text-sm bg-primary text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md hover:shadow-primary/20"
                      >
                        {selectedPlan?.id === plan.id ? 'Selected ✓' : 'Subscribe'}
                      </button>
                    </div>
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

              {/* ── Step: Customer Info ───────────────────────────────────── */}
              <AnimatePresence>
                {(step === 'info' || step === 'payment') && selectedPlan && (
                  <motion.div
                    ref={infoRef}
                    key="info-payment"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease }}
                    className="mt-10 scroll-mt-32"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <button
                        onClick={() => { setStep('plans'); setClientSecret(null); setFormError(null); }}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-bold uppercase tracking-wider"
                      >
                        <ArrowLeft className="w-4 h-4" /> Change Plan
                      </button>
                      <div className="h-px flex-1 bg-border/30" />
                      <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                        <Lock className="w-4 h-4 text-primary" />
                        Secure Checkout
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
                      <div className="space-y-6">

                        {/* Customer info form */}
                        <div className={cn(
                          'bg-card/40 backdrop-blur-xl border border-border/30 rounded-2xl p-6 sm:p-8 transition-opacity duration-300',
                          step === 'payment' && 'opacity-60 pointer-events-none'
                        )}>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="text-foreground font-black text-lg uppercase italic tracking-tighter flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-black flex items-center justify-center">1</span>
                              Your Information
                            </h3>
                            {step === 'payment' && (
                              <button
                                onClick={() => { setStep('info'); setClientSecret(null); }}
                                className="text-xs text-primary font-bold uppercase tracking-wider hover:underline"
                              >
                                Edit
                              </button>
                            )}
                          </div>
                          <form ref={formRef} onSubmit={handleInfoSubmit}>
                            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                              <Field label="First Name" name="firstName" required placeholder="John" />
                              <Field label="Last Name" name="lastName" required placeholder="Smith" />
                              <Field label="Business Name" name="businessName" required placeholder="Smith Roofing LLC" className="sm:col-span-2" />
                              <Field label="Email Address" name="email" type="email" required placeholder="john@smithroofing.com" />
                              <Field label="Phone Number" name="phone" type="tel" required placeholder="(555) 000-0000" />
                            </div>
                            {step === 'info' && (
                              <>
                                <AnimatePresence>
                                  {formError && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -8 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0 }}
                                      className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-medium mb-4"
                                    >
                                      {formError}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                                <button
                                  type="submit"
                                  disabled={isPending}
                                  className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-4 px-8 rounded-xl text-base hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-60 disabled:scale-100"
                                >
                                  {isPending ? (
                                    <><Loader2 className="w-5 h-5 animate-spin" /> Setting up payment…</>
                                  ) : (
                                    <>Continue to Payment <ArrowRight className="w-5 h-5" /></>
                                  )}
                                </button>
                              </>
                            )}
                          </form>
                        </div>

                        {/* Stripe Payment Element */}
                        <AnimatePresence>
                          {step === 'payment' && clientSecret && (
                            <motion.div
                              ref={paymentRef}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, ease }}
                              className="scroll-mt-32"
                            >
                              <div className="bg-card/40 backdrop-blur-xl border border-border/30 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-foreground font-black text-lg uppercase italic tracking-tighter mb-6 flex items-center gap-2">
                                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-black flex items-center justify-center">2</span>
                                  Payment Details
                                  <CreditCard className="w-4 h-4 text-primary ml-1" />
                                </h3>
                                <Elements
                                  stripe={stripePromise}
                                  options={{ clientSecret, appearance: stripeAppearance }}
                                >
                                  <PaymentForm
                                    planPrice={selectedPlan.price}
                                    onSuccess={handlePaymentSuccess}
                                  />
                                </Elements>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Order Summary sidebar */}
                      <div className="lg:sticky lg:top-28 space-y-4">
                        <div className="bg-card/40 backdrop-blur-xl border border-border/30 rounded-2xl p-6 sm:p-7">
                          <p className="text-primary font-mono text-[9px] font-black uppercase tracking-[0.3em] mb-3">Order Summary</p>
                          <h4 className="text-foreground font-black text-xl uppercase italic tracking-tighter leading-tight mb-1">{selectedPlan.name}</h4>
                          <p className="text-muted-foreground text-xs font-medium mb-5 leading-relaxed">{selectedPlan.subtitle}</p>
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
                              <span className="text-2xl font-black text-foreground tracking-tighter">${selectedPlan.price.toLocaleString()}</span>
                            </div>
                            <p className="text-muted-foreground/60 text-xs text-right">Billed monthly • Cancel anytime</p>
                          </div>
                        </div>
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
                          <Link href="/contact" className="text-primary hover:underline font-bold">Contact our team</Link>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

// ─── Stripe Payment Form (must be inside <Elements>) ─────────────────────────
function PaymentForm({ planPrice, onSuccess }: { planPrice: number; onSuccess: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessing(true);
    setPayError(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
      redirect: 'if_required',
    });

    if (error) {
      setPayError(error.message ?? 'Payment failed. Please try again.');
      setIsProcessing(false);
    } else {
      onSuccess();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <PaymentElement options={{ layout: 'tabs' }} />

      <AnimatePresence>
        {payError && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-medium"
          >
            {payError}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-5 px-8 rounded-2xl text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/25 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
      >
        {isProcessing ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Processing…</>
        ) : (
          <><Lock className="w-4 h-4" /> Pay ${planPrice.toLocaleString()}/mo &amp; Subscribe <ArrowRight className="w-5 h-5" /></>
        )}
      </button>
      <p className="text-xs text-center text-muted-foreground/50">
        Your card will be charged ${planPrice.toLocaleString()} today and monthly thereafter.
      </p>
    </form>
  );
}

// ─── Field helper ─────────────────────────────────────────────────────────────
function Field({ label, name, required, placeholder, type = 'text', className }: {
  label: string; name: string; required?: boolean; placeholder?: string; type?: string; className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-black uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}{required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        type={type} name={name} required={required} placeholder={placeholder}
        className="w-full h-11 rounded-xl border border-border/40 bg-background/60 px-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors font-medium"
      />
    </div>
  );
}
