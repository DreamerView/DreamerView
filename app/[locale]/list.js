// i18n.js
const translations = {
  en: {
    greeting: "👋🏻 Hi, I'm",
    role: "👨🏻‍💻 Full-Stack Developer / Software Engineer",
    location: "🌍 Based in Kazakhstan 🇰🇿",
    bio1: "A developer focused on building fast, lightweight, and user-friendly web tools.",
    bio2: "I care deeply about clean code, performance, and minimalism.",
    bio3: "My goal is to create things that actually solve problems.",

    frontend: "🌐 Frontend",
    backend: "🧠 Backend",
    devtools: "⚙️ Dev Tools & Other",

    values: "🎯 Values & Mindset",
    value1: "🧘‍♂️ Minimalism — less code, more function",
    value2: "⚡ Performance — apps should be lightning fast",
    value3: "🧠 Purpose-built — solving actual user problems",
    value4: "🧼 Clean Code — code that reads like a story",

    stats: "🔢 Quick Stats",
    stat1: "✅ 15+ completed projects.",
    stat2: "💻 5 tools used in real teams.",
    stat3: "🚀 5 years of consistent full-stack development.",

    contact: "📫 Reach Me",
    instagram: "📸 Instagram: ",
    email: "📧 Email: ",

    tech: {
      js: "🟨 JavaScript / ES6+",
      htmlcss: "🎨 HTML5 / CSS3 / Bootstrap",
      react: "🚀 React.js",
      next: "⚡ Next.js",
      electron: "🖥️ Electron.js",
      node: "🌿 Node.js + Express",
      php: "🐘 PHP",
      mysql: "🐬 MySQL",
      socket: "📡 WebSockets / Socket.IO",
      telegram: "🤖 Telegram Bot API",
      python: "🐍 Python",
      linux: "🐧 Linux",
      apache: "🌐 Apache2 / Nginx",
      cron: "⏰ Cron Jobs",
      sw: "📦 Service Workers / Caching",
      pwa: "📲 PWA"
    }
  },
  ru: {
    greeting: "👋🏻 Привет, я",
    role: "👨🏻‍💻 Full-Stack разработчик / Инженер-программист",
    location: "🌍 Казахстан 🇰🇿",
    bio1: "Разработчик, создающий быстрые, лёгкие и удобные веб-инструменты.",
    bio2: "Мне важны чистый код, производительность и минимализм.",
    bio3: "Моя цель — создавать решения реальных проблем.",

    frontend: "🌐 Фронтенд",
    backend: "🧠 Бэкенд",
    devtools: "⚙️ Инструменты и другое",

    values: "🎯 Ценности и мышление",
    value1: "🧘‍♂️ Минимализм — меньше кода, больше пользы",
    value2: "⚡ Производительность — приложения должны быть быстрыми",
    value3: "🧠 Целесообразность — решение реальных проблем пользователей",
    value4: "🧼 Чистый код — как читаемая история",

    stats: "🔢 Быстрые факты",
    stat1: "✅ 15+ завершённых проектов.",
    stat2: "💻 5 инструментов используются в командах.",
    stat3: "🚀 5 лет постоянной разработки full-stack.",

    contact: "📫 Контакты",
    instagram: "📸 Instagram: ",
    email: "📧 Email: ",

    tech: {
      js: "🟨 JavaScript / ES6+",
      htmlcss: "🎨 HTML5 / CSS3 / Bootstrap",
      react: "🚀 React.js",
      next: "⚡ Next.js",
      electron: "🖥️ Electron.js",
      node: "🌿 Node.js + Express",
      php: "🐘 PHP",
      mysql: "🐬 MySQL",
      socket: "📡 WebSockets / Socket.IO",
      telegram: "🤖 Telegram Bot API",
      python: "🐍 Python",
      linux: "🐧 Linux",
      apache: "🌐 Apache2 / Nginx",
      cron: "⏰ Cron Jobs",
      sw: "📦 Service Workers / Кэширование",
      pwa: "📲 PWA"
    }
  },
  kk: {
    greeting: "👋🏻 Сәлем, мен",
    role: "👨🏻‍💻 Full-Stack әзірлеуші / Бағдарламашы-инженер",
    location: "🌍 Қазақстан 🇰🇿",
    bio1: "Жылдам, жеңіл және ыңғайлы веб-құралдарды жасайтын әзірлеуші.",
    bio2: "Таза код, өнімділік және минимализм маған маңызды.",
    bio3: "Мақсатым — нақты мәселелерді шешетін құралдар жасау.",

    frontend: "🌐 Фронтенд",
    backend: "🧠 Бэкенд",
    devtools: "⚙️ Құралдар және басқалар",

    values: "🎯 Құндылықтар мен ойлау",
    value1: "🧘‍♂️ Минимализм — аз код, көп функция",
    value2: "⚡ Өнімділік — қолданбалар жылдам болуы керек",
    value3: "🧠 Мақсатты — нақты пайдаланушы мәселелерін шешу",
    value4: "🧼 Таза код — оқылатын әңгіме секілді",

    stats: "🔢 Қысқаша фактілер",
    stat1: "✅ 15+ аяқталған жоба.",
    stat2: "💻 5 құрал командада қолданылған.",
    stat3: "🚀 5 жыл тұрақты full-stack әзірлеу тәжірибесі.",

    contact: "📫 Байланыс",
    instagram: "📸 Instagram: ",
    email: "📧 Email: ",

    tech: {
      js: "🟨 JavaScript / ES6+",
      htmlcss: "🎨 HTML5 / CSS3 / Bootstrap",
      react: "🚀 React.js",
      next: "⚡ Next.js",
      electron: "🖥️ Electron.js",
      node: "🌿 Node.js + Express",
      php: "🐘 PHP",
      mysql: "🐬 MySQL",
      socket: "📡 WebSockets / Socket.IO",
      telegram: "🤖 Telegram Bot API",
      python: "🐍 Python",
      linux: "🐧 Linux",
      apache: "🌐 Apache2 / Nginx",
      cron: "⏰ Cron Jobs",
      sw: "📦 Service Workers / Кэштеу",
      pwa: "📲 PWA"
    }
  }
};

export default translations;
