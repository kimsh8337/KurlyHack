import { createGlobalStyle } from "styled-components";

export const palette = {
  primary: "#6600CC",
  black: "#000000",
  white: "#FFFFFF",
  gray: {
    0: "rgba(58, 58, 58, 0.7)",
    1: "rgba(58, 58, 58, 0.8)",
  },
};

export const size = {
  header: 80,
  footer: 40,
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
    margin: 0 auto ${size.footer}px;
  }
  * {
    box-sizing: border-box;
  }
  input[type='email'],
  input[type='text'],
  input[type='tel'],
  input[type='password'] {
    outline: 0;
    font-family: ${fontSANS};
    padding: 0;
    border-radius: 0;
    border: 0;
  }

  button {
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    color: inherit;
    pointer-events: fill;

    * {
      pointer-events: none;
    }

    &:disabled {
      cursor: default;
    }
  }
`;