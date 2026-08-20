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
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        onLoad={() => console.log('GA script loaded from Google')}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
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
