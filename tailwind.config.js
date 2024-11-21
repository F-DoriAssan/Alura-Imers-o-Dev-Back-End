/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'], // Habilita el modo oscuro basado en la clase 'dark'

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        'primary-light': 'hsl(var(--primary-light))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        muted: 'hsl(var(--muted))',
        'card-dark': 'hsl(var(--card-dark))',
        'main-background': 'hsl(var(--main-background))',
        'main-background-dark': 'hsl(var(--main-background-dark))',
      },
      keyframes: {
        gradientMoveFooter: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        glowFooter: {
          '0%, 100%': {
            'box-shadow': '0 0 10px var(--primary-light), 0 0 20px var(--primary)',
          },
          '50%': {
            'box-shadow': '0 0 20px var(--primary), 0 0 40px var(--primary-light)',
          },
        },
      },
      animation: {
        gradientMoveFooter: 'gradientMoveFooter 6s infinite linear',
        glowFooter: 'glowFooter 4s infinite alternate',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
