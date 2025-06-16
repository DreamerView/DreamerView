import Script from 'next/script';
import HeaderSection from './HeaderSection';
import { headers } from 'next/headers';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
        <HeaderSection ssrPath={pathname} />
        {children}
      </body>
      <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
    </html>
  );
}
