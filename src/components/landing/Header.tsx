'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, Phone } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { motion } from 'framer-motion';
const navLinks = [
  {
    title: 'GEO / SEO',
    href: '/seo',
    sublinks: [
      { title: 'GEO Overview', href: '/seo' },
      { title: 'High-Intent SEO', href: '/seo#high-intent' },
      { title: 'Authority Building', href: '/seo#authority-building' },
      { title: 'Client Case Study', href: '/seo#case-study' },
    ],
  },
  {
    title: 'PPC',
    href: '/ppc',
    sublinks: [
      { title: 'PPC Management', href: '/ppc' },
      { title: 'Google Ads', href: '/ppc#google-ads' },
      { title: 'Social Media Ads', href: '/ppc#meta-ads' },
    ],
  },
  {
    title: 'Solutions',
    href: '#',
    sublinks: [
      { title: 'AI Solution Strategist', href: '/solutions' },
      { title: 'Gemini Feasibility Study', href: '/feasibility-study' },
      { title: 'AI Visibility Check', href: '/ai-visibility-check' },
    ],
  },
  {
    title: 'Case Studies',
    href: '/case-studies',
  },
  {
    title: 'About',
    href: '/about',
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const router = useRouter();
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handlePressStart = () => {
    timerRef.current = setTimeout(() => {
      router.push('/comprehensive-marketing');
    }, 3000);
  };

  const handlePressEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '(318) 280-0115';
  const phoneHref = 'tel:3182800115';

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-700 ease-liquid',
        isScrolled
          ? 'h-16 lg:h-20 bg-background/60 backdrop-blur-2xl border-b border-border/40 shadow-xl shadow-black/5'
          : 'h-20 lg:h-24 bg-background/0 backdrop-blur-none border-b border-transparent shadow-none'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            href="/"
            className="font-black text-3xl tracking-tighter text-foreground group relative select-none"
            onMouseDown={handlePressStart}
            onMouseUp={handlePressEnd}
            onMouseLeave={handlePressEnd}
            onTouchStart={handlePressStart}
            onTouchEnd={handlePressEnd}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              found it<span className="text-primary inline-block animate-bounce-dot">.</span>
            </motion.span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.sublinks ? (
                <DropdownMenu key={link.title}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-1 font-black uppercase italic tracking-tighter text-sm hover:text-primary hover:bg-transparent transition-colors group relative"
                    >
                      {link.title} <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card/90 backdrop-blur-2xl border-border/50 rounded-2xl p-2 min-w-[200px]">
                    {link.sublinks.map((sublink) => (
                      <DropdownMenuItem key={sublink.title} asChild className="rounded-xl focus:bg-primary focus:text-primary-foreground cursor-pointer transition-colors duration-200">
                        <Link href={sublink.href} className="font-bold py-2">{sublink.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.title}
                  href={link.href}
                  className="font-black uppercase italic tracking-tighter text-sm text-foreground hover:text-primary transition-colors relative group py-2"
                >
                  {link.title}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  />
                </Link>
              )
            )}
          </nav>
          <div className="hidden lg:flex items-center gap-6">
            <ThemeSwitcher />
            <Button variant="ghost" className="font-black uppercase italic tracking-tighter h-11 hover:text-primary hover:bg-transparent" asChild>
              <a href={mounted ? phoneHref : '#'}>
                <Phone className="mr-2 h-4 w-4" />
                {mounted ? phoneNumber : '...'}
              </a>
            </Button>
            <Link href="/contact" className="hidden lg:block">
              <LiquidButton className="h-14 px-8 text-xs tracking-[0.2em] magnetic">
                Initiate Strategy
              </LiquidButton>
            </Link>
          </div>
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="p-0 flex flex-col">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle>
                    <Link
                      href="/"
                      className="font-black text-xl tracking-tighter text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      found it.
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-center text-center">
                  <div className="flex flex-col gap-6 items-center">

                    {navLinks.map((link) => (
                      <div key={link.title}>
                        {link.sublinks ? (
                          <>
                            <h4 className="font-bold mb-2 text-base">
                              {link.title}
                            </h4>
                            <div className="flex flex-col gap-2 pl-0 border-l-0 items-center">

                              {link.sublinks.map((sublink) => (
                                <Link
                                  key={sublink.title}
                                  href={sublink.href}
                                  className="text-muted-foreground hover:text-foreground py-2"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {sublink.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={link.href}
                            className="font-bold block text-base py-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 border-t bg-muted/50">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-center">
                      <ThemeSwitcher />
                    </div>
                    <Link href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                      <LiquidButton className="w-full py-3 text-xs tracking-[0.2em]">
                        Proposal in 1 Hour
                      </LiquidButton>
                    </Link>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full uppercase tracking-wider"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <a href={mounted ? phoneHref : '#'}>Call {mounted ? phoneNumber : '...'}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
