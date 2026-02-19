import { Metadata } from 'next';
import AboutPage from './client';

export const metadata: Metadata = {
    title: 'About Us | 20 Years of Digital Dominance',
    description: "Data driven. Empire built. We've generated over $2.3 billion in client revenue since 2005. Meet the team behind the numbers.",
};

export default function Page() {
    return <AboutPage />;
}
