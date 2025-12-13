// app/[locale]/page.jsx
import translations from './list.js';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ru' },
    { locale: 'kk' }
  ]
}

export const revalidate = 60

// ⬇️ NEXT.JS SERVER COMPONENT
export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = translations[locale] || translations['en'];

  return (
    <div className="container-xl">
      <div className="w-100 component" id="my-info">
        <div className="row gap-4 gap-md-0">

          {/* LEFT BLOCK */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="bg-body-tertiary border rounded-5 p-4 text-white" data-bs-theme="dark">
              <h4 className="m-0 pb-3 mb-3 border-bottom">
                {t.greeting}
              </h4>
              <p className="m-0 mb-2">{t.role}</p>
              <p className="m-0 mb-3 pb-3 border-bottom">{t.location}</p>
              <div className="bg-body-secondary border rounded-4 p-3">
                <p style={{ fontSize: '0.9rem' }}>{t.bio1}</p>
                <p style={{ fontSize: '0.9rem' }}>{t.bio2}</p>
                <p className="m-0" style={{ fontSize: '0.9rem' }}>{t.bio3}</p>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="col-lg-8 col-md-6 col-12">
            <div className="bg-body-tertiary border rounded-5 p-4 text-white" data-bs-theme="dark">
              <div className="row gap-5 gap-md-0">
                <div className="col-md-4">
                  <h4 className="m-0 mb-4 pb-3 border-bottom">{t.frontend}</h4>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.js}</p>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.htmlcss}</p>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.react}</p>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.next}</p>
                  <p className="m-0" style={{ fontSize: '0.9rem' }}>{t.tech.electron}</p>
                </div>

                <div className="col-md-4">
                  <h4 className="m-0 mb-4 pb-3 border-bottom">{t.backend}</h4>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.node}</p>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.php}</p>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.mysql}</p>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.socket}</p>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.telegram}</p>
                  <p className="m-0" style={{ fontSize: '0.9rem' }}>{t.tech.python}</p>
                </div>

                <div className="col-md-4">
                  <h4 className="m-0 mb-4 pb-3 border-bottom">{t.devtools}</h4>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.linux}</p>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.apache}</p>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.cron}</p>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.sw}</p>
                  <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>{t.tech.pwa}</p>
                </div>
              </div>
            </div>
          </div>

          {/* VALUES */}
          <div className="col-lg-4 col-md-6 col-12 mt-md-4 mt-0">
            <div className="bg-body-tertiary border rounded-5 p-4 text-white" data-bs-theme="dark">
              <h4 className="m-0 pb-3 mb-3 border-bottom">{t.values}</h4>
              <p className="m-0 mb-2">{t.value1}</p>
              <p className="m-0 mb-2">{t.value2}</p>
              <p className="m-0 mb-2">{t.value3}</p>
              <p className="m-0 mb-2">{t.value4}</p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="col-lg col-md-6 col-12 mt-md-4 mt-0">
            <div className="bg-body-tertiary border rounded-5 p-4 text-white" data-bs-theme="dark">
              <h4 className="m-0 pb-3 mb-3 border-bottom">{t.stats}</h4>
              <p className="m-0 mb-2">{t.stat1}</p>
              <p className="m-0 mb-2">{t.stat2}</p>
              <p className="m-0">{t.stat3}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mt-md-4 mt-0">
            <div className="bg-body-tertiary border rounded-5 p-4 text-white" data-bs-theme="dark">
              <h4 className="m-0 pb-3 mb-3 border-bottom">{t.contact}</h4>
              <p className="m-0 mb-2">
                {t.instagram}
                <a href="https://instagram.com/temirkhanrustemov">@temirkhanrustemov</a>
              </p>
              <p className="m-0 mb-2">
                {t.email}
                <a href="mailto:temirkhan.onyx@gmail.com">temirkhan.onyx@gmail.com</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
