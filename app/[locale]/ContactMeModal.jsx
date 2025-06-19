'use client';

export default function ContactMeModal({title}) {

    return (
        <>
            {/* Bootstrap Modal */}
            <div
                className="modal fade"
                id="contactMeModal"
                tabIndex="-1"
                aria-labelledby="contactMeModalLabel"
                aria-hidden="true"
                data-bs-theme="dark"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow rounded-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title text-body" id="contactMeModalLabel">{title}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body d-flex flex-column gap-3">
                            <a target="_blank" href={`https://github.com/DreamerView`} className={`btn btn-light rounded-4 d-flex gap-2 justify-content-center fw-bold`}>
                                <i className="bi bi-github"></i>
                                Github
                            </a>
                            <a target="_blank" href={`https://t.me/temirkhanrustemov`} className={`btn btn-light rounded-4 d-flex gap-2 justify-content-center fw-bold`}>
                                <i className="bi bi-telegram"></i>
                                Telegram
                            </a>
                            <a target="_blank" href={`https://www.linkedin.com/in/temirkhanrustemov/`} className={`btn btn-light rounded-4 d-flex gap-2 justify-content-center fw-bold`}>
                                <i className="bi bi-linkedin"></i>
                                LinkedIn
                            </a>
                            <a target="_blank" href={`https://www.instagram.com/temirkhanrustemov/`} className={`btn btn-light rounded-4 d-flex gap-2 justify-content-center fw-bold`}>
                                <i className="bi bi-instagram"></i>
                                Instagram
                            </a>
                            <a target="_blank" href={`mailto:temirkhan.onyx@gmail.com`} className={`btn btn-light rounded-4 d-flex gap-2 justify-content-center fw-bold`}>
                                <i className="bi bi-envelope-fill"></i>
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
