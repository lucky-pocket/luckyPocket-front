"use client";

import React from "react";

import { theme } from "../../../../packages/common";
import { ThemeProvider } from "@emotion/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>

      <body>
        <ThemeProvider theme={theme}>
          <Providers>
            <ReactQueryDevtools />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
