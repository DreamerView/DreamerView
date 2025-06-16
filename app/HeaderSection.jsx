'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import avatar from '@/public/avatar.webp';

const NavLinks = [
  { href: '/', title: '👨🏻‍💻 About me' },
  { href: '/apps', title: '📲 Apps' },
  { href: '/solutions', title: '🚀 Solutions' },
  { href: '/products', title: '📦 Products' },
  { href: '/works', title: '🗂️ Works' },
  { href: '/certificates', title: '🎓 Certificates' }
];

export default function HeaderSection({ ssrPath = '/' }) {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(ssrPath);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <>
      <header className="container d-flex flex-wrap justify-content-between align-items-center gap-3 mt-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="About Karaganda"
          className="btn btn-outline-dark border rounded-5"
          href="https://en.wikipedia.org/wiki/Karaganda"
        >
          🌍 Karaganda, Kazakhstan
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Go to my Github"
          className="btn btn-dark rounded-5 d-inline-flex gap-2 align-items-center"
          href="https://github.com/DreamerView"
        >
          <i className="bi bi-github"></i>Github
        </a>
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
            />
          </div>

          <h4 className="m-0 mt-4">
            Temirkhan Rustemov
            <i className="ms-2 text-primary bi bi-patch-check-fill"></i>
          </h4>

          <p
            className="m-0 mt-4 text-center text-secondary"
            style={{ maxWidth: '400px', width: '100%' }}
          >
            👨🏻‍💻 Full-Stack Developer. Passionate about clean code and building useful products.
          </p>
        </div>

        <div className="d-flex justify-content-md-center w-100 gap-3 overflow-x-auto position-sticky top-0 bg-body my-4 py-3">
          {NavLinks.map((link, key) => (
            <Link
              key={key}
              href={link.href}
              className={`btn ${
                currentPath === link.href ? 'btn-dark' : 'btn-outline-dark'
              } border text-nowrap rounded-4 nav-btn`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
