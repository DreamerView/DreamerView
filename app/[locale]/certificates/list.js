// app/apps/list.js

import responsiveWebDesignImg from '@/public/images/certificates/responsive-web-design.webp';
import jsImg from '@/public/images/certificates/javascript.webp';
import legacyJsImg from '@/public/images/certificates/legacy-javascript.webp';
import seoImg from '@/public/images/certificates/seo.webp';
import contentMarketingBasicsImg from '@/public/images/certificates/content-marketing-basics.webp';
import frontendDevLibImg from '@/public/images/certificates/frontend-development-libraries.webp';
import metaIntroductionFrontendImg from '@/public/images/certificates/meta-introduction-frontend.webp';
import metaProgWithJsImg from '@/public/images/certificates/meta-programming-with-js.webp';
import metaVersionControlImg from '@/public/images/certificates/meta-version-control.webp';
import metaHtmlCssImg from '@/public/images/certificates/meta-html-css.webp';
import metaReactBasicsImg from '@/public/images/certificates/meta-react-basics.webp';

const list = [
  {
    title: {
      en: "Introduction to Front-End Development",
      ru: "Введение в Front-End разработку",
      kk: "Front-End дамуына кіріспе"
    },
    desc: {
      en: "Meta · Issued Jun 2025",
      ru: "Meta · Выдано в июне 2025",
      kk: "Meta · 2025 жылдың маусымында берілді",
    },
    demo: "https://www.coursera.org/account/accomplishments/verify/2FYJEV6RBY2V",
    image: metaIntroductionFrontendImg
  },
  {
    title: {
      en: "Programming with JavaScript",
      ru: "Программирование на JavaScript",
      kk: "JavaScript тілінде бағдарламалау"
    },
    desc: {
      en: "Meta · Issued Jun 2025",
      ru: "Meta · Выдано в июне 2025",
      kk: "Meta · 2025 жылдың маусымында берілді",
    },
    demo: "https://www.coursera.org/account/accomplishments/verify/RL7DBPW4K4F0",
    image: metaProgWithJsImg
  },
  {
    title: {
      en: "Version Control",
      ru: "Система контроля версий",
      kk: "Нұсқаларды басқару жүйесі"
    },
    desc: {
      en: "Meta · Issued Jun 2025",
      ru: "Meta · Выдано в июне 2025",
      kk: "Meta · 2025 жылдың маусымында берілді",
    },
    demo: "https://www.coursera.org/account/accomplishments/verify/DIX1GDP9USC3",
    image: metaVersionControlImg
  },
  {
    title: {
      en: "HTML and CSS in depth",
      ru: "Углублённое изучение HTML и CSS",
      kk: "HTML мен CSS-ті тереңдетіп оқу"
    },
    desc: {
      en: "Meta · Issued Jun 2025",
      ru: "Meta · Выдано в июне 2025",
      kk: "Meta · 2025 жылдың маусымында берілді",
    },
    demo: "https://www.coursera.org/account/accomplishments/verify/4Y9LM9QHOJ0V",
    image: metaHtmlCssImg
  },
  {
    title: {
      en: "React Basics",
      ru: "Основы React",
      kk: "React негіздері"
    },
    desc: {
      en: "Meta · Issued Jun 2025",
      ru: "Meta · Выдано в июне 2025",
      kk: "Meta · 2025 жылдың маусымында берілді",
    },
    demo: "https://www.coursera.org/account/accomplishments/verify/VJKRBBFLYZ48",
    image: metaReactBasicsImg
  },
  {
    title: {
      en: "Responsive Web Design",
      ru: "Адаптивная веб-разработка",
      kk: "Адаптивті веб-дизайн",
    },
    desc: {
      en: "freeCodeCamp · Issued Jun 2025",
      ru: "freeCodeCamp · Выдано в июне 2025",
      kk: "freeCodeCamp · 2025 жылдың маусымында берілді",
    },
    demo: "https://www.freecodecamp.org/certification/fcc-a6268b36-3165-4192-97dd-57db6602e76e/responsive-web-design",
    image: responsiveWebDesignImg
  },
  {
    title: {
      en: "JavaScript Algorithms and Data Structures",
      ru: "Алгоритмы и структуры данных на JavaScript",
      kk: "JavaScript алгоритмдері мен деректер құрылымдары",
    },
    desc: {
      en: "freeCodeCamp · Issued Jun 2025",
      ru: "freeCodeCamp · Выдано в июне 2025",
      kk: "freeCodeCamp · 2025 жылдың маусымында берілді",
    },
    demo: "https://www.freecodecamp.org/certification/fcc-a6268b36-3165-4192-97dd-57db6602e76e/javascript-algorithms-and-data-structures-v8",
    image: jsImg
  },
  {
    title: {
      en: "Legacy JavaScript Algorithms and Data Structures",
      ru: "Устаревшие алгоритмы и структуры данных на JavaScript",
      kk: "Ескі JavaScript алгоритмдері мен деректер құрылымдары",
    },
    desc: {
      en: "freeCodeCamp · Issued Jun 2025",
      ru: "freeCodeCamp · Выдано в июне 2025",
      kk: "freeCodeCamp · 2025 жылдың маусымында берілді",
    },
    demo: "https://www.freecodecamp.org/certification/fcc-a6268b36-3165-4192-97dd-57db6602e76e/javascript-algorithms-and-data-structures",
    image: legacyJsImg
  },
  {
    title: {
      en: "Semrush SEO Crash Course with Brian Dean",
      ru: "Интенсивный курс по SEO от Semrush с Брайаном Дином",
      kk: "Semrush SEO экспресс-курсы (Брайан Динмен)",
    },
    desc: {
      en: "Semrush Academy · Issued Jun 2025",
      ru: "Semrush Academy · Выдано в июне 2025",
      kk: "Semrush Academy · 2025 жылдың маусымында берілді",
    },
    demo: "https://static.semrush.com/academy/certificates/ccb31cebbe/temirkhan-rustemov_2.pdf",
    image: seoImg
  },
  {
    title: {
      en: "Content Marketing Basics",
      ru: "Основы контент-маркетинга",
      kk: "Контент-маркетинг негіздері",
    },
    desc: {
      en: "GreatLearning · Issued Jun 2025",
      ru: "GreatLearning · Выдано в июне 2025",
      kk: "GreatLearning · 2025 жылдың маусымында берілді",
    },
    demo: "https://www.mygreatlearning.com/certificate/VOXXAOLY",
    image: contentMarketingBasicsImg
  },
  {
    title: {
      en: "Frontend Development Libraries",
      ru: "Библиотеки для разработки интерфейсов",
      kk: "Фронтенд дамыту кітапханалары"
    },
    desc: {
      en: "freeCodeCamp · Issued Jun 2025",
      ru: "freeCodeCamp · Выдано в июне 2025",
      kk: "freeCodeCamp · 2025 жылдың маусымында берілді",
    },
    demo: "https://www.freecodecamp.org/certification/fcc-a6268b36-3165-4192-97dd-57db6602e76e/front-end-development-libraries",
    image: frontendDevLibImg
  },
];

export default list;
