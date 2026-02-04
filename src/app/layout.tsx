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
  description: "We don't just run campaigns; we build digital empires. As a results-driven digital marketing agency, we've generated over $2.3 billion in client revenue.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://founditmarketing.com',
    siteName: 'Found It Marketing',
    title: 'Found It Marketing | Digital Empire Building',
    description: "We don't just run campaigns; we build digital empires. Generative Engine Optimization (GEO) & High-Velocity Paid Acquisition.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Found It Marketing | Digital Empire Building',
    description: "We don't just run campaigns; we build digital empires. Generative Engine Optimization (GEO) & High-Velocity Paid Acquisition.",
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
};

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
