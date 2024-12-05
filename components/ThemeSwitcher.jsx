'use client';

import {
  useEffect,
  useState,
} from 'react';

import {
  Moon,
  Sun,
} from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Para evitar el renderizado en el servidor
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null; // Evita renderizar hasta que el tema esté cargado

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
      aria-label="Cambiar tema"
    >
      {resolvedTheme === 'dark' ? (
                <Moon className="w-6 h-6 text-gray-800 dark:text-gray-300" />

      ) : (
        <Sun className="w-6 h-6 text-yellow-400" />

      )}
    </button>
  );
}
