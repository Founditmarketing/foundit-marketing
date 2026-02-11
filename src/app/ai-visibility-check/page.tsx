import { AIVisibilityChecker } from '@/components/ai-visibility/AIVisibilityChecker';
import { Suspense } from 'react';
import { NeuralNetworkBackground } from '@/components/ui/NeuralNetworkBackground';
import { TextScramble } from '@/components/ui/TextScramble';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Visibility Check | See How AI Sees You',
  description: "Is your brand invisible to ChatGPT and Gemini? Get a free 30-second audit to see if you exist in the AI Knowledge Graph. Empowering Louisiana brands for AI search.",
  keywords: [
    'AI Visibility Check',
    'ChatGPT Optimization',
    'Gemini SEO',
    'AI Search Audit',
    'Generative Engine Optimization Louisiana',
    'GEO Check'
  ],
  other: {
    'geo.region': 'US-LA',
    'geo.placename': 'Alexandria',
  }
};

export const maxDuration = 60;

export default function AIVisibilityCheckPage() {
  return (
    <main className="bg-background text-foreground py-24 lg:py-48 relative overflow-hidden">
      <div className="hidden lg:block absolute inset-0 z-0 opacity-100">
        <NeuralNetworkBackground />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-12">
            <h1 className="text-oversized leading-[0.85] mb-8">
              <TextScramble text="AI Readiness." delay={200} /><br />
              <span className="text-primary">
                <TextScramble text="Future Proofed." delay={800} />
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-muted-foreground max-w-5xl border-l-[12px] border-primary pl-10 font-medium italic">
              Is your website prepared for the new era of AI-driven search? Our Gemini-powered engine analyzes your site's authority in LLM recommendations.
            </p>
          </div>
        </div>

        <div className="bg-card/40 backdrop-blur-2xl border border-border/50 rounded-[4rem] p-10 lg:p-20 shadow-3xl">
          <Suspense>
            <AIVisibilityChecker />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
