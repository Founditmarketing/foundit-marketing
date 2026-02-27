'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ThemeSwitcher({ forceWhite }: { forceWhite?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // use resolvedTheme to handle 'system' preference
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  // To avoid hydration mismatch, we render a placeholder or nothing until mounted.
  if (!mounted) {
    // Placeholder with the same size as the final component to prevent layout shift
    return <div className="flex items-center space-x-2 h-6 w-[76px]"></div>;
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className={cn("h-5 w-5", forceWhite ? "text-white" : "text-foreground")} />
      <Switch
        id="theme-switch"
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className={cn("h-5 w-5", forceWhite ? "text-white" : "text-foreground")} />
    </div>
  );
}
