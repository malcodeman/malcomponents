import { DefaultTheme } from "styled-components";

const typography = {
  type: {
    primary: `"Roboto", sans-serif`,
  },
  size: {
    paragraphXSmall: "0.75rem",
    paragraphSmall: "0.875rem",
    paragraphMedium: "1rem",
    paragraphLarge: "1.125rem",
    headingXSmall: "1.25rem",
    headingSmall: " 1.5rem",
    headingMedium: "1.75rem",
    headingLarge: "2rem",
    headingXLarge: "2.25rem",
    headingXXLarge: "2.5rem",
    displayXSmall: "2.25rem",
    displaySmall: "2.75rem",
    displayMedium: "3.25rem",
    displayLarge: "6rem",
  },
};
const LightTheme: DefaultTheme = {
  malcode: {
    colors: {
      primary: "#000000",
      accent: "#276EF1",
      background: "#FFFFFF",
      backgroundPrimary: "#FFFFFF",
      backgroundInversePrimary: "#000000",
      contentPrimary: "#000000",
      negative: "#D44333",
      positive: "#3AA76D",
      foreground: "#000000",
      foregroundAlt: "#545454",
      border: "#CBCBCB",
      borderFocus: "#000000",
      buttonPrimaryFill: "#000000",
      buttonPrimarySelectedFill: "#545454",
      buttonPrimaryText: "#FFFFFF",
      buttonPrimarySelectedText: "#FFFFFF",
      buttonSecondaryFill: "#EEEEEE",
      buttonSecondarySelectedFill: "#E2E2E2",
      buttonSecondaryText: "#000000",
      buttonSecondarySelectedText: "#000000",
      buttonDisabledFill: "#F6F6F6",
      buttonDisabledText: "#AFAFAF",
      inputFill: "#EEEEEE",
      inputFillDisabled: "#F6F6F6",
      inputTextDisabled: "#AFAFAF",
      inputFillError: "#FDF0EF",
      inputBorderError: "#F4AFA7",
      inputFillPositive: "#F0F9F4",
      inputBorderPositive: "#AEDDC2",
      inputFillActive: "#F6F6F6",
      notificationInfoBackground: "#EEF3FE",
      notificationInfoText: "#1E54B7",
      notificationPositiveBackground: "#F0F9F4",
      notificationPositiveText: "#368759",
      notificationWarningBackground: "#FEF3EF",
      notificationWarningText: "#B45427",
      notificationNegativeBackground: "#FDF0EF",
      notificationNegativeText: "#AE372A",
      modalCloseColor: "#000000",
    },
    typography,
  },
};
const DarkTheme: DefaultTheme = {
  malcode: {
    colors: {
      primary: "#FFFFFF",
      accent: "#276EF1",
      background: "#000000",
      backgroundPrimary: "#141414",
      backgroundInversePrimary: "#E2E2E2",
      contentPrimary: "#E2E2E2",
      negative: "#D44333",
      positive: "#3AA76D",
      foreground: "#CBCBCB",
      foregroundAlt: "#757575",
      border: "#292929",
      borderFocus: "#FFFFFF",
      buttonPrimaryFill: "#FFFFFF",
      buttonPrimarySelectedFill: "#E2E2E2",
      buttonPrimaryText: "#000000",
      buttonPrimarySelectedText: "#000000",
      buttonSecondaryFill: "#333333",
      buttonSecondarySelectedFill: "#757575",
      buttonSecondaryText: "#FFFFFF",
      buttonSecondarySelectedText: "#FFFFFF",
      buttonDisabledFill: "#292929",
      buttonDisabledText: "#757575",
      inputFill: "#292929",
      inputFillDisabled: "#141414",
      inputTextDisabled: "#333333",
      inputFillError: "#5C1D16",
      inputBorderError: "#F4AFA7",
      inputFillPositive: "#1C472F",
      inputBorderPositive: "#3AA76D",
      inputFillActive: "#333333",
      notificationInfoBackground: "#102C60",
      notificationInfoText: "#A0BFF9",
      notificationPositiveBackground: "#1C472F",
      notificationPositiveText: "#AEDDC2",
      notificationWarningBackground: "#5F2C14",
      notificationWarningText: "#F7BFA5",
      notificationNegativeBackground: "#5C1D16",
      notificationNegativeText: "#F4AFA7",
      modalCloseColor: "#757575",
    },
    typography,
  },
};
export { LightTheme, DarkTheme };
