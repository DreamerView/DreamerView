'use client';

import { useEffect, useState } from 'react';

export function useSmartImage(src, options = {}) {
  const { defer = true } = options;
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!src) {
      setStatus('error');
      return;
    }

    let cancelled = false;
    let idleId;

    const loadImage = () => {
      if (cancelled) return;

      const img = new Image();

      img.onload = () => {
        if (!cancelled) setStatus('success');
      };

      img.onerror = () => {
        if (!cancelled) setStatus('error');
      };

      img.src = src;
    };

    if (defer && typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(loadImage);
      } else {
        // fallback для Safari
        idleId = setTimeout(loadImage, 200);
      }
    } else {
      loadImage();
    }

    return () => {
      cancelled = true;

      if ('cancelIdleCallback' in window && idleId) {
        window.cancelIdleCallback(idleId);
      } else if (idleId) {
        clearTimeout(idleId);
      }
    };
  }, [src, defer]);

  return status;
}
