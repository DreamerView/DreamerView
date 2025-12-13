import HeaderSection from './HeaderSection';
import "bootstrap/dist/css/bootstrap.min.css";
import "./skeleton.css"
import Script from 'next/script';


export const metadata = {
  title: 'Temirkhan Rustemov',
  description: 'Meta Certified Full-Stack Developer.',
  other: {
    preconnect: [
      "https://cdn.jsdelivr.net",
      "https://prod-files-secure.s3.us-west-2.amazonaws.com"
    ]
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },

  manifest: '/site.webmanifest',

  appleWebApp: {
    title: 'Temirkhan',
    capable: true,
    statusBarStyle: 'default',
  },
};

export default async function RootLayout({ children, params }) {
  const {locale} = await params;

  return (
    <html lang={locale}>
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
