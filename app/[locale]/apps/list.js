// app/apps/list.js

import currencyImg from '@/public/images/apps/currency.webp';
import alarmImg from '@/public/images/apps/alarm.webp';
import counterImg from '@/public/images/apps/counter.webp';
import weatherImg from '@/public/images/apps/weather.webp';
import ticImg from '@/public/images/apps/tic.webp';
import imagifyImg from '@/public/images/apps/imagify.webp';
import qrImg from '@/public/images/apps/qr.webp';
import okkiImg from '@/public/images/apps/okki.webp';
import quoteImg from '@/public/images/apps/quote.webp';

const list = [
  {
    title: {
      en: '💱 Currency Converter – National Bank of Kazakhstan',
      ru: '💱 Конвертер валют – Национальный Банк Казахстана',
      kk: '💱 Валюта түрлендіргіші – Қазақстан Ұлттық Банкі',
    },
    desc: {
      en: 'Clean, responsive currency converter using HTML, ES6, Bootstrap 5.3, with rates from the National Bank of Kazakhstan (RSS).',
      ru: 'Адаптивный конвертер валют на HTML, ES6 и Bootstrap 5.3, с курсами от Национального Банка Казахстана.',
      kk: 'HTML, ES6 және Bootstrap 5.3 негізінде жасалған адаптивті валюта түрлендіргіші. Дереккөзі – ҚР Ұлттық Банкі (RSS).',
    },
    demo: 'https://dreamerview.github.io/kz-currency-converter-app',
    repo: 'https://github.com/DreamerView/kz-currency-converter-app',
    image: currencyImg
  },
  {
    title: {
      en: '⏰ Alarm Clock App',
      ru: '⏰ Приложение будильник',
      kk: '⏰ Оятқыш қолданбасы',
    },
    desc: {
      en: 'A responsive and lightweight alarm clock app built with HTML, JavaScript (ES6), and Bootstrap 5.3.',
      ru: 'Адаптивное и лёгкое приложение будильника на HTML, JavaScript (ES6) и Bootstrap 5.3.',
      kk: 'HTML, JavaScript (ES6) және Bootstrap 5.3 негізінде жасалған жеңіл оятқыш қолданбасы.',
    },
    demo: 'https://dreamerview.github.io/alarm-clock-app/',
    repo: 'https://github.com/DreamerView/alarm-clock-app',
    image: alarmImg
  },
  {
    title: {
      en: '🧮 Counter App',
      ru: '🧮 Счетчик',
      kk: '🧮 Санау қолданбасы',
    },
    desc: {
      en: 'A minimal, fast, and responsive counter application built using HTML, JavaScript (ES6), and Bootstrap 5.3.',
      ru: 'Минималистичный, быстрый и адаптивный счётчик на HTML, ES6 и Bootstrap 5.3.',
      kk: 'HTML, ES6 және Bootstrap 5.3 көмегімен жасалған қарапайым әрі жылдам санау қолданбасы.',
    },
    demo: 'https://dreamerview.github.io/counter-app/',
    repo: 'https://github.com/DreamerView/counter-app',
    image: counterImg
  },
  {
    title: {
      en: '🌤 Weather App – Geo-based Forecast with Open-Meteo API',
      ru: '🌤 Прогноз погоды – на основе геолокации (Open-Meteo API)',
      kk: '🌤 Ауа райы – Гео-негізделген болжам (Open-Meteo API)',
    },
    desc: {
      en: 'A responsive weather application that detects your geolocation and displays current weather + 7-day forecast using the Open-Meteo API.',
      ru: 'Адаптивное приложение, определяющее геолокацию и показывающее прогноз погоды на 7 дней (Open-Meteo API).',
      kk: 'Геолокацияны анықтайтын және 7 күндік ауа райы болжамын көрсететін адаптивті қолданба (Open-Meteo API).',
    },
    demo: 'https://dreamerview.github.io/weather-forecast/',
    repo: 'https://github.com/DreamerView/weather-forecast',
    image: weatherImg
  },
  {
    title: {
      en: '🎮 Tic Tac Toe – Classic Game',
      ru: '🎮 Крестики-нолики – Классическая игра',
      kk: '🎮 Нөл мен айқыш – Классикалық ойын',
    },
    desc: {
      en: 'A simple and responsive Tic Tac Toe game built with HTML, CSS, JavaScript (ES6), and Bootstrap 5.3.',
      ru: 'Простая и адаптивная игра крестики-нолики на HTML, CSS, JavaScript и Bootstrap.',
      kk: 'HTML, CSS, JavaScript (ES6) және Bootstrap 5.3 арқылы жасалған қарапайым ойын.',
    },
    demo: 'https://dreamerview.github.io/tic-tac-toe/',
    repo: 'https://github.com/DreamerView/tic-tac-toe',
    image: ticImg
  },
  {
    title: {
      en: '🖼️ Image Resizer & Converter',
      ru: '🖼️ Изменение размера и конвертация изображений',
      kk: '🖼️ Суретті өзгерту және түрлендіру',
    },
    desc: {
      en: 'Lightweight browser tool to resize & convert images client-side. No upload, no dependencies — perfect for quick edits.',
      ru: 'Лёгкий браузерный инструмент для изменения и конвертации изображений без загрузки и зависимостей.',
      kk: 'Суретті өзгерту және түрлендіруге арналған браузер құралы. Жүктеусіз және тәуелділіктерсіз.',
    },
    demo: 'https://dreamerview.github.io/imagify/',
    repo: 'https://github.com/DreamerView/imagify',
    image: imagifyImg
  },
  {
    title: {
      en: '📷 QR Code Scanner & Generator',
      ru: '📷 Сканер и генератор QR-кодов',
      kk: '📷 QR-код сканері және генераторы',
    },
    desc: {
      en: 'Lightweight QR tool to scan or generate codes instantly using HTML, Bootstrap 5.3, and ES6 — all client-side.',
      ru: 'Лёгкий инструмент для сканирования и генерации QR-кодов на HTML, Bootstrap и ES6.',
      kk: 'HTML, Bootstrap және ES6 негізінде QR-кодты сканерлеу және генерациялау құралы.',
    },
    demo: 'https://dreamerview.github.io/qr-scanner-generator/',
    repo: 'https://github.com/DreamerView/qr-scanner-generator',
    image: qrImg
  },
  {
    title: {
      en: '📲 Okki Apps',
      ru: '📲 Приложения Okki',
      kk: '📲 Okki Қосымшалар',
    },
    desc: {
      en: 'A modern web-based mini application built with Next.js and Node.js, designed to function like a standalone web store app.',
      ru: 'Мини веб-приложение на базе Next.js и Node.js, работающее как отдельный веб-магазин.',
      kk: 'Next.js және Node.js арқылы жасалған жеке веб-дүкен сияқты жұмыс істейтін шағын веб-қосымша.',
    },
    demo: 'https://okki.vercel.app',
    repo: 'https://github.com/DreamerView/okki',
    image: okkiImg
  },
  {
    title: {
      en: '🧠 Random Quote Machine',
      ru: '🧠 Генератор случайных цитат',
      kk: '🧠 Кездейсоқ дәйексөз генераторы',
    },
    desc: {
      en: 'Minimalist quote app using Bootstrap 5 & ES6+. Shows random quotes from the Quotable API in a clean, dark-themed interface.',
      ru: 'Минималистичное приложение для цитат с API Quotable и тёмной темой на Bootstrap 5.',
      kk: 'Quotable API және Bootstrap 5 негізіндегі минималистік дәйексөз қолданбасы.',
    },
    demo: 'https://dreamerview.github.io/random-quote',
    repo: 'https://github.com/DreamerView/random-quote',
    image: quoteImg
  }
];

export default list;