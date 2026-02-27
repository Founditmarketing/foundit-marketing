'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const painPoints = [
    {
        title: 'The "Day 3" Panic (Lack of Patience)',
        pain: 'The Pain: They expect the phone to ring the second they hit "Publish" on an ad.',
        fail: 'Why it fails: They don\'t understand that Meta and Google have a "Learning Phase." They fire the company during the first week while the AI is still figuring out who the "Serious Guys" are. They pull the plug right before the "fucking money" starts coming in.'
    },
    {
        title: 'The "Vending Machine" Mindset',
        pain: 'The Pain: They think marketing is "Set it and Forget it."',
        fail: 'Why it fails: They don\'t realize that marketing is 50% of the battle and their sales team is the other 50%. When the agency sends 50 leads and the owner doesn\'t close any because they called them 2 days late, they blame the "leads" and fire the agency.'
    },
    {
        title: '"Shiny Object" Syndrome',
        pain: 'The Pain: They see a TikTok about "AI Chatbots" or "SEO" and suddenly think their current Meta Ads are "old school."',
        fail: 'Why it fails: They jump from strategy to strategy without ever finishing one. They fire the agency not because the ads didn\'t work, but because they got distracted by a new "magic pill" promise from someone else.'
    },
    {
        title: 'Unrealistic Math (The "Poor Man\'s" Budget)',
        pain: 'The Pain: They want to compete with a national brand but only want to spend $500 a month.',
        fail: 'Why it fails: When $500 only gets them a few "Salty Zombies," they think the agency is "stealing" from them. They don\'t accept that their niche (like dentistry) is expensive to play in.'
    },
    {
        title: 'Micromanaging the "Creative"',
        pain: 'The Pain: They insist on using an ugly logo or a boring 20-minute video because "it\'s their vision."',
        fail: 'Why it fails: The agency knows what converts, but the owner forces them to run "bad ads." When the bad ads fail (because they are boring), the owner blames the agency\'s "technical skills" instead of their own bad taste.'
    },
    {
        title: 'The "Hero" Complex',
        pain: 'The Pain: The owner wants to be the one who "saved" the business.',
        fail: 'Why it fails: If a marketing company starts getting results, the owner starts feeling like they are "losing control" or paying too much for something "easy." They fire the agency to try and do it themselves, then fail and hire a 5th company.'
    },
    {
        title: 'No "Infrastructure" for Success',
        pain: 'The Pain: They hire a marketing company but don\'t have a CRM, a dialer, or a person to answer the phone.',
        fail: 'Why it fails: The agency generates leads, but the leads sit in an email inbox and rot. The owner sees "no sales" and fires the agency, never realizing that their own office setup is the problem.'
    },
    {
        title: '"The Grass is Greener" Fallacy',
        pain: 'The Pain: They get a cold call from another agency promising "Guaranteed 100 Leads or You Don\'t Pay."',
        fail: 'Why it fails: Even if their current agency is doing a "good" job, they get "fomo" (fear of missing out). They fire a solid partner for a "promise" that eventually turns out to be a scam.'
    },
    {
        title: 'Lack of "Truth-Telling"',
        pain: 'The Pain: The agency is too "scared" of the owner to tell them their product or their price sucks.',
        fail: 'Why it fails: The agency keeps trying to "fix" the ads, but the problem is the business itself. Eventually, the owner gets "salty" that there are no results and fires everyone because nobody had the balls to tell them the truth.'
    },
    {
        title: 'High "Emotional" Volatility',
        pain: 'The Pain: If they have a bad sales day (even if it\'s not related to ads), they lash out.',
        fail: 'Why it fails: They treat their marketing agency like a "stress ball." One bad week and they "blow it all up" in a fit of rage. They are "unserious" about the long-term growth and only focused on their current mood.'
    }
];

export function PainPoints() {
    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <ScrollReveal>
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
                            Why Businesses <span className="text-destructive">Fail</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We've seen it all. If any of these sound familiar, we are
                            <span className="text-destructive font-bold"> NOT</span> the right fit.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-4">
                    {painPoints.map((point, index) => (
                        <ScrollReveal key={index} delay={index * 0.05}>
                            <div className="group border border-border/50 bg-card rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value={`item-${index}`} className="border-none">
                                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                            <div className="flex items-center text-left">
                                                <span className="font-mono text-primary font-bold mr-4 text-xl">0{index + 1}.</span>
                                                <h3 className="font-bold text-lg md:text-xl uppercase italic tracking-wide group-hover:text-primary transition-colors">
                                                    {point.title}
                                                </h3>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6 pb-6 pt-2">
                                            <div className="space-y-4 pl-10 border-l-2 border-primary/20 ml-2">
                                                <div>
                                                    <p className="text-destructive font-bold uppercase text-xs tracking-widest mb-1">The Pain</p>
                                                    <p className="text-muted-foreground">{point.pain.replace('The Pain: ', '')}</p>
                                                </div>
                                                <div>
                                                    <p className="text-primary font-bold uppercase text-xs tracking-widest mb-1">Why It Fails</p>
                                                    <p className="text-foreground">{point.fail.replace('Why it fails: ', '')}</p>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
