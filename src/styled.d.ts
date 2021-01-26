import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    malcode: {
      colors: {
        primary: string;
        accent: string;
        background: string;
        backgroundPrimary: string;
        backgroundInversePrimary: string;
        contentPrimary: string;
        negative: string;
        positive: string;
        foreground: string;
        foregroundAlt: string;
        border: string;
        borderFocus: string;
        buttonPrimaryFill: string;
        buttonPrimarySelectedFill: string;
        buttonPrimaryText: string;
        buttonPrimarySelectedText: string;
        buttonSecondaryFill: string;
        buttonSecondarySelectedFill: string;
        buttonSecondaryText: string;
        buttonSecondarySelectedText: string;
        buttonDisabledFill: string;
        buttonDisabledText: string;
        inputFill: string;
        inputFillDisabled: string;
        inputTextDisabled: string;
        inputFillError: string;
        inputBorderError: string;
        inputFillPositive: string;
        inputBorderPositive: string;
        inputFillActive: string;
        notificationInfoBackground: string;
        notificationInfoText: string;
        notificationPositiveBackground: string;
        notificationPositiveText: string;
        notificationWarningBackground: string;
        notificationWarningText: string;
        notificationNegativeBackground: string;
        notificationNegativeText: string;
      };
      typography: {
        font100: string;
        font150: string;
        font200: string;
        font250: string;
        font300: string;
        font350: string;
        font400: string;
        font450: string;
        font500: string;
        font550: string;
        ParagraphXSmall: string;
        ParagraphSmall: string;
        ParagraphMedium: string;
        ParagraphLarge: string;
        HeadingXSmall: string;
        HeadingSmall: string;
        HeadingMedium: string;
        HeadingLarge: string;
        HeadingXLarge: string;
        HeadingXXLarge: string;
      };
    };
  }
}
