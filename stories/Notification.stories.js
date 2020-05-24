import React from "react";

import theme from "../src/themes/lightTheme";

import ThemeProvider from "../src/ThemeProvider";
import Notification from "../src/notification/Notification";

export default { title: "Notification" };

export function Default() {
  return (
    <ThemeProvider theme={theme}>
      <Notification>Notification</Notification>
    </ThemeProvider>
  );
}
