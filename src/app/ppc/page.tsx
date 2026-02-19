import { Metadata } from 'next';
import PpcPage from './client';

export const metadata: Metadata = {
    title: 'High-Velocity Paid Acquisition | Google & Meta Ads Experts',
    description: "Scale revenue, not just spend. We manage $72M+ in ad spend using AI-powered bidding. Serving Alexandria, LA & global partners for maximum PPC performance.",
    keywords: [
        'Google Ads Alexandria LA',
        'PPC Management Louisiana',
        'Meta Ads Expert',
        'Paid Search Marketing',
        'Lead Generation Alexandria'
    ],
    other: {
        'geo.region': 'US-LA',
        'geo.placename': 'Alexandria',
    }
};

import { ServiceSchema } from '@/components/seo/ServiceSchema';

export default function Page() {
    return (
        <>
            <ServiceSchema
                name="High-Velocity Paid Acquisition"
                description="Scale revenue, not just spend. We manage $72M+ in ad spend using AI-powered bidding."
                url="https://founditmarketing.com/ppc"
            />
            <PpcPage />
        </>
    );
}
