'use client'; // 👈 обязательно

import Image from 'next/image';

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


    return (
        <>
            <div className="container">
                <div className="row mx-auto">
                    {list.map((html, key) => (
                        <div key={key} className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                            <div className="w-100 h-auto bg-body border rounded-4" style={{ aspectRatio: '17/9' }}>
                                <Image
                                    className="w-100 h-auto border rounded-4"
                                    src={html.image}
                                    alt={html.title}
                                    placeholder="blur"
                                    loading="lazy"
                                    width={800}
                                    height={400}
                                    style={{ objectFit: 'cover', aspectRatio: '17/9', cursor: 'zoom-in' }}
                                    onClick={() => openFullImage(html.image.src,html.title[locale])} // ✅ правильно
                                />
                            </div>

                            <h6 className="m-0 my-3">{html.title[locale]}</h6>
                            {html.desc && (
                                <p className="m-0 mt-2 text-secondary mb-3" style={{ fontSize: '0.9rem' }}>
                                    {html.desc[locale]}
                                </p>
                            )}
                            {html.demo && (
                                <a href={html.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-5 me-2 px-3 py-1" style={{ fontSize: '0.8rem' }}>
                                    View
                                </a>
                            )}
                            {html.repo && (
                                <a href={html.repo} target="_blank" rel="noopener noreferrer" className="btn btn-dark rounded-5 px-3 py-1" style={{ fontSize: '0.8rem' }}>
                                    Github
                                </a>
                            )}
                        </div>
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