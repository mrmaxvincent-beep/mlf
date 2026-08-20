'use client';

import { useCallback } from 'react';

interface EventParams {
  [key: string]: string | number | boolean;
}

export function useAnalytics() {
  const trackEvent = useCallback((eventName: string, params?: EventParams) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
  }, []);

  return { trackEvent };
}
