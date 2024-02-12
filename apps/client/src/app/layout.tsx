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
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
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
