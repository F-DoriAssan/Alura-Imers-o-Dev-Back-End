import './globals.css';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Tu Proyecto',
  description: 'Descripción de tu aplicación',
};

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${cn(
          'min-h-screen bg-background text-foreground'
        )} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
