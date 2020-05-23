import React from "react";

import theme from "../src/themes/lightTheme";

import ThemeProvider from "../src/ThemeProvider";
import Input from "../src/input/Input";

export default { title: "Input" };

export function Default() {
  const [value, setValue] = React.useState("");

  return (
    <ThemeProvider theme={theme}>
      <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />{" "}
    </ThemeProvider>
  );
}
