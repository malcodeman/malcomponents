import React from "react";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/components/theme-provider/ThemeProvider";
import Notification from "../src/components/notification/Notification";

export default { title: "Notification", decorators: [withKnobs] };

export function Default(): React.ReactElement {
  const value = text("value", "Notification");
  const kind = select(
    "kind",
    ["info", "positive", "warning", "negative"],
    "info"
  );
  const shouldFitContainer = boolean("shouldFitContainer", false);
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Notification kind={kind} shouldFitContainer={shouldFitContainer}>
        {value}
      </Notification>
    </ThemeProvider>
  );
}
