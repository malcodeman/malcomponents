import { css } from "styled-components";

const theme = {
  colors: {
    buttonPrimaryFill: "#000000",
    buttonPrimaryText: "#FFFFFF",
    buttonSecondaryFill: "#333333",
    buttonSecondaryText: "#FFFFFF",
    buttonDisabledFill: "#292929",
    buttonDisabledText: "#757575"
  },
  typography: {
    font350: css`
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1;
    `,
    font450: css`
      font-family: "Roboto", sans-serif;
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1.125;
    `,
    font550: css`
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.125;
    `
  }
};

export default theme;
