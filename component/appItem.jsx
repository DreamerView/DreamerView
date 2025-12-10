"use client";

import { useSmartImage } from "./hooks/useSmartImage";
import translate from "@/translate/ui.json";

export default function AppItem({
    html,
    locale,
    openFullImage,
    getRichTextByLocale,
    getRichText
}) {
    const imageUrl = html?.properties?.files?.files?.[0]?.file?.url;
    const status = useSmartImage(imageUrl);

    // skeleton animation
    const skeletonStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        background: "linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%)",
        backgroundSize: "200% 100%",
        animation: "skeletonLoading 1.3s linear infinite"
    };

    const title = getRichTextByLocale(html.properties, "title", locale);
    const desc = getRichTextByLocale(html.properties, "desc", locale) || "";

    return (
        <>
            <style jsx>{`
                @keyframes skeletonLoading {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>

            <div className="col-lg-4 col-md-6 col-12 mb-4">
                
                {/* IMAGE WRAPPER — DOM structure always stable */}
                <div
                    className="w-100 h-auto bg-body border rounded-4 d-flex justify-content-center align-items-center"
                    style={{ aspectRatio: "17/9", overflow: "hidden" }}
                >
                    {{
                        loading: (
                            <div key="loading" style={skeletonStyle}></div>
                        ),
                        error: (
                            <p key="error" className="text-danger m-0">
                                Image failed to load
                            </p>
                        ),
                        success: (
                            <img
                                key="success"
                                className="w-100 h-100 rounded-4"
                                src={imageUrl}
                                alt={title || "Image"}
                                style={{ objectFit: "cover", cursor: "zoom-in" }}
                                onClick={() => openFullImage(imageUrl, title)}
                            />
                        )
                    }[status]}

                </div>

                {/* TITLE */}
                <h6 className="m-0 my-3 lh-base">{title}</h6>

                {/* DESCRIPTION — always rendered, safe for React19 */}
                <p
                    className="m-0 mt-2 text-secondary mb-3"
                    style={{ fontSize: "0.9rem", minHeight: "1.2em" }}
                >
                    {desc}
                </p>

                {/* INFO ROW */}
                <div className="d-flex flex-wrap gap-2 justify-content-between my-3">
                    {html?.created_time && (
                        <p className="m-0 text-muted" style={{ fontSize: "0.8rem" }}>
                            <i className="bi bi-clock-history"></i>{" "}
                            {new Date(html.created_time).toLocaleString()}
                        </p>
                    )}

                    {html?.last_edited_time && (
                        <p className="m-0 text-muted" style={{ fontSize: "0.8rem" }}>
                            <i className="bi bi-pencil"></i>{" "}
                            {new Date(html.last_edited_time).toLocaleString()}
                        </p>
                    )}
                </div>

                {/* BUTTONS */}
                <div className="d-inline-flex">
                    {getRichText(html.properties.url) && (
                        <a
                            href={getRichText(html.properties.url)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-dark rounded-5 me-2 px-3 py-1 d-flex align-items-center gap-2"
                            style={{ fontSize: "0.9rem" }}
                        >
                            <i className="bi bi-globe"></i> {translate["view-btn"][locale]}
                        </a>
                    )}

                    {getRichText(html.properties.repo) && (
                        <a
                            href={getRichText(html.properties.repo)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-dark rounded-5 px-3 py-1 d-flex align-items-center gap-2"
                            style={{ fontSize: "0.9rem" }}
                        >
                            <i className="bi bi-github"></i> Github
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}
