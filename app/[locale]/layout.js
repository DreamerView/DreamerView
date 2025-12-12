import HeaderSection from './HeaderSection';
import "bootstrap/dist/css/bootstrap.min.css";
import "./skeleton.css"
import Script from 'next/script';


export const metadata = {
  title: 'Temirkhan Portfolio',
  description: 'Built with Next.js + Bootstrap',
};

export default async function RootLayout({ children, params }) {
  const {locale} = await params;

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="preconnect"
          href="https://prod-files-secure.s3.us-west-2.amazonaws.com"
          crossOrigin=""
        />
      </head>
      <body style={{ overflowX: 'hidden' }}>
        <HeaderSection locale={locale} />
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
