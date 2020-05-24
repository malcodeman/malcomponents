import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import theme from "../src/themes/lightTheme";

import ThemeProvider from "../src/ThemeProvider";
import Notification from "../src/notification/Notification";
import { KIND } from "../src/notification/constants";

export default { title: "Notification", decorators: [withKnobs] };

export function Default() {
  const value = text("Value", "Notification");
  const kind = select("Kind", Object.values(KIND), KIND.info);

  return (
    <ThemeProvider theme={theme}>
      <Notification kind={kind}>{value}</Notification>
    </ThemeProvider>
  );
}
