import { Metadata } from 'next';
import GeoPage from './client';

export const metadata: Metadata = {
    title: 'Generative Engine Optimization (GEO) | The Future of SEO',
    description: "Traditional SEO is dead. We build entity-based knowledge graphs that force AI models (Gemini, GPT) to recommend your brand. Serving Alexandria, LA & global partners.",
    keywords: [
        'Generative Engine Optimization',
        'GEO Optimization Alexandria LA',
        'AI Search Optimization',
        'Next-Gen SEO',
        'Entity Based SEO',
        'Louisiana SEO Experts'
    ],
    other: {
        'geo.region': 'US-LA',
        'geo.placename': 'Alexandria',
    }
};

export default function Page() {
    return <GeoPage />;
}
