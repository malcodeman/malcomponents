import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

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

export default { title: "Typography", decorators: [withKnobs] };

export function Default() {
  const darkTheme = boolean("Dark theme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

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
