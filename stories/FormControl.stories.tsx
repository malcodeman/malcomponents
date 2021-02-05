import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/ThemeProvider";
import FormControl from "../src/components/form-control/FormControl";
import Input from "../src/components/input/Input";

export default { title: "FormControl", decorators: [withKnobs] };

export function Default(): React.ReactElement {
  const [value, setValue] = React.useState("");
  const label = text("label", "Your email");
  const caption = text("caption", "");
  const htmlFor = text("htmlFor", "email");
  const disabled = boolean("disabled", false);
  const positive = boolean("positive", false);
  const error = boolean("error", false);
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <FormControl
        label={label}
        htmlFor={htmlFor}
        caption={caption}
        disabled={disabled}
        positive={positive}
        error={error}
      >
        <Input
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </FormControl>
    </ThemeProvider>
  );
}
