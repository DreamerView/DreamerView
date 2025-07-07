import HeaderSection from './HeaderSection';
import PreloaderComponent from './PreloaderComponent';


export const metadata = {
  title: 'Temirkhan Portfolio',
  description: 'Built with Next.js + Bootstrap',
};

export default async function RootLayout({ children, params }) {
  const {locale} = await params;

  return (
    <html lang={locale}>
      <body style={{ overflowX: 'hidden' }}>
        <PreloaderComponent locale={locale} />
        <HeaderSection locale={locale} />
        {children}
      </body>
    </html>
  );
}
