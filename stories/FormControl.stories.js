import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import theme from "../src/themes/lightTheme";

import ThemeProvider from "../src/ThemeProvider";
import FormControl from "../src/form-control/FormControl";
import Input from "../src/input/Input";

export default { title: "FormControl", decorators: [withKnobs] };

export function Default() {
  const [value, setValue] = React.useState("");
  const label = text("Label", "Your email");
  const caption = text("Caption", "");
  const disabled = boolean("Disabled", false);
  const positive = boolean("Positive", false);
  const error = boolean("Error", false);

  return (
    <ThemeProvider theme={theme}>
      <FormControl
        label={label}
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