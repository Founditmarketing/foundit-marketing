import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Outfit } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://founditmarketing.com'),
  title: {
    default: 'Found It Marketing | Digital Empire Building',
    template: '%s | Found It Marketing'
  },
  description: "Results-driven digital marketing agency building empires in Alexandria, Pineville & Central Louisiana. Specialists in Generative Engine Optimization (GEO) and High-Velocity Paid Acquisition.",
  keywords: [
    'Digital Marketing Alexandria LA',
    'SEO Alexandria Louisiana',
    'Generative Engine Optimization',
    'GEO Optimization',
    'AI Marketing Agency',
    'Paid Acquisition Scale',
    'Web Design Alexandria LA',
    'Found It Marketing'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://founditmarketing.com',
    siteName: 'Found It Marketing',
    title: 'Found It Marketing | Digital Empire Building',
    description: "We build digital empires in Central Louisiana. Generative Engine Optimization (GEO) & High-Velocity Paid Acquisition.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Found It Marketing | Digital Empire Building',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Found It Marketing | Digital Empire Building',
    description: "We build digital empires in Central Louisiana. Generative Engine Optimization (GEO) & High-Velocity Paid Acquisition.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-LA',
    'geo.placename': 'Alexandria',
    'geo.position': '31.2829;-92.4812',
    'ICBM': '31.2829, -92.4812',
  }
};

import { MetaPixel } from '@/components/analytics/MetaPixel';
import { GoogleTag } from '@/components/analytics/GoogleTag';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          inter.variable,
          outfit.variable
        )}
      >
        <MetaPixel />
        <GoogleTag />
        <LocalBusinessSchema />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
