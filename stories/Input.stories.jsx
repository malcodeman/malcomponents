import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/ThemeProvider";
import Input from "../src/input/Input";
import { SIZE } from "../src/input/constants";

export default { title: "Input", decorators: [withKnobs] };

export function Default() {
  const [value, setValue] = React.useState("");
  const size = select("Size", Object.values(SIZE), SIZE.default);
  const darkTheme = boolean("Dark theme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Input
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        size={size}
      />
    </ThemeProvider>
  );
}
