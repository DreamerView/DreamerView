'use client';

import { useEffect, useState } from 'react';

export function useSmartImage(src) {
  const [status, setStatus] = useState('loading'); // loading | error | success

  useEffect(() => {
    if (!src) {
      setStatus('error');
      return;
    }

    const img = new Image();
    img.src = src;

    img.onload = () => setStatus('success');
    img.onerror = () => setStatus('error');
  }, [src]);

  return status;
}