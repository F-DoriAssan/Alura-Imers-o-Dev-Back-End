/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'], // Habilita modo oscuro basado en la clase 'dark'
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        'primary-light': 'hsl(var(--primary-light))',
        'primary-hover': 'hsl(var(--primary-hover))',
        secondary: 'hsl(var(--secondary))',
        'secondary-hover': 'hsl(var(--secondary-hover))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        muted: 'hsl(var(--muted))',
        'card-dark': 'hsl(var(--card-dark))',
        'main-background': 'hsl(var(--main-background))',
        'main-background-dark': 'hsl(var(--main-background-dark))',
        'paragraph-light': 'hsl(var(--paragraph-light))',
        'paragraph-dark': 'hsl(var(--paragraph-dark))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
