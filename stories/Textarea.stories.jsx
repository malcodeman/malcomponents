import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/ThemeProvider";
import Textarea from "../src/textarea/Textarea";
import { SIZE } from "../src/textarea/constants";

export default { title: "Textarea", decorators: [withKnobs] };

export function Default() {
  const [value, setValue] = React.useState("");
  const size = select("Size", Object.values(SIZE), SIZE.default);
  const darkTheme = boolean("Dark theme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        size={size}
      />
    </ThemeProvider>
  );
}
