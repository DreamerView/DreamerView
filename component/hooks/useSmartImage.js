'use client';

import { useEffect, useState, useRef } from 'react';

export function useSmartImage(
  src,
  {
    defer = true,
    retries = 3,
    retryDelay = 300, // мс
  } = {}
) {
  const [status, setStatus] = useState('loading'); // loading | success | error
  const attemptRef = useRef(0);

  useEffect(() => {
    if (!src) {
      setStatus('error');
      return;
    }

    let cancelled = false;
    let idleId;
    let timeoutId;

    attemptRef.current = 0;
    setStatus('loading');

    const loadImage = () => {
      if (cancelled) return;

      const img = new Image();

      img.onload = () => {
        if (!cancelled) {
          setStatus('success');
        }
      };

      img.onerror = () => {
        if (cancelled) return;

        if (attemptRef.current < retries - 1) {
          attemptRef.current += 1;

          timeoutId = setTimeout(() => {
            loadImage();
          }, retryDelay);
        } else {
          setStatus('error');
        }
      };

      img.src = src;
    };

    const start = () => {
      if (cancelled) return;

      if (defer && typeof window !== 'undefined') {
        if ('requestIdleCallback' in window) {
          idleId = window.requestIdleCallback(loadImage);
        } else {
          idleId = setTimeout(loadImage, 200);
        }
      } else {
        loadImage();
      }
    };

    start();

    return () => {
      cancelled = true;

      if ('cancelIdleCallback' in window && idleId) {
        window.cancelIdleCallback(idleId);
      } else if (idleId) {
        clearTimeout(idleId);
      }

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [src, defer, retries, retryDelay]);

  return status;
}
