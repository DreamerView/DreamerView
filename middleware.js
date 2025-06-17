import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED_LOCALES = ['en', 'ru', 'kk'];
const DEFAULT_LOCALE = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1. Пропускаем статические файлы и _next/api
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(PUBLIC_FILE)
  ) {
    return;
  }

  const currentLocale = SUPPORTED_LOCALES.find((loc) =>
    pathname.startsWith(`/${loc}`)
  );

  const response = NextResponse.next();

  // 2. Если уже есть локаль в URL — сохраняем её в куки
  if (currentLocale) {
    response.cookies.set('NEXT_LOCALE', currentLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 год
    });
    return response;
  }

  // 3. Если нет локали — определяем и перенаправляем
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const acceptLang = request.headers.get('accept-language');
  const detectedLocale = acceptLang?.split(',')[0]?.split('-')[0];

  const locale =
    cookieLocale ||
    (SUPPORTED_LOCALES.includes(detectedLocale) ? detectedLocale : DEFAULT_LOCALE);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}
