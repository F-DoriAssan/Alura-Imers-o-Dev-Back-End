module.exports = {
  darkMode: ['class'], // Habilita el modo oscuro con la clase 'dark'

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
        secondary: 'hsl(var(--secondary))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
        destructive: 'hsl(var(--destructive))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        'header-footer-background': 'hsl(var(--header-footer-background))',
        'header-footer-background-hover': 'hsl(var(--header-footer-background-hover))',
        'header-footer-box-shadow': 'hsl(var(--header-footer-box-shadow))',
        'main-background': 'hsl(var(--main-background))', // Fondo para el main
        'main-background-dark': 'hsl(var(--main-background-dark))', // Fondo main en modo oscuro
        'hover-dark': 'hsl(var(--hover-dark))', // Fondo de hover en modo oscuro
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
