import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";

import { LightTheme } from "../src/themes";

import ThemeProvider from "../src/components/theme-provider/ThemeProvider";
import Button from "../src/components/button/Button";

export default { title: "Theming", decorators: [withKnobs] };

export function Default(): React.ReactElement {
  const buttonPrimaryFill = select(
    "fillColor",
    ["red", "green", "blue"],
    "red"
  );
  const theme = {
    ...LightTheme,
    malcode: {
      ...LightTheme.malcode,
      colors: {
        ...LightTheme.malcode.colors,
        buttonPrimaryFill,
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Button>Button</Button>
    </ThemeProvider>
  );
}
