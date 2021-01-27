import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/ThemeProvider";
import Input from "../src/input/Input";
import { SIZE } from "../src/input/constants";

export default { title: "Input", decorators: [withKnobs] };

export function Default() {
  const [value, setValue] = React.useState("");
  const inputSize = select("inputSize", Object.values(SIZE), SIZE.default);
  const disabled = boolean("disabled", false);
  const error = boolean("error", false);
  const positive = boolean("positive", false);
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Input
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        disabled={disabled}
        error={error}
        positive={positive}
        inputSize={inputSize}
      />
    </ThemeProvider>
  );
}
