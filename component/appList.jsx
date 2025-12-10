'use client'; // 👈 обязательно

import Image from 'next/image';
import AppItem from './appItem';

const AppList = ({list,locale}) => {
    const openFullImage = (src,title) => {
        if (typeof window === 'undefined') return;

        const loading = document.getElementById('modalImageLoading');
        const render = document.getElementById('modalImage');
        const modalEl = document.getElementById('imageModal');
        const titleEl = document.getElementById('modalImageTitle');

        if (render && titleEl && loading && modalEl && window.bootstrap?.Modal) {
            titleEl.textContent = title;
            loading.style.display = 'flex';
            render.style.display = 'none';

            // Показываем модалку сразу
            const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
            modal.show();

            // Предзагрузка
            const temp = new window.Image();
            temp.src = src;

            temp.onload = () => {
                loading.style.display = 'none';
                render.style.display = 'block';
            };

            render.src = src;
        }
    };

    function getRichTextByLocale(properties, keyPrefix, locale) {
        const prop = properties?.[`${keyPrefix}_${locale}`];
        return prop?.rich_text?.map(t => t.plain_text).join("") || "";
    }
    function getRichText(prop) { 
        return prop?.rich_text?.map(t => t.plain_text).join("") || ""; 
    }

    const sortedList = [...list].sort((a, b) => {
        const t1 = new Date(a.created_time).getTime();
        const t2 = new Date(b.created_time).getTime();
        return t2 - t1; // 🔥 новые → старые
    });



    return (
        <>
            <div className="container-xl">
                <div className="row mx-auto g-4">
                    {sortedList.map(html => (
                        <AppItem
                            key={html.id}
                            html={html}
                            locale={locale}
                            openFullImage={openFullImage}
                            getRichTextByLocale={getRichTextByLocale}
                            getRichText={getRichText}
                        />
                    ))}
                </div>
            </div>

            {/* Bootstrap Modal */}
            <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-body-secondary border-0">
                        <div className="modal-header border-0">
                            <h6 className='m-0' id="modalImageTitle">Image</h6>
                            <button
                                type="button"
                                className="btn-close ms-auto"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body p-0">
                            <div
                                id="modalImageLoading"
                                className="w-100 justify-content-center align-items-center"
                                style={{ minHeight: '400px' }}
                            >
                                <div
                                    className="spinner-border"
                                    style={{ width: '3rem', height: '3rem' }}
                                    role="status"
                                >
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>

                            <img
                                id="modalImage"
                                className="w-100 rounded-bottom"
                                style={{ display: 'none' }}
                                alt="Preview"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AppList;