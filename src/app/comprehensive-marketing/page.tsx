import { SecretHero } from '@/components/secret-landing/SecretHero';
import { PainPoints } from '@/components/secret-landing/PainPoints';
import { ServiceFee } from '@/components/secret-landing/ServiceFee';
import { WhatWeDo } from '@/components/secret-landing/WhatWeDo';
import { OwnerMessage } from '@/components/secret-landing/OwnerMessage';
import { SecretContactForm } from '@/components/secret-landing/SecretContactForm';
import { FloatingCTA } from '@/components/secret-landing/FloatingCTA';
import { LogoStrip } from '@/components/secret-landing/LogoStrip';
import { WhoIsThisFor } from '@/components/secret-landing/WhoIsThisFor';
import { TestimonialDivider } from '@/components/secret-landing/TestimonialDivider';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Comprehensive Marketing Systems | Found It Marketing',
    description: 'Exclusive marketing systems for businesses ready to dominate.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function ComprehensiveMarketingPage() {
    return (
        <main className="min-h-screen bg-background">
            <SecretHero />
            <LogoStrip />

            {/* 1. Pain Points first */}
            <PainPoints />

            {/* 2. Who Is This For */}
            <WhoIsThisFor />

            {/* Testimonial 1 */}
            <TestimonialDivider
                title="Wall's Tree Service"
                videoSrc="/walls-tree-service-testimonial.mp4"
                link="https://wallstreeservice.com/"
            />

            {/* 3. What We Do */}
            <WhatWeDo />

            {/* Testimonial 2 */}
            <TestimonialDivider
                title="Lacaze Outdoor"
                videoSrc="/lecaze-testimonial.mp4"
                link="https://lacazeoutdoor.com/"
            />

            {/* 4. Service Fee */}
            <ServiceFee />

            {/* Testimonial 3 */}
            <TestimonialDivider
                title="Marksville Insurance"
                videoSrc="/blake-knoll-testimonial.mp4"
                link="https://marksvilleinsurance.com/"
            />

            {/* 5. Owner Message (Last piece before form) */}
            <OwnerMessage />

            {/* Testimonial 4 */}
            <TestimonialDivider
                title="Red Dirt Tractors"
                videoSrc="/byron-testimonial.mp4"
                link="https://reddirttractors.com/"
            />

            <SecretContactForm />
            <FloatingCTA />
        </main>
    );
}
