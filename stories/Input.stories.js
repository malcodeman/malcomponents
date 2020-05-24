import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";

import theme from "../src/themes/lightTheme";

import ThemeProvider from "../src/ThemeProvider";
import Input from "../src/input/Input";
import { SIZE } from "../src/input/constants";

export default { title: "Input", decorators: [withKnobs] };

export function Default() {
  const [value, setValue] = React.useState("");
  const size = select("Size", Object.values(SIZE), SIZE.default);

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
