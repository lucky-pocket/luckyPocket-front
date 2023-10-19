import React from "react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { GlobalStyle } from "common";

import type { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "luckPocket",
  title: {
    template: "복주머니 - %s",
    default: "복주머니",
  },
  openGraph: {
    title: "새해 복주머니 게임",
    description: "즐거운 새해를 맞아 서로서로 복주머니를 전달해보아요!",
    url: "",
    siteName: "luckyPocket",
    images: [
      {
        url: "/favicon.png",
        width: 800,
        height: 800,
      },
    ],
    locale: "ko",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

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
        <ReactQueryDevtools />
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
