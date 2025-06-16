import Script from 'next/script';
import HeaderSection from './HeaderSection';
import { headers } from 'next/headers';
import PreloaderComponent from './PreloaderComponent';

export const metadata = {
  title: 'Temirkhan Portfolio',
  description: 'Built with Next.js + Bootstrap',
};

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const pathname = headersList.get('x-next-url') || '/';
  return (
    <html lang="en">
      <body>
        <PreloaderComponent />
        <HeaderSection ssrPath={pathname} />
        {children}
      </body>
    </html>
  );
}
