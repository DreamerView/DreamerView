// app/apps/list.js

import browserImg from '@/public/images/products/browser.webp';
import databaseImg from '@/public/images/products/database.webp';
import studyImg from '@/public/images/products/study.webp';
import consoleImg from '@/public/images/products/console.webp';
import pagesImg from '@/public/images/products/pages.webp';
import simpleMlImg from '@/public/images/products/simple-ml.webp';
import excelPreviewImg from '@/public/images/products/excel-preview.webp';
import keskinImg from '@/public/images/products/keskin.webp';
import pyToWebImg from '@/public/images/products/py_to_web.webp';
import reactAudioPlayerImg from '@/public/images/products/react-audio-player.webp';
import notesAppProImg from '@/public/images/products/notes-app-pro.webp';
import promptyPreviewImg from "@/public/images/products/prompty.webp"

const list = [
  {
    title: {
      en: "🌐 Okki Browser",
      ru: "🌐 Okki Браузер",
      kk: "🌐 Okki Браузер",
    },
    desc: {
      en: "It’s designed to be minimal, fast, and clean — giving you a desktop web experience with full control over the UI and behavior.",
      ru: "Минималистичный, быстрый и чистый браузер с полным контролем над интерфейсом и поведением.",
      kk: "Минималистік, жылдам және таза браузер — интерфейс пен әрекетті толық басқаруға мүмкіндік береді.",
    },
    repo: "https://github.com/DreamerView/okki-browser",
    image: browserImg,
  },
  {
    title: {
      en: "🗄 Okki Database",
      ru: "🗄 Okki База Данных",
      kk: "🗄 Okki Деректер Қоры",
    },
    desc: {
      en: "Okki Database is a standalone desktop application designed for viewing SQL databases with a clean and intuitive interface.",
      ru: "Приложение для просмотра SQL-баз данных с чистым и понятным интерфейсом.",
      kk: "SQL деректер қорын көруге арналған таза және интуитивті интерфейсті жұмыс үстелі қосымшасы.",
    },
    repo: "https://github.com/DreamerView/okki-database",
    image: databaseImg,
  },
  {
    title: {
      en: "🗄 Okki Study",
      ru: "🗄 Okki Обучение",
      kk: "🗄 Okki Білім Платформасы",
    },
    desc: {
      en: "Okki Study is a lightweight education platform for creating and managing online courses, groups, and students.",
      ru: "Образовательная платформа для создания и управления курсами, группами и студентами.",
      kk: "Онлайн курстарды, топтарды және студенттерді басқаруға арналған білім беру платформасы.",
    },
    repo: "https://github.com/DreamerView/okki-study",
    demo: "https://academy.zarubilim.kz/",
    image: studyImg,
  },
  {
    title: {
      en: "🖥️ Okki Console Panel",
      ru: "🖥️ Okki Консоль Панель",
      kk: "🖥️ Okki Консоль Панелі",
    },
    desc: {
      en: "Lightweight local web file explorer with system info, extensions, and code preview — all in one clean dashboard.",
      ru: "Локальный веб-проводник с информацией о системе, расширениями и предпросмотром кода в одном интерфейсе.",
      kk: "Жергілікті веб-файл шолғышы: жүйе ақпараты, кеңейтімдер және код алдын ала қарау бір интерфейсте.",
    },
    repo: "https://github.com/DreamerView/okki-console-panel",
    image: consoleImg,
  },
  {
    title: {
      en: "📃 Okki Pages",
      ru: "📃 Okki Страницы",
      kk: "📃 Okki Беттер",
    },
    desc: {
      en: "Okki Pages is a flexible online platform to create, customize, and publish notes or articles directly in the browser.",
      ru: "Гибкая платформа для создания и публикации заметок и статей прямо в браузере.",
      kk: "Шолғыш арқылы жазбалар мен мақалаларды жасауға және жариялауға арналған икемді онлайн-платформа.",
    },
    demo: "https://folio.kz",
    repo: "https://github.com/DreamerView/okki-pages",
    image: pagesImg,
  },
  {
    title: {
      en: "💻 SimpleML",
      ru: "💻 SimpleML — язык miniML",
      kk: "💻 SimpleML — miniML тілі",
    },
    desc: {
      en: "A simple web app for miniML – a custom Russian DSL for interactive markup input with instant HTML preview.",
      ru: "Простой веб-интерфейс для языка miniML — кастомный DSL для разметки с мгновенным HTML-просмотром.",
      kk: "miniML тіліне арналған қарапайым веб-қосымша — HTML алдын ала қарау мүмкіндігімен интерактивті енгізу үшін.",
    },
    demo: "https://dreamerview.github.io/simple-ml/",
    repo: "https://github.com/DreamerView/simple-ml",
    image: simpleMlImg,
  },
  {
    title: {
      en: "📊 Excel Preview",
      ru: "📊 Excel Просмотрщик",
      kk: "📊 Excel Қарау Құралы",
    },
    desc: {
      en: "Excel Preview is a lightweight web app to view .xlsx files in a spreadsheet-like table directly in the browser.",
      ru: "Легкое веб-приложение для просмотра .xlsx файлов в виде таблицы прямо в браузере.",
      kk: ".xlsx файлдарын тікелей браузерде кесте ретінде көруге арналған жеңіл веб-қосымша.",
    },
    repo: "https://github.com/DreamerView/excel-preview",
    image: excelPreviewImg,
  },
  {
    title: {
      en: "🖼  Keskin — Smart Image Editor",
      ru: "🖼  Keskin — Умный Редактор Изображений",
      kk: "🖼  Keskin — Ақылды Сурет Өңдегіш",
    },
    desc: {
      en: "Keskin — a minimal, fast, offline-ready browser image editor. No install or signup. Instant edits for devs & designers.",
      ru: "Keskin — минималистичный, быстрый редактор изображений в браузере. Не требует установки или регистрации.",
      kk: "Keskin — орнатусыз, тіркеусіз жұмыс істейтін жылдам және жеңіл сурет редакторы.",
    },
    demo: "https://keskin.vercel.app",
    repo: "https://github.com/DreamerView/keskin",
    image: keskinImg,
  },
  {
    title: {
      en: "🐍 Py-to-Web — Minimal Framework",
      ru: "🐍 Py-to-Web — Мини-фреймворк",
      kk: "🐍 Py-to-Web — Шағын Фреймворк"
    },
    desc: {
      en: "Minimal Python framework to build web pages using Python functions instead of HTML. Great for fast prototyping.",
      ru: "Минималистичный Python-фреймворк для создания веб-страниц без HTML. Идеален для быстрых прототипов.",
      kk: "HTML орнына Python функцияларын қолданатын шағын веб-фреймворк. Жылдам прототип жасауға ыңғайлы."
    },
    repo: "https://github.com/DreamerView/py-to-web",
    image: pyToWebImg
  },
  {
    title: {
      en: "📒 Notes App Pro",
      ru: "📒 Приложение Заметки Pro",
      kk: "📒 Ескертпелер Қосымшасы Pro"
    },
    desc: {
      en: "A minimal Vue 3 app for creating and managing notes using localStorage. Works offline. Built with Vite.",
      ru: "Минималистичное Vue 3 приложение для создания и хранения заметок в браузере. Работает офлайн.",
      kk: "Жазбалармен жұмыс істеуге арналған шағын Vue 3 қосымшасы. localStorage қолданады, офлайн жұмыс істейді."
    },
    demo: "https://notes-app-pro-three.vercel.app/",
    repo: "https://github.com/DreamerView/notes-app-pro",
    image: notesAppProImg
  },
  {
    title: {
      en: "🎧 React Audio Player",
      ru: "🎧 Аудиоплеер на React",
      kk: "🎧 React аудио ойнатқышы"
    },
    desc: {
      en: "A modern React audio player with playlist, volume, speed control, shuffle and repeat. Built with Bootstrap 5.3.",
      ru: "Современный аудиоплеер на React с плейлистом, громкостью, скоростью, повтором и перемешиванием. Bootstrap 5.3.",
      kk: "React негізіндегі аудио ойнатқыш. Плейлист, дыбыс, жылдамдық, қайталау және араластыру бар. Bootstrap 5.3."
    },
    demo: "https://react-audio-player-pi.vercel.app/",
    repo: "https://github.com/DreamerView/react-audio-player",
    image: reactAudioPlayerImg
  },
  {
    title: {
      en: "🧠 Prompty — AI Prompt Explorer",
      ru: "🧠 Prompty — исследователь AI-промптов",
      kk: "🧠 Prompty — AI промпт шолушы"
    },
    desc: {
      en: "Visual gallery of prompts for AI image generation. Filters, tags and beautiful layout — no login required.",
      ru: "Визуальная галерея промптов для генерации AI-изображений. Фильтры, теги и красивая подача — без регистрации.",
      kk: "AI кескін жасауға арналған промпттар галереясы. Фильтрлер, тегтер және әдемі интерфейс — тіркеусіз."
    },
    demo: "https://prompty-kappa.vercel.app/",
    repo: "https://github.com/DreamerView/prompty", // если есть, иначе убери
    image: promptyPreviewImg // заменишь на свою переменную или путь
  }

];

export default list;