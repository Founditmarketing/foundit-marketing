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
    title: 'FoundIt OS™',
    href: '/platform',
  },
  {
    title: 'Websites',
    href: '/web-development',
    sublinks: [
      { title: 'Ignite', href: '/websites/ignite' },
      { title: 'Accelerate', href: '/websites/accelerate' },
      { title: 'Dominate', href: '/websites/dominate' },
      { title: 'Empire', href: '/websites/empire' },
      { title: 'View All Projects', href: '/web-development' },
    ],
  },
  {
    title: 'Marketing',
    href: '/marketing',
  },
  {
    title: 'Industries',
    href: '#',
    sublinks: [
      { title: 'Medical / Healthcare', href: '/industries/medical' },
      { title: 'Contractors', href: '/industries/contractors' },
      { title: 'Dealerships', href: '/industries/dealerships' },
      { title: 'Retail / Stores', href: '/industries/retail' },
      { title: 'Real Estate', href: '/industries/realtors' },
      { title: 'Lawyers', href: '/industries/lawyers' },
    ],
  },
  {
    title: 'Company',
    href: '#',
    sublinks: [
      { title: 'About', href: '/about' },
      { title: 'The Team', href: '/team' },
      { title: 'Case Studies', href: '/case-studies' },
      { title: 'Blog', href: '/blog' },
    ],
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
      initial={{ y: -30, opacity: 0, filter: 'blur(4px)' }}
      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full transition-all duration-700 ease-liquid',
        isScrolled
          ? 'h-16 lg:h-20 bg-black/80 backdrop-blur-xl border-b border-border/40'
          : 'h-20 lg:h-24 bg-transparent'
      )}
    >
      <div className="w-full mx-auto px-6 xl:px-12 h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            href="/"
            className="font-black text-3xl tracking-tighter group relative select-none text-white"
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
          <nav className="hidden lg:flex items-center gap-4 2xl:gap-8">
            {navLinks.map((link) =>
              link.sublinks ? (
                <DropdownMenu key={link.title}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-1 font-black uppercase italic tracking-tighter text-sm transition-colors group relative text-white hover:text-white hover:bg-white/10"
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
                  className="font-black uppercase italic tracking-tighter text-sm transition-colors relative group py-2 text-white hover:text-primary"
                >
                  {link.title}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  />
                </Link>
              )
            )}
          </nav>
          <div className="hidden lg:flex items-center gap-4 2xl:gap-6">
            <ThemeSwitcher forceWhite={true} />
            <Button variant="ghost" className="font-black uppercase italic tracking-tighter h-11 transition-colors text-white hover:text-primary hover:bg-transparent" asChild>
              <a href={mounted ? phoneHref : '#'}>
                <Phone className="mr-2 h-4 w-4" />
                {mounted ? phoneNumber : '...'}
              </a>
            </Button>
            <Link href="/contact" className="hidden lg:block">
              <LiquidButton className="h-14 px-8 text-xs tracking-[0.2em] magnetic transition-colors duration-300 text-white border-white bg-transparent hover:bg-white hover:text-black">
                Free Strategy Session
              </LiquidButton>
            </Link>
          </div>
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
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
                <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-start text-center pt-8">
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
                      <ThemeSwitcher forceWhite={false} />
                    </div>
                    <Link href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                      <LiquidButton className="w-full py-3 text-xs tracking-[0.2em]">
                        Free Strategy Session
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
