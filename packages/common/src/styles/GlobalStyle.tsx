"use client";

import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          overscroll-behavior-y: none;
          overflow-x: hidden;
        }

        body,
        * {
          font-family: "Noto Sans KR";
          box-sizing: border-box;
        }
        @font-face {
          font-family: "JS Arirang HON";
          src: url("/fonts/JSArirangHON.ttf");
        }
        @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
        .notosanskr * {
          font-family: "Noto Sans KR", sans-serif;
        }
        button {
          border: none;
          padding: 0;
          cursor: pointer;
          background: none;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
}
