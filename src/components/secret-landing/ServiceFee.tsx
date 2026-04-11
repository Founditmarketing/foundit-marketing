'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wrench, CircleDollarSign } from 'lucide-react';

export function ServiceFee() {
    return (
        <section className="py-24 bg-card/10 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                    <ScrollReveal>
                        <Card className="h-full bg-card border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                    <Wrench className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">
                                    Why We Charge a <br /><span className="text-primary">Service Fee</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground text-lg">
                                <p>
                                    Think of us like a master mechanic. You can buy the best engine parts in the world,
                                    but if you don't know how to put them together, the car won't start.
                                </p>
                                <div className="pl-4 border-l-2 border-primary/20 space-y-4 my-6">
                                    <div>
                                        <strong className="text-foreground block mb-1">The Goal:</strong>
                                        We charge a fee to make sure your "engine" is built correctly from day one.
                                    </div>
                                    <div>
                                        <strong className="text-foreground block mb-1">The Reality:</strong>
                                        Most owners try to do it themselves or hire a "cheap" guy. They end up with a broken system that sends "salty" leads who never buy.
                                    </div>
                                </div>
                                <p>
                                    Our fee covers the setup, the strategy, and the daily "babysitting" of your ads to make sure you
                                    don't wake up to a $0 bank account and zero sales.
                                </p>
                            </CardContent>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <Card className="h-full bg-card border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                    <CircleDollarSign className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">
                                    Understanding Your <br /><span className="text-primary">Ad Budget</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground text-lg">
                                <p>
                                    The "Ad Budget" is separate from our fee. This is the money you pay directly to Google and Meta to "buy" your spot in front of customers.
                                </p>
                                <div className="mt-6 p-6 bg-secondary/50 rounded-2xl border border-border/50">
                                    <h4 className="font-bold text-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
                                        <Badge variant="destructive" className="uppercase tracking-widest">Hard Rule</Badge>
                                    </h4>
                                    <p className="font-medium text-foreground text-xl mb-4">
                                        We have a <span className="text-destructive font-black">$1,000 minimum</span> monthly ad budget.
                                    </p>
                                    <p className="text-sm">
                                        We will not work with less. Why? Because with less than $1,000,
                                        the "Robot" (the AI) can't learn fast enough. You'll just be "feeding the beast"
                                        without getting enough data back to close deals.
                                    </p>
                                </div>
                                <p className="pt-4">
                                    We make sure that $1,000 is used like a "sniper" instead of a "shotgun."
                                </p>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
