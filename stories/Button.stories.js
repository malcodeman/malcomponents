import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import theme from "../src/themes/lightTheme";

import ThemeProvider from "../src/ThemeProvider";
import Button from "../src/button/Button";
import { KIND, SIZE } from "../src/button/constants";

export default { title: "Button", decorators: [withKnobs] };

export function Default() {
  const kind = select("Kind", Object.values(KIND), KIND.info);
  const size = select("Size", Object.values(SIZE), SIZE.default);
  const value = text("Value", "Button");

  return (
    <ThemeProvider theme={theme}>
      <Button kind={kind} size={size}>
        {value}
      </Button>
    </ThemeProvider>
  );
}
