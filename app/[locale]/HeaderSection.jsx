'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import avatar from '@/public/avatar.webp';
import translate from '@/translate/header.json';
import LanguageSwitcherModal from './LanguageSwitcherModal';
import ContactMeModal from './ContactMeModal';

const NavLinks = [
  { href: '/', title: '👨🏻‍💻', main: 'about' },
  { href: '/apps', title: '📲', main: 'apps' },
  { href: '/solutions', title: '🚀', main: 'solutions' },
  { href: '/products', title: '📦', main: 'products' },
  { href: '/works', title: '🗂️', main: 'works' },
  { href: '/certificates', title: '🎓', main: 'certificates' },
];

export default function HeaderSection({ locale }) {
  const pathname = usePathname();

  return (
    <>
      <LanguageSwitcherModal currentLocale={locale} pathname={pathname} title={translate['langSelect'][locale]} />
      <ContactMeModal title={translate['contactMe'][locale]} />
      <header className="container d-flex flex-wrap justify-content-between align-items-center gap-3 mt-4">
        <button
          className="btn btn-outline-dark border rounded-5"
          data-bs-toggle="modal"
          data-bs-target="#langModal"
        >
          🌍 {translate['langSelect'][locale]}
        </button>

        <button
          className="btn btn-dark rounded-5 d-inline-flex gap-2 align-items-center vibrate-icon"
          data-bs-toggle="modal"
          data-bs-target="#contactMeModal"
        >
          <i className='bi bi-phone-vibrate-fill'></i>{translate['contactMe'][locale]}
        </button>
      </header>

      <div className="container">
        <div className="w-100 d-flex flex-column align-items-center pt-5">
          <div
            className="rounded-circle bg-body-tertiary border"
            style={{ width: '150px', height: '150px' }}
          >
            <Image
              className="rounded-circle"
              placeholder="blur"
              src={avatar}
              width={150}
              height={150}
              alt="Temirkhan Rustemov Avatar"
              priority
              sizes="150px"
            />
          </div>

          <h4 className="m-0 mt-4">
            {translate.fullname[locale]}
            <i className="ms-2 text-primary bi bi-patch-check-fill"></i>
          </h4>

          <p
            className="m-0 mt-4 text-center text-secondary"
            style={{ maxWidth: '400px', width: '100%' }}
          >
            👨🏻‍💻 {translate.desc[locale]}
          </p>
        </div>

        <div className="d-flex justify-content-md-center w-100 gap-3 overflow-x-auto position-sticky top-0 bg-body my-4 py-3">
          {NavLinks.map((link, key) => {
            const fullPath = `/${locale}${link.href==="/"?"":link.href}`;
            const isActive = pathname === fullPath;

            return (
              <Link
                key={key}
                href={fullPath}
                className={`btn ${
                  isActive ? 'btn-dark' : 'btn-outline-dark'
                } border text-nowrap rounded-4 nav-btn`}
              >
                {link.title} {translate[link.main][locale]}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
