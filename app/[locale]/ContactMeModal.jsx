'use client';
import IconEmail from "@/component/icons/IconEmail";
import IconGithub from "@/component/icons/IconGithub";
import IconInstagram from "@/component/icons/IconInstagram";
import IconLinkedin from "@/component/icons/IconLinkedin";
import IconTelegram from "@/component/icons/IconTelegram";

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
                            <a target="_blank" href={`https://github.com/DreamerView`} className={`btn btn-light rounded-4 d-flex align-items-center gap-2 justify-content-center fw-bold`}>
                                <IconGithub width={16} height={16} />
                                Github
                            </a>
                            <a target="_blank" href={`https://t.me/temirkhanrustemov`} className={`btn btn-light rounded-4 d-flex align-items-center gap-2 justify-content-center fw-bold`}>
                                <IconTelegram width={16} height={16} />
                                Telegram
                            </a>
                            <a target="_blank" href={`https://www.linkedin.com/in/temirkhanrustemov/`} className={`btn btn-light rounded-4 d-flex align-items-center gap-2 justify-content-center fw-bold`}>
                                <IconLinkedin width={16} height={16} />
                                LinkedIn
                            </a>
                            <a target="_blank" href={`https://www.instagram.com/temirkhanrustemov/`} className={`btn btn-light rounded-4 d-flex gap-2 align-items-center justify-content-center fw-bold`}>
                                <IconInstagram width={16} height={16} />
                                Instagram
                            </a>
                            <a target="_blank" href={`mailto:temirkhan.onyx@gmail.com`} className={`btn btn-light rounded-4 d-flex align-items-center gap-2 justify-content-center fw-bold`}>
                                <IconEmail width={16} height={16} />
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
