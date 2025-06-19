'use client';
import { useEffect, useState } from 'react';

export default function PreloaderComponent({ locale = 'en' }) {
  const factsMap = {
    en: [
      '👋 Welcome to official website',
      '👨‍💻 I started coding in 2019 from scratch',
      '🚀 I founded Cardify — a digital business card service',
      '🇰🇿 I’m from Kazakhstan and promote local IT products',
      '🧠 I love building tools that simplify life',
    ],
    ru: [
      '👋 Добро пожаловать на официальный сайт',
      '👨‍💻 Я начал программировать с нуля в 2019 году',
      '🚀 Я основал Cardify — цифровой сервис визиток',
      '🇰🇿 Я из Казахстана и продвигаю локальные IT-продукты',
      '🧠 Люблю создавать инструменты, упрощающие жизнь',
    ],
    kk: [
      '👋 Ресми сайтқа қош келдіңіз',
      '👨‍💻 Мен 2019 жылы нөлден бастап код жазуды бастадым',
      '🚀 Мен Cardify цифрлық визитка сервисін құрдым',
      '🇰🇿 Мен Қазақстаннанмын және жергілікті IT өнімдерді насихаттаймын',
      '🧠 Мен өмірді жеңілдететін құралдарды жасағанды ​​ұнатамын',
    ],
  };

  const resources = [
    {
      type: 'css',
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    },
    {
      type: 'css',
      src: '/skeleton.css',
    },
    {
      type: 'css',
      src: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',
      font: true,
    },
    {
      type: 'js',
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
    },
  ];

  const total = resources.length;
  const [loadedCount, setLoadedCount] = useState(0);
  const [fontsReadyCount, setFontsReadyCount] = useState(0);
  const fontResources = resources.filter((r) => r.font);
  const fontsTotal = fontResources.length;
  const progress = Math.min(Math.round((loadedCount / total) * 100), 100);
  const fontsReady = fontsReadyCount === fontsTotal;

  useEffect(() => {
    resources.forEach(({ type, src, font }) => {
      if (type === 'css') {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = src;
        link.onload = () => setLoadedCount((c) => c + 1);
        document.head.appendChild(link);
        if (font) document.fonts.ready.then(() => setFontsReadyCount((c) => c + 1));
      } else if (type === 'js') {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        script.onload = () => setLoadedCount((c) => c + 1);
        document.body.appendChild(script);
      }
    });

    if (fontsTotal === 0) setFontsReadyCount(0);
  }, []);

  useEffect(() => {
    if (loadedCount === total && fontsReady) {
      const el = document.getElementById('preloader');
      if (el) {
        setTimeout(() => {
          el.classList.add('fade-down');
          el.style.pointerEvents = 'none';
          setTimeout(() => el.remove(), 1000);
        }, 500);
      }
    }
  }, [loadedCount, fontsReady]);

  // 🔁 Факты
  useEffect(() => {
    const facts = factsMap[locale] || factsMap.en;
    let index = 0;
    const el = document.getElementById('fact-text');

    if (el) {
      const interval = setInterval(() => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(10px)';

        setTimeout(() => {
          index = (index + 1) % facts.length;
          el.innerText = facts[index];
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        }, 400);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [locale]);

  const highlightColor = '#333';
  const strokeColor = progress === 100 ? highlightColor : '#777';
  const textColor = progress === 100 ? highlightColor : '#777';

  return (
    <div
      id="preloader"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#fff',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', width: 180, height: 180 }}>
        <svg width="180" height="180">
          <circle cx="90" cy="90" r="75" stroke="#eee" strokeWidth="15" fill="none" />
          <circle
            cx="90"
            cy="90"
            r="75"
            stroke={strokeColor}
            strokeWidth="10"
            fill="none"
            strokeDasharray={Math.PI * 2 * 75}
            strokeDashoffset={Math.PI * 2 * 75 * (1 - progress / 100)}
            transform="rotate(-90 90 90)"
            style={{
              transition: 'stroke-dashoffset 0.4s ease, stroke 0.3s ease',
            }}
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 'bold',
            fontSize: '1.8rem',
            fontFamily: 'Arial, sans-serif',
            color: textColor,
            transition: 'color 0.3s ease',
          }}
        >
          {progress}%
        </div>
      </div>

      {/* Текст-факт */}
      <div
        id="fact-text"
        className="text-center text-secondary small mt-4"
        style={{
          fontSize: '0.9rem',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          fontFamily: 'Arial, sans-serif',
          minHeight: 24,
        }}
      >
        {factsMap[locale]?.[0] ?? factsMap.en[0]}
      </div>

      <style>{`
        .fade-down {
          opacity: 0;
          transition: opacity 1s ease;
          transform: translateY(30px);
        }
      `}</style>
    </div>
  );
}
