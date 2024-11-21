import './globals.css';

import localFont from 'next/font/local';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import AdminProvider from '@/context/admin-provider';
import ContextProvider from '@/context/context';
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
          ' bg-background text-foreground'
        )} antialiased`}
      >
           <ThemeProvider attribute="class" defaultTheme="dark">
          <ContextProvider>
            <AdminProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          </AdminProvider>
          </ContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
