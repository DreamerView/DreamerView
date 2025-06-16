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
    title: '💱 Currency Converter – National Bank of Kazakhstan',
    desc: 'Clean, responsive currency converter using HTML, ES6, Bootstrap 5.3, with rates from the National Bank of Kazakhstan (RSS).',
    demo: 'https://dreamerview.github.io/kz-currency-converter-app',
    repo: 'https://github.com/DreamerView/kz-currency-converter-app',
    image: currencyImg
  },
  {
    title: '⏰ Alarm Clock App',
    desc: 'A responsive and lightweight alarm clock app built with HTML, JavaScript (ES6), and Bootstrap 5.3.',
    demo: 'https://dreamerview.github.io/alarm-clock-app/',
    repo: 'https://github.com/DreamerView/alarm-clock-app',
    image: alarmImg
  },
  {
    title: '🧮 Counter App',
    desc: 'A minimal, fast, and responsive counter application built using HTML, JavaScript (ES6), and Bootstrap 5.3.',
    demo: 'https://dreamerview.github.io/counter-app/',
    repo: 'https://github.com/DreamerView/counter-app',
    image: counterImg
  },
  {
    title: '🌤 Weather App – Geo-based Forecast with Open-Meteo API',
    desc: 'A responsive weather application that detects your geolocation and displays current weather + 7-day forecast using the Open-Meteo API.',
    demo: 'https://dreamerview.github.io/weather-forecast/',
    repo: 'https://github.com/DreamerView/weather-forecast',
    image: weatherImg
  },
  {
    title: '🎮 Tic Tac Toe – Classic Game',
    desc: 'A simple and responsive Tic Tac Toe game built with HTML, CSS, JavaScript (ES6), and Bootstrap 5.3.',
    demo: 'https://dreamerview.github.io/tic-tac-toe/',
    repo: 'https://github.com/DreamerView/tic-tac-toe',
    image: ticImg
  },
  {
    title: '🖼️ Image Resizer & Converter',
    desc: 'Lightweight browser tool to resize & convert images client-side. No upload, no dependencies — perfect for quick edits.',
    demo: 'https://dreamerview.github.io/imagify/',
    repo: 'https://github.com/DreamerView/imagify',
    image: imagifyImg
  },
  {
    title: '📷 QR Code Scanner & Generator',
    desc: 'Lightweight QR tool to scan or generate codes instantly using HTML, Bootstrap 5.3, and ES6 — all client-side.',
    demo: 'https://dreamerview.github.io/qr-scanner-generator/',
    repo: 'https://github.com/DreamerView/qr-scanner-generator',
    image: qrImg
  },
  {
    title: '📲 Okki Apps',
    desc: 'A modern web-based mini application built with Next.js and Node.js, designed to function like a standalone web store app.',
    demo: 'https://okki.vercel.app',
    repo: 'https://github.com/DreamerView/okki',
    image: okkiImg
  },
  {
    title: '🧠 Random Quote Machine',
    desc: 'Minimalist quote app using Bootstrap 5 & ES6+. Shows random quotes from the Quotable API in a clean, dark-themed interface.',
    demo: 'https://dreamerview.github.io/random-quote',
    repo: 'https://github.com/DreamerView/random-quote',
    image: quoteImg
  }
];

export default list;