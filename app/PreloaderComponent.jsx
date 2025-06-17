'use client';
import { useEffect, useState } from 'react';

export default function PreloaderComponent() {
  const resources = [
    {
      type: 'css',
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
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
    // Здесь можешь добавить любые font:true ресурсы с preload шрифтами
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
        if(font) document.fonts.ready.then(() => setFontsReadyCount((c) => c + 1));
      } else if (type === 'js') {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        script.onload = () => setLoadedCount((c) => c + 1);
        document.body.appendChild(script);
      }
    });

    // Если нет font ресурсов, считаем шрифты готовыми сразу
    if (fontsTotal === 0) {
      setFontsReadyCount(0);
    }
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

  const highlightColor = '#333'; // Dodger Blue
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
        overflow:'hidden'
      }}
    >
      <div style={{ position: 'relative', width: 180, height: 180 }}>
        <svg width="180" height="180">
          <circle
            cx="90"
            cy="90"
            r="75"
            stroke="#eee"
            strokeWidth="15"
            fill="none"
          />
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
