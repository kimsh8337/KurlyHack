import { createGlobalStyle } from "styled-components";

export const palette = {
  black: "rgb(58, 58, 58)",
  gray: {
    0: "rgba(58, 58, 58, 0.7)",
    1: "rgba(58, 58, 58, 0.8)",
  },
};

export const size = {
  minWidth: 320,
  maxWidth: 479,
};

export const fontSANS = "sans-serif";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${fontSANS};
    color: ${palette.black};
    min-width: ${size.minWidth}px;
    max-width: ${size.maxWidth}px;
    margin: 0 auto;
  }
  * {
    box-sizing: border-box;
  }
`;