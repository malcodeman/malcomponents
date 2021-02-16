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
        modalCloseColor: string;
      };
      typography: {
        type: {
          primary: string;
        };
        size: {
          paragraphXSmall: string;
          paragraphSmall: string;
          paragraphMedium: string;
          paragraphLarge: string;
          headingXSmall: string;
          headingSmall: string;
          headingMedium: string;
          headingLarge: string;
          headingXLarge: string;
          headingXXLarge: string;
        };
      };
    };
  }
}
