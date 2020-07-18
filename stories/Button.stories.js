import React from "react";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/ThemeProvider";
import Button from "../src/button/Button";
import { KIND, SIZE } from "../src/button/constants";

export default { title: "Button", decorators: [withKnobs] };

export function Default() {
  const kind = select("Kind", Object.values(KIND), KIND.info);
  const size = select("Size", Object.values(SIZE), SIZE.default);
  const value = text("Value", "Button");
  const darkTheme = boolean("Dark theme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Button kind={kind} size={size}>
        {value}
      </Button>
    </ThemeProvider>
  );
}
