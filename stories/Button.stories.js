import React from "react";

import theme from "../src/themes/lightTheme";

import ThemeProvider from "../src/ThemeProvider";
import Button from "../src/button/Button";

export default { title: "Button" };

export function Default() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Button</Button>
    </ThemeProvider>
  );
}
