'use client';

import { useState } from 'react';

export function useSmartImage() {
  const [status, setStatus] = useState('loading'); // loading | error | success

  return {
    status,
    onLoad: () => setStatus('success'),
    onError: () => setStatus('error'),
  };
}
