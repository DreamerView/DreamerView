'use client';

import { useEffect, useState } from 'react';

export function useSmartImage(src) {
  const [status, setStatus] = useState('loading'); // loading | success | error

  useEffect(() => {
    // если src пустой — сразу ошибка
    if (!src) {
      setStatus('error');
      return;
    }

    let cancelled = false;
    const img = new Image();

    img.onload = () => {
      if (!cancelled) {
        setStatus('success');
      }
    };

    img.onerror = () => {
      if (!cancelled) {
        setStatus('error');
      }
    };

    img.src = src;

    // cleanup
    return () => {
      cancelled = true;
    };
  }, [src]);

  return status;
}
