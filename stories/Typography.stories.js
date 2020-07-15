import React from "react";

import theme from "../src/themes/lightTheme";

import ThemeProvider from "../src/ThemeProvider";
import {
  ParagraphXSmall,
  ParagraphSmall,
  ParagraphMedium,
  ParagraphLarge,
  HeadingXSmall,
  HeadingSmall,
  HeadingMedium,
  HeadingLarge,
  HeadingXLarge,
  HeadingXXLarge,
} from "../src/typography";

export default { title: "Typography" };

export function Default() {
  return (
    <ThemeProvider theme={theme}>
      <ParagraphXSmall>ParagraphXSmall</ParagraphXSmall>
      <ParagraphSmall>ParagraphSmall</ParagraphSmall>
      <ParagraphMedium>ParagraphMedium</ParagraphMedium>
      <ParagraphLarge>ParagraphLarge</ParagraphLarge>
      <HeadingXSmall>HeadingXSmall</HeadingXSmall>
      <HeadingSmall>HeadingSmall</HeadingSmall>
      <HeadingMedium>HeadingMedium</HeadingMedium>
      <HeadingLarge>HeadingLarge</HeadingLarge>
      <HeadingXLarge>HeadingXLarge</HeadingXLarge>
      <HeadingXXLarge>HeadingXXLarge</HeadingXXLarge>
    </ThemeProvider>
  );
}
