'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import avatar from '@/public/avatar.webp';
import translate from '@/translate/header.json';
import LanguageSwitcherModal from './LanguageSwitcherModal';
import ContactMeModal from './ContactMeModal';
import IconCall from '@/component/icons/IconCall';

const NavLinks = [
  { href: '/', title: '👨🏻‍💻', main: 'about' },
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
      <header className="container-xl d-flex flex-wrap justify-content-between align-items-center gap-3 mt-4">
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
          <IconCall width={16} height={16} />{translate['contactMe'][locale]}
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
            <svg width="26" height="26" viewBox="0 0 26 26" className='me-1' fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.03521 13.4201C2.29456 7.36176 7.43998 1.82213 12.2638 8.15017C16.5897 1.84288 21.7144 7.50699 21.9426 13.1089C22.1227 14.5045 21.8768 15.922 21.2372 17.1754C20.7683 17.8752 20.0517 18.3713 19.2317 18.5638C18.4117 18.7563 17.5492 18.6309 16.8179 18.2128C15.3863 17.3725 14.5668 15.8268 13.7058 14.4575C13.1352 13.5134 12.5647 12.5798 12.0045 11.6254C10.7492 13.6276 9.18279 17.3518 7.0354 18.358C6.30384 18.6713 5.48708 18.7249 4.72088 18.5097C3.95468 18.2946 3.28517 17.8237 2.82362 17.1754C2.1719 16.0379 1.89598 14.7237 2.03521 13.4201ZM20.0546 14.0425C19.9716 11.4802 19.3077 7.62111 16.2992 7.08167C14.8884 7.08167 14.0274 8.39914 13.3012 9.42615C13.3012 9.50914 13.3012 9.51952 13.3012 9.59213C14.0896 10.754 14.7743 11.9885 15.5108 13.1815C16.1125 14.0529 17.098 15.9928 18.042 16.3663C19.6189 16.8642 20.1064 15.3081 20.0546 14.0633V14.0425ZM4.17222 13.7935V14.333C4.14042 14.9501 4.3402 15.5568 4.73241 16.0343C4.95018 16.2512 5.23075 16.394 5.53428 16.4424C5.83782 16.4909 6.1489 16.4424 6.42334 16.304C7.07592 15.8554 7.62432 15.2716 8.03129 14.5923C9.06867 13.1192 9.95045 11.5839 10.9463 10.0901C10.9463 9.98634 10.77 9.80999 10.7285 9.70625C9.87783 8.56513 8.65372 7.07129 7.0354 7.63148C4.96063 8.87634 4.24484 11.5632 4.17222 13.7935Z" fill="#3078ED"/>
            </svg>
            {translate.desc[locale]}
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
