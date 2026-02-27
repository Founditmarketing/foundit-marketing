'use client';

import { SolutionWizard } from '@/components/solutions/SolutionWizard';
import { NeuralNetworkBackground } from '@/components/ui/NeuralNetworkBackground';
import { TextScramble } from '@/components/ui/TextScramble';


export default function SolutionsPage() {
  return (
    <main className="bg-background text-foreground py-24 lg:py-48 relative overflow-hidden">
      <div className="hidden lg:block absolute inset-0 z-0 opacity-100">
        <NeuralNetworkBackground />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-12">
            <h1 className="text-oversized leading-[0.85] mb-8">
              <TextScramble text="AI Solutions." delay={200} /><br />
              <span className="text-primary">
                <TextScramble text="Mission Control." delay={800} />
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-muted-foreground max-w-5xl border-l-[12px] border-primary pl-10 font-medium italic">
              Answer a few questions about your business, and our Gemini-powered strategist will generate a custom growth architecture in seconds.
            </p>
          </div>
        </div>

        <div className="bg-card/40 backdrop-blur-3xl border border-border/50 rounded-[4rem] p-10 lg:p-20 shadow-3xl">
          <SolutionWizard />
        </div>
      </div>
    </main>
  );
}
