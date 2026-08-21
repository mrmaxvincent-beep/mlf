'use client';

import Script from 'next/script';

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  console.log('GA ID from env:', gaId);

  if (!gaId) {
    console.warn('Google Analytics ID not configured - NEXT_PUBLIC_GA_ID is missing');
    return null;
  }

  console.log('Loading Google Analytics with ID:', gaId);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        onLoad={() => console.log('GA script loaded from Google')}
        onError={() => console.error('GA script failed to load from googletagmanager.com')}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
            console.log('GA4 initialized with ID: ${gaId}');
          `,
        }}
      />
    </>
  );
}
