import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/ThemeProvider";
import Spinner from "../src/spinner/Spinner";

export default { title: "Spinner", decorators: [withKnobs] };

export function Default() {
  const size = text("Size", "1rem");
  const darkTheme = boolean("Dark theme", false);
  const color = text(
    "Color",
    darkTheme ? DarkTheme.colors.accent : LightTheme.colors.accent
  );
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Spinner size={size} color={color} />
    </ThemeProvider>
  );
}
