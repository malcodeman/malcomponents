import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import theme from "../src/themes/lightTheme";

import ThemeProvider from "../src/ThemeProvider";
import Spinner from "../src/spinner/Spinner";

export default { title: "Spinner", decorators: [withKnobs] };

export function Default() {
  const size = text("Size", "1rem");
  const color = text("Color", theme.colors.accent);

  return (
    <ThemeProvider theme={theme}>
      <Spinner size={size} color={color} />
    </ThemeProvider>
  );
}
