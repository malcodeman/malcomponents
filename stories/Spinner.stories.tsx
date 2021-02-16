import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/components/theme-provider/ThemeProvider";
import Spinner from "../src/components/spinner/Spinner";

export default { title: "Spinner", decorators: [withKnobs] };

export function Default(): React.ReactElement {
  const size = text("size", "1rem");
  const darkTheme = boolean("darkTheme", false);
  const color = text(
    "color",
    darkTheme
      ? DarkTheme.malcode.colors.accent
      : LightTheme.malcode.colors.accent
  );
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Spinner size={size} color={color} />
    </ThemeProvider>
  );
}
