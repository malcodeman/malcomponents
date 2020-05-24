import React from "react";

import theme from "../src/themes/lightTheme";

import ThemeProvider from "../src/ThemeProvider";
import Spinner from "../src/spinner/Spinner";

export default { title: "Spinner" };

export function Default() {
  return (
    <ThemeProvider theme={theme}>
      <Spinner />
    </ThemeProvider>
  );
}
