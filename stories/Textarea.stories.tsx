import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/ThemeProvider";
import Textarea from "../src/components/textarea/Textarea";
import { SIZE } from "../src/components/textarea/constants";

export default { title: "Textarea", decorators: [withKnobs] };

export function Default(): React.ReactElement {
  const [value, setValue] = React.useState("");
  const inputSize = select("inputSize", Object.values(SIZE), SIZE.default);
  const disabled = boolean("disabled", false);
  const error = boolean("error", false);
  const positive = boolean("positive", false);
  const autoFocus = boolean("autoFocus", false);
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        inputSize={inputSize}
        disabled={disabled}
        error={error}
        positive={positive}
        autoFocus={autoFocus}
      />
    </ThemeProvider>
  );
}
