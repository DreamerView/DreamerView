const loadComponent = (componentId) => {
    document.querySelectorAll(".nav-btn").forEach(el => {
        const isActive = el.getAttribute("data-btn") === componentId;
        el.classList.toggle("btn-dark", isActive);
        el.classList.toggle("btn-outline-dark", !isActive);
    });
    document.querySelectorAll(".component").forEach(el => el.classList.add("d-none"));
    document.getElementById(componentId).classList.remove("d-none");
    switch (componentId) {
        case "my-apps": loadMyApps(); break;
        case "my-solutions": loadMySolutions(); break;
        case "my-products": loadMyProducts(); break;
        case "my-works": loadMyWorks(); break;
        default: ""; break;
    }
};
const loadMySolutions = () => {
    const list = [
        {
            title: "🛠️ SimpleMySQL — Lightweight MySQL Library for PHP",
            desc: "It’s designed to make SQL interaction in your PHP projects easier, cleaner, and safer — no frameworks required!",
            source: "https://github.com/DreamerView/simple-mysql"
        }
    ];
    const render = list.map(html => `<tr><td><h5>${html.title}</h5><p class="m-0 mt-3 text-secondary" style="font-size:0.9rem;">${html.desc}</p></td><td class="align-middle"><a class="btn btn-dark rounded-4" target="_blank" href="${html.source}">Github</a></td></tr>`).join();
    document.getElementById("render-my-solutions").innerHTML = render;
}
const loadMyProducts = () => {
    const list = [
        {
            title: "🌐 Okki Browser",
            desc: "It’s designed to be minimal, fast, and clean — giving you a desktop web experience with full control over the UI and behavior.",
            repo: "https://github.com/DreamerView/okki-browser",
            image: "images/products/browser.gif"
        },
        {
            title: "🗄 Okki Database",
            desc: "Okki Database is a standalone desktop application designed for viewing SQL databases with a clean and intuitive interface.",
            repo: "https://github.com/DreamerView/okki-database",
            image: "images/products/database.gif"
        },
        {
            title: "🗄 Okki Study",
            desc: "Okki Study is a lightweight education platform for creating and managing online courses, groups, and students.",
            repo: "https://github.com/DreamerView/okki-study",
            demo: "https://academy.zarubilim.kz/",
            image: "images/products/study.webp"
        },
        {
            title: "🖥️ Okki Console Panel",
            desc: "Lightweight local web file explorer with system info, extensions, and code preview — all in one clean dashboard.",
            repo: "https://github.com/DreamerView/okki-console-panel",
            image: "images/products/console.webp"
        },
        {
            title: "📃 Okki Pages",
            desc: "Okki Pages is a flexible online platform to create, customize, and publish notes or articles directly in the browser.",
            demo: "https://folio.kz",
            repo: "https://github.com/DreamerView/okki-pages",
            image: "images/products/pages.webp"
        },
        {
            title: "💻 SimpleML",
            desc: "A simple web app for miniML – a custom Russian DSL for interactive markup input with instant HTML preview.",
            demo: "https://dreamerview.github.io/simple-ml/",
            repo: "https://github.com/DreamerView/simple-ml",
            image: "images/products/simple-ml.webp"
        }
    ];
    const render = list.map(html =>
        `<div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                        <div class="w-100 h-auto bg-body border rounded-4" style="aspect-ratio: 17/9;">
                            <img class="w-100 h-auto border rounded-4" loading="lazy" style="object-fit: cover;aspect-ratio: 17/9;" src="${html.image}" alt=""/>
                        </div>
                        <h6 class="m-0 my-3">${html.title}</h6>
                        ${html.desc ? `<p class="m-o mt-2 text-secondary" style="font-size:0.9rem;">${html.desc}</p>` : ""}
                        ${html.demo ? `<a target="_blank" style="font-size: 0.8rem;" class="btn btn-primary rounded-5 p-0 px-3 py-1" href="${html.demo}">Demo</a>` : ""}
                        ${html.repo ? `<a target="_blank" style="font-size: 0.8rem;" class="btn btn-dark rounded-5 p-0 px-3 py-1" href="${html.repo}">Github</a>` : ""}
                    </div>`
    ).join("");
    document.getElementById("render-my-products").innerHTML = render;
};
const loadMyWorks = () => {
    const list = [
        {
            title: "🌐 Business Engineering KZ Website",
            desc: "Landing Page created in 2023",
            demo: "https://bekz.kz",
            image: "images/works/bekz.webp"
        },
        {
            title: "🌐 Mobilab Website",
            desc: "Landing Page created in 2024",
            demo: "https://mobilab.kz",
            image: "images/works/mobilab.webp"
        },
        {
            title: "🌐 Zaru Bilim Website",
            desc: "Landing Page created in 2022",
            demo: "https://zarubilim.kz",
            image: "images/works/zarubilim.webp"
        },
        {
            title: "🌐 Bala Alany Website",
            desc: "Landing Page created in 2025",
            demo: "https://bala-alany.kz",
            image: "images/works/bala.webp"
        },
        {
            title: "🌐 Captain Baby Website",
            desc: "Landing Page created in 2024",
            demo: "https://captain-baby.shop",
            image: "images/works/captain.webp"
        },
        {
            title: "🌐 DreamWay Website",
            desc: "Landing Page created in 2024",
            demo: "https://dream-way.kz",
            image: "images/works/dreamway.webp"
        },
        {
            title: "🌐 TechComAuto Website",
            desc: "Landing Page created in 2025",
            demo: "https://techcomauto.kz/",
            image: "images/works/techcomauto.webp"
        },
        {
            title: "🌐 GPS Tracking Website",
            desc: "Landing Page created in 2025",
            demo: "https://gpscontrol.kz/",
            image: "images/works/gps.webp"
        },
        {
            title: "🌐 KVPTK IS",
            desc: "Information System created in 2024",
            demo: "https://web.kvptk.edu.kz",
            image: "images/works/kvptk.webp"
        },
        {
            title: "💻 BEKZ CRM",
            desc: "Mini CRM system created in 2025",
            demo: "https://crm.bekz.kz",
            image: "images/works/crm-bekz.webp"
        }
    ];
    const render = list.map(html =>
        `<div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                        <div class="w-100 h-auto bg-body border rounded-4" style="aspect-ratio: 17/9;">
                            <img class="w-100 h-auto border rounded-4" loading="lazy" style="object-fit: cover;aspect-ratio: 17/9;" src="${html.image}" alt=""/>
                        </div>
                        <h6 class="m-0 my-3">${html.title}</h6>
                        ${html.desc ? `<p class="m-o mt-2 text-secondary" style="font-size:0.9rem;">${html.desc}</p>` : ""}
                        ${html.demo ? `<a target="_blank" style="font-size: 0.8rem;" class="btn btn-primary rounded-5 p-0 px-3 py-1" href="${html.demo}">Demo</a>` : ""}
                        ${html.repo ? `<a target="_blank" style="font-size: 0.8rem;" class="btn btn-dark rounded-5 p-0 px-3 py-1" href="${html.repo}">Github</a>` : ""}
                    </div>`
    ).join("");
    document.getElementById("render-my-works").innerHTML = render;
};
const loadMyApps = () => {
    const list = [{
        title: "💱 Currency Converter – National Bank of Kazakhstan",
        desc: "Clean, responsive currency converter using HTML, ES6, Bootstrap 5.3, with rates from the National Bank of Kazakhstan (RSS).",
        demo: "https://dreamerview.github.io/kz-currency-converter-app",
        repo: "https://github.com/DreamerView/kz-currency-converter-app",
        image: "images/apps/currency.webp"
    },
    {
        title: "⏰ Alarm Clock App",
        desc: "A responsive and lightweight alarm clock app built with HTML, JavaScript (ES6), and Bootstrap 5.3.",
        demo: "https://dreamerview.github.io/alarm-clock-app/",
        repo: "https://github.com/DreamerView/alarm-clock-app",
        image: "images/apps/alarm-clock-app.webp"
    },
    {
        title: "🧮 Counter App",
        desc: "A minimal, fast, and responsive counter application built using HTML, JavaScript (ES6), and Bootstrap 5.3.",
        demo: "https://dreamerview.github.io/counter-app/",
        repo: "https://github.com/DreamerView/counter-app",
        image: "images/apps/counter.webp"
    },
    {
        title: "🌤 Weather App – Geo-based Forecast with Open-Meteo API",
        desc: "A responsive weather application that detects your geolocation and displays current weather + 7-day forecast using the Open-Meteo API.",
        demo: "https://dreamerview.github.io/weather-forecast/",
        repo: "https://github.com/DreamerView/weather-forecast",
        image: "images/apps/weather.webp"
    },
    {
        title: "🎮 Tic Tac Toe – Classic Game",
        desc: "A simple and responsive Tic Tac Toe game built with HTML, CSS, JavaScript (ES6), and Bootstrap 5.3.",
        demo: "https://dreamerview.github.io/tic-tac-toe/",
        repo: "https://github.com/DreamerView/tic-tac-toe",
        image: "images/apps/tic-tac-toe.webp"
    },
    {
        title: "🖼️ Image Resizer & Converter",
        desc: "Lightweight browser tool to resize & convert images client-side. No upload, no dependencies — perfect for quick edits.",
        demo: "https://dreamerview.github.io/imagify/",
        repo: "https://github.com/DreamerView/imagify",
        image: "images/apps/imagify.webp"
    },
    {
        title: "📷 QR Code Scanner & Generator",
        desc: "Lightweight QR tool to scan or generate codes instantly using HTML, Bootstrap 5.3, and ES6 — all client-side.",
        demo: "https://dreamerview.github.io/qr-scanner-generator/",
        repo: "https://github.com/DreamerView/qr-scanner-generator",
        image: "images/apps/qr.webp"
    },
    {
        title: "📲 Okki Apps",
        desc: "A modern web-based mini application built with Next.js and Node.js, designed to function like a standalone web store app.",
        demo: "https://okki.vercel.app",
        repo: "https://github.com/DreamerView/okki",
        image: "images/apps/okki-apps.webp"
    }
    ];
    const render = list.map(html =>
        `<div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                        <div class="w-100 h-auto bg-body border rounded-4" style="aspect-ratio: 17/9;">
                            <img class="w-100 h-auto border rounded-4" loading="lazy" style="object-fit: cover;aspect-ratio: 17/9;" src="${html.image}" alt=""/>
                        </div>
                        <h6 class="m-0 my-3">${html.title}</h6>
                        ${html.desc ? `<p class="m-o mt-2 text-secondary" style="font-size:0.9rem;">${html.desc}</p>` : ""}
                        <a target="_blank" style="font-size: 0.8rem;" class="btn btn-primary rounded-5 p-0 px-3 py-1" href="${html.demo}">Demo</a>
                        <a target="_blank" style="font-size: 0.8rem;" class="btn btn-dark rounded-5 p-0 px-3 py-1" href="${html.repo}">Github</a>
                    </div>`
    ).join("");
    document.getElementById("render-my-apps").innerHTML = render;
};