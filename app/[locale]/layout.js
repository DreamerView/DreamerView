import HeaderSection from './HeaderSection';
import PreloaderComponent from './PreloaderComponent';
import "./globals.css";

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});


export const metadata = {
  title: 'Temirkhan Portfolio',
  description: 'Built with Next.js + Bootstrap',
};

export default async function RootLayout({ children, params }) {
  const {locale} = await params;

  return (
    <html lang={locale} className={inter.variable}>
      <body style={{ overflowX: 'hidden' }}>
        <PreloaderComponent locale={locale} />
        <HeaderSection locale={locale} />
        {children}
      </body>
    </html>
  );
}
