'use client';

import { useState, useRef, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Check,
  Lock,
  CreditCard,
  Building2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { createSubscription, type SubscriptionPayload } from './actions';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ─── Plans ────────────────────────────────────────────────────────────────────
const PLANS = [
  {
    id: 'essentials',
    name: 'Marketing Essentials',
    subtitle: 'Website Development/Management, Search Engine Optimization',
    price: 599,
    popular: false,
    features: [
      'Website Design, Management, Hosting, Backups, Security & SSL',
      'Search Engine Optimization & Listing Directories',
      'Google Business Profile Management',
    ],
  },
  {
    id: 'growth',
    name: 'Business Growth',
    subtitle: 'SEO / Web Design / Social Media Management',
    price: 1000,
    popular: false,
    features: [
      'Website Design, Management, Hosting, Backups, Security & SSL',
      'Search Engine Optimization & Listing Directories',
      'Google Business Profile Management',
      'Social Media Management, Graphics Production & Scheduled Posting',
    ],
  },
  {
    id: 'domination',
    name: 'Market Domination',
    subtitle: 'SEO / Web Design / Social Media Management',
    price: 1500,
    popular: true,
    features: [
      'Website Design, Management, Hosting, Backups, Security & SSL',
      'Search Engine Optimization & Listing Directories',
      'Google Business Profile Management',
      'Social Media Management, Graphics Production & Scheduled Posting',
      'Targeted Ads',
      'Google Ads, PPC & Google Local Services',
    ],
  },
  {
    id: 'ai',
    name: 'Market Domination + AI Optimization',
    subtitle: 'SEO / Web Design / Social Media Management + AIO GEO',
    price: 2200,
    popular: false,
    features: [
      'Everything in Market Domination',
      'AIO/SEO+ Package — AI visibility across major LLMs',
      'Personalized AI content optimization',
      'On-page & off-page GEO/SEO optimization',
      'Search performance reporting & GEO/SEO Specialist support',
    ],
  },
] as const;

type Plan = (typeof PLANS)[number];
type PayMethod = 'card' | 'ach';
type Step = 'plans' | 'checkout' | 'success';


// ─── Component ────────────────────────────────────────────────────────────────
export function CheckoutClient() {
  const [step, setStep] = useState<Step>('plans');
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [payMethod, setPayMethod] = useState<PayMethod>('card');
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | null>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    // Card
    nameOnCard: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    // ACH
    nameOnAccount: '',
    routingNumber: '',
    accountNumber: '',
    confirmAccountNumber: '',
    accountType: 'checking' as 'checking' | 'savings',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    let v = value;
    if (name === 'cardNumber') {
      v = value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    }
    if (name === 'expiry') {
      v = value.replace(/\D/g, '').slice(0, 4);
      if (v.length >= 3) v = v.slice(0, 2) + ' / ' + v.slice(2);
    }
    if (name === 'cvv') v = value.replace(/\D/g, '').slice(0, 4);
    if (name === 'phone') v = value.replace(/[^\d\s\-().+]/g, '').slice(0, 20);
    if (name === 'routingNumber') v = value.replace(/\D/g, '').slice(0, 9);
    if (name === 'accountNumber' || name === 'confirmAccountNumber') v = value.replace(/\D/g, '').slice(0, 17);
    setForm((p) => ({ ...p, [name]: v }));
  }

  function handlePlanSelect(plan: Plan) {
    setSelectedPlan(plan);
    setStep('checkout');
    setTimeout(() => {
      checkoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedPlan) return;
    setFormError(null);

    if (payMethod === 'ach' && form.accountNumber !== form.confirmAccountNumber) {
      setFormError('Account numbers do not match.');
      return;
    }

    if (payMethod === 'card') {
      const [expMonth, expRest] = form.expiry.replace(/\s/g, '').split('/');
      const expYear = expRest?.length === 2 ? `20${expRest}` : expRest;

      const payload: SubscriptionPayload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        businessName: form.businessName,
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        planPrice: selectedPlan.price,
        paymentMethod: 'card',
        nameOnCard: form.nameOnCard,
        cardNumber: form.cardNumber,
        expireMonth: expMonth,
        expireYear: expYear,
        cvv: form.cvv,
      };
      startTransition(async () => {
        const result = await createSubscription(payload);
        if (result.success) {
          setStep('success');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          setFormError(result.error ?? 'Payment failed. Please try again.');
        }
      });
    } else {
      const payload: SubscriptionPayload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        businessName: form.businessName,
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        planPrice: selectedPlan.price,
        paymentMethod: 'ach',
        nameOnAccount: form.nameOnAccount,
        routingNumber: form.routingNumber,
        accountNumber: form.accountNumber,
        accountType: form.accountType,
      };
      startTransition(async () => {
        const result = await createSubscription(payload);
        if (result.success) {
          setStep('success');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          setFormError(result.error ?? 'Payment failed. Please try again.');
        }
      });
    }
  }

  return (
    <main className="bg-transparent text-foreground min-h-screen pt-28 lg:pt-36 pb-24 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] bg-primary/[0.04] rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-primary/[0.03] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 relative z-10">

          {/* ── Success ─────────────────────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
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
                <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-3">
                  Subscription Confirmed
                </p>
                <h1 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
                  You&apos;re In.
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg font-medium leading-relaxed mb-3">
                  Your <span className="text-foreground font-bold">{selectedPlan?.name}</span> subscription is active.
                  Billing of <span className="text-primary font-bold">${selectedPlan?.price}/mo</span> begins tomorrow.
                </p>
                <p className="text-muted-foreground text-sm mb-10">
                  A confirmation has been sent to <span className="text-foreground font-medium">{form.email}</span>. Our team will reach out within 1 business day to get you onboarded.
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
              <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                {/* ── Header ───────────────────────────────────────────────── */}
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
                    All plans bill monthly. Cancel anytime. Your first charge processes tomorrow after signup.
                  </p>
                </motion.div>

                {/* ── Plan Cards ───────────────────────────────────────────── */}
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
                      {/* Popular badge */}
                      {plan.popular && (
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-primary" />
                      )}
                      {plan.popular && (
                        <div className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                          Most Popular
                        </div>
                      )}

                      {/* Top section */}
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

                {/* ── Checkout Form ─────────────────────────────────────────── */}
                <AnimatePresence>
                  {step === 'checkout' && selectedPlan && (
                    <motion.div
                      ref={checkoutRef}
                      key="checkout-form"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.7, ease }}
                      className="mt-10 scroll-mt-32"
                    >
                      {/* Section label */}
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
                          Secure Checkout
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">

                        {/* Left — Form ──────────────────────────────────────── */}
                        <form onSubmit={handleSubmit} className="space-y-8">

                          {/* Customer Info */}
                          <div className="bg-card/40 backdrop-blur-xl border border-border/30 rounded-2xl p-6 sm:p-8">
                            <h3 className="text-foreground font-black text-lg uppercase italic tracking-tighter mb-6 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-black flex items-center justify-center">1</span>
                              Your Information
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="John" />
                              <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Smith" />
                              <Field label="Business Name" name="businessName" value={form.businessName} onChange={handleChange} required placeholder="Smith Roofing LLC" className="sm:col-span-2" />
                              <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@smithroofing.com" />
                              <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="(555) 000-0000" />
                            </div>
                          </div>

                          {/* Payment */}
                          <div className="bg-card/40 backdrop-blur-xl border border-border/30 rounded-2xl p-6 sm:p-8">
                            <h3 className="text-foreground font-black text-lg uppercase italic tracking-tighter mb-6 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-black flex items-center justify-center">2</span>
                              Payment Method
                            </h3>

                            {/* Tabs */}
                            <div className="flex gap-2 mb-6 p-1 bg-background/60 border border-border/30 rounded-xl w-fit">
                              {(['card', 'ach'] as const).map((method) => (
                                <button
                                  key={method}
                                  type="button"
                                  onClick={() => setPayMethod(method)}
                                  className={cn(
                                    'flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-black uppercase italic tracking-tighter transition-all duration-300',
                                    payMethod === method
                                      ? 'bg-primary text-primary-foreground shadow-md'
                                      : 'text-muted-foreground hover:text-foreground hover:bg-card/40'
                                  )}
                                >
                                  {method === 'card' ? <CreditCard className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
                                  {method === 'card' ? 'Credit / Debit Card' : 'ACH Bank Transfer'}
                                </button>
                              ))}
                            </div>

                            <AnimatePresence mode="wait">
                              {payMethod === 'card' && (
                                <motion.div
                                  key="card"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 10 }}
                                  transition={{ duration: 0.3 }}
                                  className="grid sm:grid-cols-2 gap-4"
                                >
                                  <Field label="Name on Card" name="nameOnCard" value={form.nameOnCard} onChange={handleChange} required placeholder="John Smith" className="sm:col-span-2" />
                                  <Field label="Card Number" name="cardNumber" value={form.cardNumber} onChange={handleChange} required placeholder="1234 5678 9012 3456" className="sm:col-span-2" inputMode="numeric" />
                                  <Field label="Expiry (MM / YY)" name="expiry" value={form.expiry} onChange={handleChange} required placeholder="12 / 27" inputMode="numeric" />
                                  <Field label="CVV" name="cvv" value={form.cvv} onChange={handleChange} required placeholder="123" inputMode="numeric" />
                                  <p className="sm:col-span-2 text-xs text-muted-foreground/70 flex items-center gap-1.5">
                                    <Lock className="w-3 h-3" />
                                    Card data is tokenized by Forte Payments and never stored on our servers.
                                  </p>
                                </motion.div>
                              )}

                              {payMethod === 'ach' && (
                                <motion.div
                                  key="ach"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 10 }}
                                  transition={{ duration: 0.3 }}
                                  className="grid sm:grid-cols-2 gap-4"
                                >
                                  <Field label="Name on Account" name="nameOnAccount" value={form.nameOnAccount} onChange={handleChange} required placeholder="John Smith" className="sm:col-span-2" />
                                  <div className="sm:col-span-2">
                                    <label className="block text-xs font-black uppercase tracking-wider text-muted-foreground mb-1.5">Account Type</label>
                                    <select
                                      name="accountType"
                                      value={form.accountType}
                                      onChange={handleChange}
                                      className="w-full sm:w-48 h-11 rounded-xl border border-border/40 bg-background/60 px-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
                                    >
                                      <option value="checking">Checking</option>
                                      <option value="savings">Savings</option>
                                    </select>
                                  </div>
                                  <Field label="Routing Number" name="routingNumber" value={form.routingNumber} onChange={handleChange} required placeholder="021000021" inputMode="numeric" />
                                  <Field label="Account Number" name="accountNumber" value={form.accountNumber} onChange={handleChange} required placeholder="Your account number" inputMode="numeric" />
                                  <Field label="Confirm Account Number" name="confirmAccountNumber" value={form.confirmAccountNumber} onChange={handleChange} required placeholder="Re-enter account number" inputMode="numeric" className="sm:col-span-2" />
                                  <p className="sm:col-span-2 text-xs text-muted-foreground/70 flex items-center gap-1.5">
                                    <ShieldCheck className="w-3 h-3" />
                                    ACH debits are processed securely through Forte Payments.
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Error */}
                          <AnimatePresence>
                            {formError && (
                              <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-medium"
                              >
                                {formError}
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Submit */}
                          <button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-5 px-8 rounded-2xl text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/25 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                          >
                            {isPending ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Processing…
                              </>
                            ) : (
                              <>
                                Start Subscription — ${selectedPlan.price.toLocaleString()}/mo
                                <ArrowRight className="w-5 h-5" />
                              </>
                            )}
                          </button>

                          <p className="text-xs text-center text-muted-foreground/60">
                            By subscribing you authorize Found IT Marketing to charge your{' '}
                            {payMethod === 'card' ? 'card' : 'bank account'} ${selectedPlan.price.toLocaleString()} on the{' '}
                            {new Date(Date.now() + 86400000).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} and monthly thereafter.
                            Cancel anytime by contacting your account manager.
                          </p>
                        </form>

                        {/* Right — Order Summary ────────────────────────────── */}
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
                              { icon: ShieldCheck, label: 'Secure Payments', desc: 'Powered by Forte Payments' },
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

                          {/* Need help */}
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </main>
  );
}

// ─── Field helper ─────────────────────────────────────────────────────────────
function Field({
  label,
  name,
  value,
  onChange,
  required,
  placeholder,
  type = 'text',
  className,
  inputMode,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  type?: string;
  className?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-black uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete="off"
        className="w-full h-11 rounded-xl border border-border/40 bg-background/60 px-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors font-medium"
      />
    </div>
  );
}
