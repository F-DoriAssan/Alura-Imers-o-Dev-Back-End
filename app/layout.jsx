import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import AdminProvider from '@/context/admin-provider';
import ContextProvider from '@/context/context';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Tu Proyecto de Marketing',
  description: 'Descripción llamativa y moderna para tu página.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={cn('bg-background text-foreground antialiased')}>
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