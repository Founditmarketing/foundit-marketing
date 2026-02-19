'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LayoutGrid, Share2, Search, Zap, Video } from 'lucide-react';

const services = [
    {
        icon: Share2,
        title: 'Meta Ads & Social Presence',
        description: 'We don\'t just run ads; we handle the entire daily posting strategy. This builds "Presence." When a lead clicks an ad and sees a page that hasn\'t posted since 2022, trust is lost. We ensure the brand looks "alive" and professional.'
    },
    {
        icon: Search,
        title: 'Google Business & Search Ads',
        description: 'We handle the Google Business Page (posting and maintenance) and Google Ads. This is for the people searching right now. If they need a dentist or a nursery today, we ensure our partners are the first name they see.'
    },
    {
        icon: LayoutGrid,
        title: 'Fully Custom Website & SEO',
        description: 'We build Fully Custom Websites. No generic templates. We also handle SEO (Search Engine Optimization). The simple version: SEO is what makes Google allow a business to show up for free over time. It\'s the "long game".'
    },
    {
        icon: Zap,
        title: 'AI Geo (The "New" SEO)',
        description: 'This is the future. We optimize for AI Geo. When someone asks ChatGPT or a phone assistant "Who is the best nursery near me?", we make sure the AI recommends our partners. Without this optimization, businesses are invisible to the next generation of customers.'
    },
    {
        icon: Video,
        title: 'Content Creation',
        description: 'Business owners are busy running a business; they don\'t have time to be TikTok stars. We handle the Content Creation. We make the videos and photos that actually stop the "zombie scroll" and get people to pay attention.'
    }
];

export function WhatWeDo() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                            The Engine Parts
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
                            What We <span className="text-primary">Actually Do</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="bg-card border border-border/50 p-8 rounded-3xl h-full hover:border-primary/50 transition-colors duration-300 group">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black uppercase italic tracking-tight mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal>
                    <div className="mt-20 p-8 md:p-12 bg-card border border-border/50 rounded-[3rem] text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20" />
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-6">The Bottom Line</h3>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium">
                                Digital marketing fails when owners are "unserious" or "problem unaware."
                                By the time we are done, the business isn't just "running ads"—it has a complete system that builds trust,
                                filters out the losers, and focuses on the "Serious Guys" who actually have money to spend.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
