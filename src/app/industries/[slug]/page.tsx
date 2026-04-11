import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LiquidButton } from '@/components/ui/LiquidButton';

interface IndustryData {
  name: string;
  headline: string;
  subline: string;
  painPoints: string[];
  solutions: string[];
  ctaText: string;
}

const industries: Record<string, IndustryData> = {
  medical: {
    name: 'Medical / Healthcare',
    headline: 'Digital Marketing for Healthcare Practices',
    subline:
      'Patients are searching for care online — and choosing providers who show up first. We make sure that provider is you.',
    painPoints: [
      'Losing patients to aggregator sites like ZocDoc and Healthgrades',
      'Low visibility in Google Maps and local search results',
      'Website that looks outdated and doesn\'t convert visitors to appointments',
      'No strategy for AI search — patients asking ChatGPT for doctor recommendations',
    ],
    solutions: [
      'GEO-optimized content that makes AI recommend YOUR practice',
      'Local SEO dominance — top 3 in Google Maps for your specialties',
      'HIPAA-conscious website design with online booking integration',
      'Reputation management and review generation systems',
    ],
    ctaText: 'Get Your Healthcare Strategy Session',
  },
  contractors: {
    name: 'Contractors / Home Services',
    headline: 'Digital Marketing for Contractors',
    subline:
      'Homeowners are searching for contractors right now. The ones who show up first get the jobs. We put you first.',
    painPoints: [
      'Paying too much per lead on HomeAdvisor, Angi, or Thumbtack',
      'Inconsistent lead flow — feast or famine months',
      'Competitors outranking you in Google Maps and local search',
      'No online presence that reflects the quality of your work',
    ],
    solutions: [
      'Custom websites that showcase your portfolio and convert visitors into calls',
      'Google Ads campaigns with AI-powered bidding for maximum ROI',
      'Local SEO that puts you in the top 3 for every service you offer',
      'Review automation that builds your 5-star reputation on autopilot',
    ],
    ctaText: 'Get Your Contractor Strategy Session',
  },
  dealerships: {
    name: 'Dealerships / Automotive',
    headline: 'Digital Marketing for Dealerships',
    subline:
      'From local lots to national volume dealers — we\'ve scaled automotive businesses from one location to 48 states.',
    painPoints: [
      'High cost-per-click on competitive automotive keywords',
      'Inventory listings not showing up in Google Shopping or AI search',
      'Competing against AutoTrader, CarGurus, and other aggregators',
      'No strategy for scaling beyond your local market',
    ],
    solutions: [
      'Inventory-optimized websites with dynamic listing pages',
      'National PPC campaigns with geo-targeted bidding strategies',
      'GEO optimization so AI assistants recommend YOUR dealership',
      'Custom data pipelines tracking every lead from click to sale',
    ],
    ctaText: 'Get Your Dealership Strategy Session',
  },
  retail: {
    name: 'Retail / Stores',
    headline: 'Digital Marketing for Retail Businesses',
    subline:
      'Turn foot traffic into a digital empire. We help retail businesses dominate both online and in-store.',
    painPoints: [
      'E-commerce competitors stealing your local customers',
      'No online ordering or appointment booking system',
      'Social media presence that doesn\'t convert to sales',
      'Google Business Profile not optimized for local discovery',
    ],
    solutions: [
      'E-commerce ready websites with local pickup and delivery integration',
      'Social media advertising that drives both online and in-store traffic',
      'Local SEO and Google Business optimization for maximum visibility',
      'Email and SMS marketing automation for repeat customers',
    ],
    ctaText: 'Get Your Retail Strategy Session',
  },
  realtors: {
    name: 'Real Estate',
    headline: 'Digital Marketing for Real Estate Professionals',
    subline:
      'In real estate, visibility is everything. We make sure you\'re the agent buyers and sellers find first.',
    painPoints: [
      'Zillow and Realtor.com dominating search results for your area',
      'Leads going to teams with bigger marketing budgets',
      'Personal brand not differentiated from other agents',
      'No strategy for capturing leads from AI-powered home search',
    ],
    solutions: [
      'IDX-integrated websites that capture and nurture buyer leads',
      'Hyper-local SEO targeting your specific neighborhoods and zip codes',
      'Personal brand positioning that makes you THE go-to agent',
      'AI visibility optimization for next-generation home search platforms',
    ],
    ctaText: 'Get Your Real Estate Strategy Session',
  },
  lawyers: {
    name: 'Legal / Law Firms',
    headline: 'Digital Marketing for Law Firms',
    subline:
      'Legal clients are making decisions online before they ever call. We make sure they find you and choose you.',
    painPoints: [
      'Extremely high cost-per-click for legal keywords ($50-200+ per click)',
      'Directory sites like Avvo and FindLaw outranking your firm',
      'Website that doesn\'t instill trust or convert consultations',
      'No content strategy for AI-powered legal search queries',
    ],
    solutions: [
      'Authority-building content that positions you as the legal expert',
      'Conversion-optimized websites designed specifically for law firms',
      'PPC campaigns with smart bidding to maximize ROI on expensive legal keywords',
      'GEO optimization so AI assistants recommend YOUR firm for legal questions',
    ],
    ctaText: 'Get Your Law Firm Strategy Session',
  },
};

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = industries[params.slug];
  if (!data) return {};

  return {
    title: `${data.name} Marketing | Found It Marketing`,
    description: data.subline,
  };
}

export default function IndustryPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = industries[params.slug];
  if (!data) return notFound();

  return (
    <main className="pt-32 lg:pt-40">
      {/* Hero */}
      <section className="pb-24 lg:pb-32 border-b border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8 block border-l-4 border-primary pl-4">
              {data.name}
            </span>
            <h1 className="text-foreground text-4xl sm:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
              {data.headline.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary">
                {data.headline.split(' ').slice(-1)}
              </span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl font-medium border-l-8 border-primary pl-8">
              {data.subline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-foreground text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-16">
              The Challenges You <span className="text-primary">Face</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.painPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border/40 rounded-[2rem] p-8 lg:p-10 hover:border-primary/50 transition-all duration-500">
                  <span className="text-primary text-5xl font-black italic opacity-30 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-card-foreground text-lg font-medium mt-4">
                    {point}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 lg:py-32 border-t border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-foreground text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-16">
              How We <span className="text-primary">Solve It</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.solutions.map((solution, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border/40 rounded-[2rem] p-8 lg:p-10 hover:border-primary/50 transition-all duration-500">
                  <div className="w-3 h-3 rounded-full bg-primary mb-6" />
                  <p className="text-card-foreground text-lg font-medium">
                    {solution}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-border/10">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-4 text-primary">
              Ready to Dominate?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Get a custom strategy built specifically for the{' '}
              {data.name.toLowerCase()} industry.
            </p>
            <Link href="/contact">
              <LiquidButton className="h-16 px-10 text-xl tracking-[0.15em]">
                {data.ctaText}
              </LiquidButton>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
