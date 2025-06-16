const HomePage = () => {
  return(
    <div className="container">
  <div className="w-100 component" id="my-info">
    <div className="row gap-4 gap-md-0">
      <div className="col-lg-4 col-md-6 col-12">
        <div className="bg-body-tertiary border rounded-5 p-4 text-white" data-bs-theme="dark">
          <h4 className="m-0 pb-3 mb-3 border-bottom">
            {"👋🏻 Hi, I'm"} <b>Temirkhan</b>
          </h4>
          <p className="m-0 mb-2">👨🏻‍💻 Full-Stack Developer / Software Engineer</p>
          <p className="m-0 mb-3 pb-3 border-bottom">🌍 Based in Kazakhstan 🇰🇿</p>
          <div className="bg-body-secondary border rounded-4 p-3">
            <p style={{ fontSize: '0.9rem' }}>
              {"I'm"} <b>Temirkhan</b>, a developer focused on building fast, lightweight, and
              user-friendly web tools.
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              I care deeply about clean code, performance, and minimalism.
            </p>
            <p className="m-0" style={{ fontSize: '0.9rem' }}>
              My goal is to create things that actually solve problems.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-8 col-md-6 col-12">
        <div className="bg-body-tertiary border rounded-5 p-4 text-white" data-bs-theme="dark">
          <div className="row gap-5 gap-md-0">
            <div className="col-md-4">
              <h4 className="m-0 mb-4 pb-3 border-bottom">🌐 Frontend</h4>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                🟨 JavaScript / ES6+
              </p>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                🎨 HTML5 / CSS3 / Bootstrap
              </p>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                🚀 React.js
              </p>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                ⚡ Next.js
              </p>
              <p className="m-0" style={{ fontSize: '0.9rem' }}>
                🖥️ Electron.js
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="m-0 mb-4 pb-3 border-bottom">🧠 Backend</h4>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                🌿 Node.js + Express
              </p>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                🐘 PHP
              </p>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                🐬 MySQL
              </p>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                📡 WebSockets / Socket.IO
              </p>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                🤖 Telegram Bot API
              </p>
              <p className="m-0" style={{ fontSize: '0.9rem' }}>
                🐍 Python
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="m-0 mb-4 pb-3 border-bottom">⚙️ Dev Tools & Other</h4>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                🐧 Linux
              </p>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                🌐 Apache2 / Nginx
              </p>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                ⏰ Cron Jobs
              </p>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                📦 Service Workers / Caching
              </p>
              <p className="m-0 mb-3" style={{ fontSize: '0.9rem' }}>
                📲 PWA
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-12 mt-md-4 mt-0">
        <div className="bg-body-tertiary border rounded-5 p-4 text-white" data-bs-theme="dark">
          <h4 className="m-0 pb-3 mb-3 border-bottom">🎯 Values & Mindset</h4>
          <p className="m-0 mb-2">
            🧘‍♂️ <b>Minimalism</b> — less code, more function
          </p>
          <p className="m-0 mb-2">
            ⚡ <b>Performance</b> — apps should be lightning fast
          </p>
          <p className="m-0 mb-2">
            🧠 <b>Purpose-built</b> — solving actual user problems
          </p>
          <p className="m-0 mb-2">
            🧼 <b>Clean Code</b> — code that reads like a story
          </p>
        </div>
      </div>

      <div className="col-lg col-md-6 col-12 mt-md-4 mt-0">
        <div className="bg-body-tertiary border rounded-5 p-4 text-white" data-bs-theme="dark">
          <h4 className="m-0 pb-3 mb-3 border-bottom">🔢 Quick Stats</h4>
          <p className="m-0 mb-2">
            ✅ <b>15+ completed</b> projects.
          </p>
          <p className="m-0 mb-2">
            💻 <b>5 tools</b> used in real teams.
          </p>
          <p className="m-0">
            🚀 <b>5 years</b> of consistent full-stack development.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-12 mt-md-4 mt-0">
        <div className="bg-body-tertiary border rounded-5 p-4 text-white" data-bs-theme="dark">
          <h4 className="m-0 pb-3 mb-3 border-bottom">📫 Reach Me</h4>
          <p className="m-0 mb-2">
            📸 Instagram:{' '}
            <a href="https://instagram.com/temirkhanrustemov">
              @temirkhanrustemov
            </a>
          </p>
          <p className="m-0 mb-2">
            📧 Email:{' '}
            <a href="mailto:temirkhan.onyx@gmail.com">temirkhan.onyx@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="w-100 component d-none" id="my-apps">
    <div className="row mx-auto" id="render-my-apps"></div>
  </div>

  <div className="w-100 component d-none" id="my-solutions">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Library/Class</th>
          <th scope="col">Source</th>
        </tr>
      </thead>
      <tbody id="render-my-solutions"></tbody>
    </table>
  </div>

  <div className="w-100 component d-none" id="my-products">
    <div className="row mx-auto" id="render-my-products"></div>
  </div>

  <div className="w-100 component d-none" id="my-works">
    <div className="row mx-auto" id="render-my-works"></div>
  </div>
  </div>

  )
};

export default HomePage;