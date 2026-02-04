import { Metadata } from 'next';
import PpcPage from './client';

export const metadata: Metadata = {
    title: 'High-Velocity Paid Acquisition | Google & Meta Ads',
    description: "Scale revenue, not just spend. We manage $72M+ in ad spend using AI-powered bidding to capture high-intent demand at the lowest possible CPA.",
};

export default function Page() {
    return <PpcPage />;
}
