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
      en: "🐍  Py-to-Web — Minimal framework",
      ru: "🐍  Py-to-Web — мини-фреймворк",
      kk: "🐍  Py-to-Web — шағын фреймворк"
    },
    desc: {
      en: "Py-to-Web is a minimal Python-based framework that lets you build web pages using plain Python functions instead of HTML.",
      ru: "Py-to-Web — это минималистичный фреймворк на Python, позволяющий создавать веб-страницы с помощью обычных Python-функций вместо HTML.",
      kk: "Py-to-Web — HTML-дің орнына қарапайым Python функцияларын қолданып, веб-парақтарды жасауға мүмкіндік беретін Python негізіндегі шағын фреймворк."
    },
    repo: "https://github.com/DreamerView/py-to-web",
    image: pyToWebImg
  },
  {
    title: {
      en: "🎧 React Audio Player",
      ru: "🎧 Аудиоплеер на React",
      kk: "🎧 React аудио плеері"
    },
    desc: {
      en: "React Audio Player is a clean and modern audio player built with React and Bootstrap. It supports playlists, playback controls, volume, speed adjustment, and more.",
      ru: "React Audio Player — это современный и стильный аудиоплеер на React с поддержкой плейлистов, управления воспроизведением, громкости, скорости и других функций.",
      kk: "React Audio Player — бұл React пен Bootstrap негізінде жасалған заманауи аудиоплеер. Плейлисттер, ойнату басқаруы, дыбыс және жылдамдық реттеуі бар."
    },
    demo: "https://react-audio-player-pi.vercel.app/",
    repo: "https://github.com/DreamerView/react-audio-player",
    image: reactAudioPlayerImg
  }


];

export default list;