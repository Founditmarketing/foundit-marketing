'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';


export function SecretHero() {
    return (
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-background py-12 md:py-16">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-40" />
            </div>

            <div className="container relative z-10 px-6 mx-auto text-center">
                <ScrollReveal>
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-black text-primary backdrop-blur-sm">
                        Exclusive Access
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter mb-8 text-foreground">
                        Comprehensive <br />
                        <span className="text-primary">Marketing Systems</span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium">
                        For businesses that are <span className="text-foreground font-bold italic">ready to grow</span>.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className="inline-flex items-center justify-center px-8 py-4 border border-destructive/30 bg-destructive/5 rounded-2xl backdrop-blur-sm">
                        <p className="text-destructive font-bold uppercase tracking-widest text-sm">
                            Minimum Ad Budget: $1,000/Month
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
