// app/apps/list.js

import browserImg from '@/public/images/products/browser.webp';
import databaseImg from '@/public/images/products/database.webp';
import studyImg from '@/public/images/products/study.webp';
import consoleImg from '@/public/images/products/console.webp';
import pagesImg from '@/public/images/products/pages.webp';
import simpleMlImg from '@/public/images/products/simple-ml.webp';
import excelPreviewImg from '@/public/images/products/excel-preview.webp';
import keskinImg from '@/public/images/products/keskin.webp';

const list = [
  {
    title: "🌐 Okki Browser",
    desc: "It’s designed to be minimal, fast, and clean — giving you a desktop web experience with full control over the UI and behavior.",
    repo: "https://github.com/DreamerView/okki-browser",
    image: browserImg
  },
  {
    title: "🗄 Okki Database",
    desc: "Okki Database is a standalone desktop application designed for viewing SQL databases with a clean and intuitive interface.",
    repo: "https://github.com/DreamerView/okki-database",
    image: databaseImg
  },
  {
    title: "🗄 Okki Study",
    desc: "Okki Study is a lightweight education platform for creating and managing online courses, groups, and students.",
    repo: "https://github.com/DreamerView/okki-study",
    demo: "https://academy.zarubilim.kz/",
    image: studyImg
  },
  {
    title: "🖥️ Okki Console Panel",
    desc: "Lightweight local web file explorer with system info, extensions, and code preview — all in one clean dashboard.",
    repo: "https://github.com/DreamerView/okki-console-panel",
    image: consoleImg
  },
  {
    title: "📃 Okki Pages",
    desc: "Okki Pages is a flexible online platform to create, customize, and publish notes or articles directly in the browser.",
    demo: "https://folio.kz",
    repo: "https://github.com/DreamerView/okki-pages",
    image: pagesImg
  },
  {
      title: "💻 SimpleML",
      desc: "A simple web app for miniML – a custom Russian DSL for interactive markup input with instant HTML preview.",
      demo: "https://dreamerview.github.io/simple-ml/",
      repo: "https://github.com/DreamerView/simple-ml",
      image: simpleMlImg
  },
  {
      title: "📊 Excel Preview",
      desc: "Excel Preview is a lightweight web app to view .xlsx files in a spreadsheet-like table directly in the browser.",
      repo: "https://github.com/DreamerView/excel-preview",
      image: excelPreviewImg
  },
  {
      title: "🖼  Keskin — Smart Image Editor",
      desc: "Keskin — a minimal, fast, offline-ready browser image editor. No install or signup. Instant edits for devs & designers. ",
      demo:"https://keskin.vercel.app",
      repo: "https://github.com/DreamerView/keskin",
      image: keskinImg
  }
];

export default list;