import React from "react";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/ThemeProvider";
import Notification from "../src/notification/Notification";
import { KIND } from "../src/notification/constants";

export default { title: "Notification", decorators: [withKnobs] };

export function Default() {
  const value = text("Value", "Notification");
  const kind = select("Kind", Object.values(KIND), KIND.info);
  const darkTheme = boolean("Dark theme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Notification kind={kind}>{value}</Notification>
    </ThemeProvider>
  );
}
