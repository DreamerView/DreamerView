'use client';

import Link from 'next/link';

export default function LanguageSwitcherModal({ currentLocale, pathname,title }) {
    const locales = ['kk', 'ru', 'en'];

    // Удалим текущую локаль из pathname
    const cleanPath = pathname.replace(/^\/(en|ru|kk)/, '') || '/';

    return (
        <>
            {/* Bootstrap Modal */}
            <div
                className="modal fade"
                id="langModal"
                tabIndex="-1"
                aria-labelledby="langModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow rounded-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="langModalLabel">🌍 {title}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body d-flex flex-column gap-2">
                            {locales.map((locale) => (
                                <a
                                    key={locale}
                                    href={`/${locale}${cleanPath}`}
                                    className={`btn btn-${locale === currentLocale ? 'secondary opacity-50' : 'outline-secondary border-0'} rounded-4`}
                                >
                                    {locale === 'kk' && '🇰🇿 Қазақша'}
                                    {locale === 'ru' && '🇷🇺 Русский'}
                                    {locale === 'en' && '🇬🇧 English'}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
