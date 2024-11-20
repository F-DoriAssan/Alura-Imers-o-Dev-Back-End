// ThemeSwitcher.jsx
'use client';

import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button onClick={toggleTheme}>
      Cambiar Tema
    </button>
  );
}
