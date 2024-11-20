'use client';

import {
  useEffect,
  useState,
} from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="opacity-0">{children}</div>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
