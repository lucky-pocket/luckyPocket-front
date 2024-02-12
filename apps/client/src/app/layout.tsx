'use client';

import React from 'react';

import { useRouter } from 'next/router';
import { theme } from 'common';
import { ThemeProvider } from '@emotion/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GlobalStyle } from 'common';
import Script from 'next/script';
import { useEffect } from 'react';
import { GA_TRACKING_ID, pageview } from 'client/libs';
import { usePathname, useSearchParams } from 'next/navigation';

import Providers from './providers';
import * as gtag from 'client/libs';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    return null;
  }

  return (
    <html lang='ko'>
      <head>
        <link
          rel='stylesheet'
          as='style'
          crossOrigin=''
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css'
        />
        <Script
          id='gtm-script'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${GA_TRACKING_ID}');
  `,
          }}
        />
      </head>

      <body>
        <ThemeProvider theme={theme}>
          <Providers>
            <GlobalStyle />
            <ReactQueryDevtools />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
