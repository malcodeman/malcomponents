import React from "react";

import theme from "../src/themes/lightTheme";

import ThemeProvider from "../src/ThemeProvider";
import FormControl from "../src/form-control/FormControl";
import Input from "../src/input/Input";

export default { title: "FormControl" };

export function Default() {
  const [email, setEmail] = React.useState("");

  return (
    <ThemeProvider theme={theme}>
      <FormControl label="Your email">
        <Input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </FormControl>
    </ThemeProvider>
  );
}
