'use client';

import { useSmartImage } from './hooks/useSmartImage';
import translate from '@/translate/ui.json';

export default function AppItem({ html, locale, openFullImage, getRichTextByLocale,getRichText }) {
    const imageUrl = html?.properties?.files?.files?.[0]?.file?.url;
    const status = useSmartImage(imageUrl);

    // ⬇ skeleton (локальный)
    const skeletonStyle = {
        width: "100%", 
        height: "100%",
        borderRadius: "16px",
        background: "linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%)",
        backgroundSize: "200% 100%",
        animation: "skeletonLoading 1.3s linear infinite"
    };

    return (
        <>
            {/* ⬇ Встраиваем keyframes локально */}
            <style jsx>{`
                @keyframes skeletonLoading {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>

            <div className="col-lg-4 col-md-6 col-12 px-sm-3 px-1">

                <div
                    className="w-100 h-auto bg-body border rounded-4 d-flex justify-content-center align-items-center"
                    style={{ aspectRatio: '17/9', overflow: 'hidden' }}
                >
                    {status === "loading" && (
                        <div style={skeletonStyle}></div>
                    )}

                    {status === "error" && (
                        <p className="text-danger m-0">Image failed to load</p>
                    )}

                    {status === "success" && (
                        <img
                            className="w-100 h-100 rounded-4"
                            src={imageUrl}
                            alt={getRichTextByLocale(html.properties, "title", locale)}
                            style={{ objectFit: 'cover', cursor: 'zoom-in' }}
                            onClick={() =>
                                openFullImage(
                                    imageUrl,
                                    getRichTextByLocale(html.properties, "title", locale)
                                )
                            }
                        />
                    )}
                </div>

                <h6 className="m-0 my-3 lh-base">
                    {getRichTextByLocale(html.properties, "title", locale)}
                </h6>

                {html?.properties && (
                    <p className="m-0 mt-2 text-secondary mb-3" style={{ fontSize: '0.9rem' }}>
                        {getRichTextByLocale(html.properties, "desc", locale)}
                    </p>
                )}

                <div className="d-flex flex-wrap gap-2 justify-content-between my-3">
                    {/* Остальная часть карточки */}
                    {html?.created_time && (
                        <p className="m-0 text-muted" style={{ fontSize: '0.8rem' }}>
                            <i className="bi bi-clock-history"></i>{" "}
                            {new Date(html.created_time).toLocaleString()}
                        </p>
                    )}
                    {html?.last_edited_time && (
                        <p className="m-0 text-muted" style={{ fontSize: '0.8rem' }}>
                            <i className="bi bi-pencil"></i>{" "}
                            {new Date(html.last_edited_time).toLocaleString()}
                        </p>
                    )}
                </div>

                <div className="d-inline-flex">

                    {getRichText(html.properties.url) && (
                        <a href={getRichText(html.properties.url)} target="_blank" rel="noopener noreferrer"
                        className="btn btn-dark rounded-5 me-2 px-3 py-1 d-flex align-items-center gap-2" style={{ fontSize: '0.9rem' }}>
                            <i className="bi bi-globe"></i> {translate['view-btn'][locale]}
                        </a>
                    )}

                    {getRichText(html.properties.repo) && (
                        <a href={getRichText(html.properties.repo)} target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline-dark rounded-5 px-3 py-1 d-flex align-items-center gap-2" style={{ fontSize: '0.9rem' }}>
                            <i className="bi bi-github"></i> Github
                        </a>
                    )}
                </div>

            </div>
        </>
    );
}
