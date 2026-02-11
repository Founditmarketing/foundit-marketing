'use client';

import { Button } from '@/components/ui/button';
import { AreaChart, Briefcase, DollarSign, Goal, Target, TrendingUp, Users, Cpu, Sparkles, MapPin, PhoneCall, Star, BarChart2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { NeuralNetworkBackground } from '@/components/ui/NeuralNetworkBackground';
import { TextScramble } from '@/components/ui/TextScramble';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


const caseStudies = [
  {
    client: 'National Equipment Dealer',
    industry: 'Heavy Equipment Sales',
    quote: "They didn't just find us leads; they built the digital infrastructure that allowed us to become a National Volume Dealer.",
    challenge: 'A local dealership with ambitions to scale nationwide but was limited by its digital presence and lead generation strategy.',
    solution: 'Implemented a multi-channel lead generation engine combining aggressive PPC on Google with a long-term GEO strategy. Built a robust digital infrastructure to handle national volume.',
    results: [
      { icon: DollarSign, value: '$5k/mo to $500M+', label: 'Revenue Growth', description: 'Scaled initial investment into a national sales powerhouse over a 10-year partnership.' },
      { icon: Briefcase, value: 'National Dealer', label: 'Market Position', description: 'Transitioned from a local lot to shipping heavy equipment to 48 states.' },
    ],
  },
  {
    client: 'Total Family Solutions',
    industry: 'Healthcare Provider',
    quote: "They didn't just get us rankings; they made the phone ring. We're now competing with and beating the largest players in our space.",
    challenge: 'Struggling to gain visibility against multi-billion dollar aggregators like ZocDoc and Psychology Today in a hyper-competitive local market.',
    solution: 'Executed a precision GEO strategy to establish them as the primary authority for their services across two states. Focused on optimizing for high-intent actions like calls and direction requests.',
    results: [
      { icon: TrendingUp, value: '349%', label: 'Increase in Website Sessions (Y/Y)', description: 'Massively expanded search visibility and organic traffic.' },
      { icon: Target, value: 'Top 3', label: 'Map Pack Rank', description: 'Achieved top 3 Google Maps ranking for the most valuable, high-intent keywords.' },
      { icon: Goal, value: 'Outranked Giants', label: 'Competitive Landscape', description: 'Successfully and consistently outranked ZocDoc, Psychology Today, & BetterHelp.' },
    ],
  },
  {
    client: 'Pro Carpet & Duct Cleaning',
    industry: 'Specialized Home Services',
    quote: "For 30 years, we've been the church specialist... Found It was probably the best decision we ever made. We really trust them with our business.",
    challenge: 'A niche business with a highly specific customer base (churches) needed to dominate its vertical and protect its long-standing market position.',
    solution: 'Developed a hyper-targeted content and GEO strategy focusing on their specialty. Created resources and established digital authority that spoke directly to the needs of their unique client base.',
    results: [
      { icon: Users, value: '30+ Years', label: 'Market Leader', description: 'Solidified their decades-long reputation as the #1 provider in their specialized niche.' },
      { icon: AreaChart, value: 'Protected Niche', label: 'Defensive SEO', description: 'Built a digital moat that protects their market share from broader competitors.' },
    ],
  },
  {
    client: 'Weiss & Goldring',
    industry: 'Luxury Menswear',
    quote: "You aren't just on Page 1. You are the only recommendation.",
    challenge: "In the new AI-driven search landscape, traditional SEO is insufficient. The challenge is to transition from being a link in a list to being the AI's direct, authoritative answer.",
    solution: "We established Weiss & Goldring as the definitive authority within Large Language Models (LLMs) like ChatGPT and Google AI, ensuring they are not just found, but explicitly recommended as the answer.",
    results: [
      { icon: Cpu, value: 'The Answer', label: 'AI Authority', description: "Established as the authoritative answer for 'Luxury Suits' in models like ChatGPT and Google AI, making them the only recommendation." },
      { icon: Sparkles, value: '#1 Recommendation', label: 'LLM Position', description: "When a user asks for a recommendation, AI models now give our client as the single, trusted answer, bypassing the competition entirely." }
    ],
  },
  {
    client: "Smoker's Heaven",
    industry: 'Retail',
    quote: "Clicks are vanity. Direction requests are revenue.",
    challenge: "For retail, digital success isn't measured in clicks; it's measured by physical foot traffic. The primary challenge was converting online visibility into customers walking through the door.",
    solution: "We engineered a 'foot traffic firehose' by optimizing for high-intent local actions—primarily Google Maps direction requests—turning online searchers into in-store drivers.",
    results: [
      { icon: MapPin, value: '1,169', label: 'Direction Requests', description: 'In a 5-month period, which is over 7 new customers driving to the store daily because of their top-ranking profile.' },
      { icon: TrendingUp, value: '+17.8%', label: 'Y/Y Foot Traffic', description: 'Verifiable increase in year-over-year physical store visits from organic search.' }
    ],
  },
  {
    client: 'Ducote Roofing & Sniper Off Road',
    industry: 'High-Ticket Trades (Roofing & Auto)',
    quote: "One converted lead pays for the agency fee for the entire year. That's the ROI we deliver.",
    challenge: "In the high-ticket trades, leads are gold. The challenge is to dominate a competitive local market and generate a high volume of profitable leads like direct phone calls, where one conversion can pay for a year of marketing.",
    solution: "While competitors fought for scraps, we implemented a strategy to own the map. We secured top rankings and created a direct pipeline of high-value phone leads.",
    results: [
      { icon: PhoneCall, value: '106 Calls/Month', label: 'Direct Lead Volume', description: 'Generated for Sniper Off Road in a single off-season month, proving year-round market dominance.' },
      { icon: Star, value: '#1 & #2', label: 'Map Pack Ownership', description: 'Secured the top two Map Pack rankings for Ducote Roofing and Walls Tree Service, creating a local monopoly.' }
    ],
  },
  {
    client: 'Express Water & JPE Remodeling',
    industry: 'B2C Services',
    quote: "We don't maintain your baseline. We shatter it.",
    challenge: "Many successful businesses hit a growth plateau. The challenge is to break through that ceiling and achieve significant, sustained year-over-year growth.",
    solution: "Our growth engine strategy is designed to find and exploit new organic opportunities, delivering consistent double-digit growth where others see stagnation. We don't maintain baselines; we shatter them.",
    results: [
      { icon: BarChart2, value: '+75%', label: 'Website Traffic Growth', description: 'Year-over-year increase in website clicks for JPE Remodeling, shattering their previous baseline.' },
      { icon: TrendingUp, value: '+48%', label: 'Profile Interaction Growth', description: 'For Express Water Systems in just 5 months (407 total interactions), showing rapid and impactful growth.' }
    ],
  },
  {
    client: 'Stone Automotive',
    industry: 'Auto Repair',
    quote: "Bays full. Mechanics busy. Revenue up. We don't just get clicks; we get booked appointments.",
    challenge: "Auto shops live and die by the phone. They needed a consistent stream of high-intent calls to keep their bays full, not just empty website clicks.",
    solution: "We deployed a hyper-local organic strategy focused on driving direct phone calls from their Google Business Profile, averaging 150 high-intent calls per month.",
    results: [
      { icon: PhoneCall, value: '750', label: 'Organic Calls (5 Months)', description: 'Averaging 150 high-intent phone calls per month directly from their Google profile.' },
      { icon: TrendingUp, value: '+14.5%', label: 'Steady Growth', description: 'Consistent call volume increase even during standard, non-peak months.' }
    ],
  },
  {
    client: 'East Side Daiquiris',
    industry: 'Retail & Hospitality',
    quote: "This is the digital equivalent of having the best billboard on the busiest highway in town.",
    challenge: "Needed to capture thousands of 'impulse buyers' searching for 'daiquiris near me'—customers who are ready to purchase immediately.",
    solution: "We dominated the high-intent 'near me' search by securing the #1 Google Map Pack spot, making our client the default, can't-miss choice.",
    results: [
      { icon: Star, value: '#1', label: 'Map Pack Rank', description: 'Secured the top spot for the highest-intent, most profitable search terms.' },
      { icon: MapPin, value: '1,493', label: '"Near Me" Searches Captured', description: 'Positioned as the primary result for nearly 1,500 local, wallet-in-hand searches in a month.' }
    ],
  },
  {
    client: 'High-Volume Retail Partner',
    industry: 'Seasonal & High-Volume Retail',
    quote: "Most agencies celebrate double digits. We deliver four-figure traffic.",
    challenge: "A major seasonal retailer needed to break through a traffic plateau and drive an overwhelming volume of interest to solidify their market leadership.",
    solution: "We delivered a massive surge in qualified traffic by optimizing their Google Business Profile to convert search visibility directly into over a thousand website clicks in a single month.",
    results: [
      { icon: BarChart2, value: '1,086', label: 'Website Clicks (30 Days)', description: 'Generated over 1,000 clicks from their Google profile in a single month.' },
      { icon: TrendingUp, value: '+27.8%', label: 'Year-Over-Year Growth', description: 'Shattered previous records and established a new baseline for high-volume traffic.' }
    ],
  },
  {
    client: 'Futrell Marine',
    industry: 'Marine & Boat Sales',
    quote: "Geography is not a limit. We turn local dealerships into regional powerhouses.",
    challenge: "A Louisiana-based dealer needed to prove their sales model could scale and dominate markets outside their home state to become a true regional player.",
    solution: "We deployed our transportable SEO engine in a competitive out-of-state market (Rogers, Arkansas), securing the #1 Organic and Map Pack ranking and proving our system wins in any zip code.",
    results: [
      { icon: Briefcase, value: 'National Reach', label: 'Out-of-State Dominance', description: 'Proved our SEO engine works in any market, turning a local dealer into a regional powerhouse.' },
      { icon: Star, value: '#1', label: 'Map Pack Rank (Arkansas)', description: 'Secured the top organic and map pack spot in a new, competitive market across state lines.' }
    ],
  },
  {
    client: 'Ducote Roofing',
    industry: 'Roofing & Construction',
    quote: "Most roofing companies starve in the winter. We grew this client's call volume by 20% during their slowest months.",
    challenge: "Roofing leads typically freeze in winter. The challenge was to overcome the natural seasonal dip (Sep-Jan) and maintain high lead volume during the off-season.",
    solution: "We implemented a 'Seasonal Immunity' SEO strategy, building a permanent floor for their business. This wasn't just temporary spikes; it was consistent, year-over-year aggregate growth that ignored seasonal trends.",
    results: [
      { icon: PhoneCall, value: '208', label: 'Winter Calls (Sep-Jan)', description: 'Total inbound customer calls during the off-season months, defying the industry slump.' },
      { icon: TrendingUp, value: '+20.2%', label: 'Y/Y Growth', description: 'Growth rate compared to the same period the previous year, proving the strategy builds long-term equity.' }
    ],
  }
];


export default function CaseStudiesPage() {
  return (
    <main className="bg-background text-foreground py-24 lg:py-48 relative overflow-hidden">
      <div className="hidden lg:block absolute inset-0 z-0 opacity-100">
        <NeuralNetworkBackground />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-12">
            <h1 className="text-oversized leading-[0.85] mb-8">
              <TextScramble text="Proven Results." delay={200} /><br />
              <span className="text-primary">
                <TextScramble text="Absolute Dominance." delay={800} />
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-muted-foreground max-w-5xl border-l-[12px] border-primary pl-10 font-medium italic">
              We don't just promise growth; we deliver it. Explore how we've transformed businesses and built revenue-generating empires.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/40 backdrop-blur-xl border border-border/50 p-12 rounded-[3.5rem] shadow-2xl group hover:border-primary/50 transition-colors"
          >
            <PhoneCall className="w-16 h-16 text-primary mb-8" strokeWidth={1} />
            <p className="text-6xl font-black text-foreground italic tracking-tighter mb-2">750+</p>
            <p className="text-muted-foreground font-mono uppercase tracking-widest font-black text-sm">Calls in 5 Months</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/40 backdrop-blur-xl border border-border/50 p-12 rounded-[3.5rem] shadow-2xl lg:translate-y-12 group hover:border-primary/50 transition-colors"
          >
            <BarChart2 className="w-16 h-16 text-primary mb-8" strokeWidth={1} />
            <p className="text-6xl font-black text-foreground italic tracking-tighter mb-2">1,086</p>
            <p className="text-muted-foreground font-mono uppercase tracking-widest font-black text-sm">Clicks in 30 Days</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/40 backdrop-blur-xl border border-border/50 p-12 rounded-[3.5rem] shadow-2xl group hover:border-primary/50 transition-colors"
          >
            <Star className="w-16 h-16 text-primary mb-8" strokeWidth={1} />
            <p className="text-6xl font-black text-foreground italic tracking-tighter mb-2">#1</p>
            <p className="text-muted-foreground font-mono uppercase tracking-widest font-black text-sm">Search Position</p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cn(
                "bg-card/40 backdrop-blur-2xl border border-border/50 rounded-[5rem] p-10 lg:p-24 shadow-3xl relative overflow-hidden group",
                index % 2 === 1 && "lg:translate-x-12"
              )}
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Sparkles className="w-96 h-96 text-primary" strokeWidth={1} />
              </div>

              <div className="grid lg:grid-cols-12 gap-16 items-start relative z-10">
                <div className="lg:col-span-5">
                  <span className="text-primary font-mono text-lg font-black uppercase tracking-[0.3em] block mb-6">
                    {study.industry}
                  </span>
                  <h2 className="text-5xl lg:text-7xl font-black text-card-foreground italic uppercase tracking-tighter mb-8 leading-none">
                    {study.client}
                  </h2>
                  <p className="text-2xl text-muted-foreground italic border-l-8 border-primary pl-10 py-4 leading-relaxed font-medium">
                    "{study.quote}"
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-12">
                    <div>
                      <h3 className="font-black text-sm uppercase tracking-widest text-primary mb-4">Strategic Objective</h3>
                      <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-black text-sm uppercase tracking-widest text-primary mb-6">Key Performance Metrics</h3>
                      <div className="grid sm:grid-cols-2 gap-8">
                        {study.results.map((result) => (
                          <div key={result.label} className="bg-background/40 border border-border/50 p-8 rounded-[2.5rem] shadow-xl">
                            <div className="flex items-center gap-6 mb-4">
                              <result.icon className="w-10 h-10 text-primary" strokeWidth={1} />
                              <p className="text-4xl font-black text-foreground italic tracking-tighter">{result.value}</p>
                            </div>
                            <p className="font-bold text-foreground uppercase tracking-widest text-xs mb-2">{result.label}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">{result.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="bg-card/40 backdrop-blur-3xl border border-border/50 p-16 lg:p-32 mt-48 rounded-[6rem] text-center shadow-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-oversized mb-12">Next Success?</h2>
            <p className="text-2xl lg:text-4xl text-muted-foreground font-medium italic mb-20 leading-relaxed">
              Your growth is our mission. Let's build your empire together.
              Get a bespoke, data-backed proposal today.
            </p>
            <Button
              asChild
              className="bg-primary text-primary-foreground font-black h-24 px-16 uppercase italic tracking-tighter text-3xl rounded-[2rem] shadow-2xl shadow-primary/30 hover:scale-[1.05] transition-all magnetic"
            >
              <Link href="/contact" className="flex items-center gap-4">
                Initiate Strategy
                <ArrowRight className="w-10 h-10" />
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
}
