import React from "react";

import theme from "../src/themes/lightTheme";

import ThemeProvider from "../src/ThemeProvider";
import Textarea from "../src/textarea/Textarea";

export default { title: "Textarea" };

export function Default() {
  const [value, setValue] = React.useState("");

  return (
    <ThemeProvider theme={theme}>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </ThemeProvider>
  );
}
