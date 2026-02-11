'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
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
      <Sun className="h-5 w-5" />
      <Switch
        id="theme-switch"
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className="h-5 w-5" />
    </div>
  );
}
