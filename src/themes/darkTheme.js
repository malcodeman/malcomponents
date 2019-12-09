import { css } from "styled-components";

const theme = {
  colors: {
    foreground: "#CBCBCB",
    foregroundAlt: "#757575",
    borderFocus: "#FFFFFF",
    buttonPrimaryFill: "#000000",
    buttonPrimaryText: "#FFFFFF",
    buttonSecondaryFill: "#333333",
    buttonSecondaryText: "#FFFFFF",
    buttonDisabledFill: "#292929",
    buttonDisabledText: "#757575",
    inputFill: "#292929",
    inputFillDisabled: "#141414",
    inputTextDisabled: "#333333",
    inputFillError: "#5C1D16",
    inputBorderError: "#F4AFA7",
    inputFillPositive: "#1C472F",
    inputBorderPositive: "#3AA76D",
    inputFillActive: "#333333"
  },
  typography: {
    font200: css`
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      font-weight: normal;
      line-height: 1.42;
    `,
    font300: css`
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.5;
    `,
    font350: css`
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5;
    `,
    font400: css`
      font-family: "Roboto", sans-serif;
      font-size: 1.125rem;
      font-weight: normal;
      line-height: 1.55;
    `,
    font450: css`
      font-family: "Roboto", sans-serif;
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1.55;
    `,
    font550: css`
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.4;
    `
  }
};

export default theme;
