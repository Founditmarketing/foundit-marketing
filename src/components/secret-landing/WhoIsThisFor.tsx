'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Check, X } from 'lucide-react';

export function WhoIsThisFor() {
    return (
        <section className="py-24 bg-card/20 border-y border-border/50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                            The Selection Process
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
                            Who Is This <span className="text-primary">For?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            We don't work with everyone. We are looking for specific partners who are ready to dominate.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <ScrollReveal delay={0.1}>
                        <div className="bg-background/50 border border-border/50 p-8 rounded-3xl h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <Check className="w-6 h-6 text-green-500" />
                                </div>
                                <h3 className="text-xl font-black uppercase italic tracking-tight">The Serious Guys</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <span className="text-muted-foreground">Business owners who create "Generational Wealth" and "Kingdom Building" opportunities.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <span className="text-muted-foreground">Leaders who understand that marketing is an investment, not an expense.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <span className="text-muted-foreground">Partners who are willing to trust the process and let the experts do their job.</span>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="bg-background/50 border border-destructive/20 p-8 rounded-3xl h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                                    <X className="w-6 h-6 text-destructive" />
                                </div>
                                <h3 className="text-xl font-black uppercase italic tracking-tight text-destructive">NOT For You If...</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-destructive mt-1 shrink-0" />
                                    <span className="text-muted-foreground">You panic after 3 days of not seeing "instant millions."</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-destructive mt-1 shrink-0" />
                                    <span className="text-muted-foreground">You think you can do it better yourself (the "Hero Complex").</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-destructive mt-1 shrink-0" />
                                    <span className="text-muted-foreground">You treat your marketing agency like a vending machine.</span>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
