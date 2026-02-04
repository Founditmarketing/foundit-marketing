import { Metadata } from 'next';
import GeoPage from './client';

export const metadata: Metadata = {
    title: 'Generative Engine Optimization (GEO) | The Future of SEO',
    description: "Traditional SEO is dead. We build entity-based knowledge graphs that force AI models (Gemini, GPT) to recommend your brand as the definitive answer.",
};

export default function Page() {
    return <GeoPage />;
}
