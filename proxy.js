// proxy.js
import { NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'ru', 'kk'];
const DEFAULT_LOCALE = 'en';

export default function proxy(request) {
  const { pathname } = request.nextUrl;

  // 1. Пропускаем технику: _next, api, статику и т.п.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next();
  }

  // 2. Если путь уже начинается с /en /ru /kk — просто записываем куку и пропускаем
  const currentLocale = SUPPORTED_LOCALES.find(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );

  if (currentLocale) {
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', currentLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 год
    });
    return response;
  }

  // 3. Если локали в URL нет — определяем, куда редиректить
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const acceptLang = request.headers.get('accept-language');
  const detectedLocale = acceptLang?.split(',')[0]?.split('-')[0];

  const locale =
    (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) ? cookieLocale :
    (detectedLocale && SUPPORTED_LOCALES.includes(detectedLocale)) ? detectedLocale :
    DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

// чтобы Proxy не трогал статику, _next и т.д.
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
