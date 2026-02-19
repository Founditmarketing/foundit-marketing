'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function LogoStrip() {
    return (
        <section className="py-8 bg-card/20 border-y border-border/50 overflow-hidden">
            <div className="container mx-auto px-6">
                <ScrollReveal delay={0.2}>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Google */}
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                            </svg>
                        </div>

                        {/* Facebook */}
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.04 16.12 6.04V8.51H15.01C13.77 8.51 13.38 9.28 13.38 10.07V12.06H16.16L15.72 14.96H13.38V21.96C18.16 21.21 21.82 17.06 21.82 12.06C21.82 6.53 17.32 2.04 12 2.04Z" />
                            </svg>
                        </div>

                        {/* Instagram */}
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                            </svg>
                        </div>

                        {/* Websites */}
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" x2="22" y1="12" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
