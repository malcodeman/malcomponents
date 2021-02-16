import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/components/theme-provider/ThemeProvider";
import Typography from "../src/components/typography";

export default { title: "Typography", decorators: [withKnobs] };

export function ParagraphXSmall(): React.ReactElement {
  const mt = text("mt", "0rem");
  const mb = text("mb", "0rem");
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Typography.ParagraphXSmall mt={mt} mb={mb}>
        ParagraphXSmall
      </Typography.ParagraphXSmall>
    </ThemeProvider>
  );
}

export function ParagraphSmall(): React.ReactElement {
  const mt = text("mt", "0rem");
  const mb = text("mb", "0rem");
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Typography.ParagraphSmall mt={mt} mb={mb}>
        ParagraphSmall
      </Typography.ParagraphSmall>
    </ThemeProvider>
  );
}

export function ParagraphMedium(): React.ReactElement {
  const mt = text("mt", "0rem");
  const mb = text("mb", "0rem");
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Typography.ParagraphMedium mt={mt} mb={mb}>
        ParagraphMedium
      </Typography.ParagraphMedium>
    </ThemeProvider>
  );
}

export function ParagraphLarge(): React.ReactElement {
  const mt = text("mt", "0rem");
  const mb = text("mb", "0rem");
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Typography.ParagraphLarge mt={mt} mb={mb}>
        ParagraphLarge
      </Typography.ParagraphLarge>
    </ThemeProvider>
  );
}

export function HeadingXSmall(): React.ReactElement {
  const mt = text("mt", "0rem");
  const mb = text("mb", "0rem");
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Typography.HeadingXSmall mt={mt} mb={mb}>
        HeadingXSmall
      </Typography.HeadingXSmall>
    </ThemeProvider>
  );
}

export function HeadingSmall(): React.ReactElement {
  const mt = text("mt", "0rem");
  const mb = text("mb", "0rem");
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Typography.HeadingSmall mt={mt} mb={mb}>
        HeadingSmall
      </Typography.HeadingSmall>
    </ThemeProvider>
  );
}

export function HeadingMedium(): React.ReactElement {
  const mt = text("mt", "0rem");
  const mb = text("mb", "0rem");
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Typography.HeadingMedium mt={mt} mb={mb}>
        HeadingMedium
      </Typography.HeadingMedium>
    </ThemeProvider>
  );
}

export function HeadingLarge(): React.ReactElement {
  const mt = text("mt", "0rem");
  const mb = text("mb", "0rem");
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Typography.HeadingLarge mt={mt} mb={mb}>
        HeadingLarge
      </Typography.HeadingLarge>
    </ThemeProvider>
  );
}

export function HeadingXLarge(): React.ReactElement {
  const mt = text("mt", "0rem");
  const mb = text("mb", "0rem");
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Typography.HeadingXLarge mt={mt} mb={mb}>
        HeadingXLarge
      </Typography.HeadingXLarge>
    </ThemeProvider>
  );
}

export function HeadingXXLarge(): React.ReactElement {
  const mt = text("mt", "0rem");
  const mb = text("mb", "0rem");
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Typography.HeadingXXLarge mt={mt} mb={mb}>
        HeadingXXLarge
      </Typography.HeadingXXLarge>
    </ThemeProvider>
  );
}
