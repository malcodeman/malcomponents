import React from "react";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/ThemeProvider";
import Button from "../src/components/button/Button";
import { KIND, SIZE } from "../src/components/button/constants";

export default { title: "Button", decorators: [withKnobs] };

export function Default(): React.ReactElement {
  const kind = select("kind", Object.values(KIND), "primary");
  const size = select("size", Object.values(SIZE), SIZE.default);
  const children = text("children", "Button");
  const darkTheme = boolean("darkTheme", false);
  const isLoading = boolean("isLoading", false);
  const isSelected = boolean("isSelected", false);
  const shouldFitContainer = boolean("shouldFitContainer", false);
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Button
        kind={kind}
        size={size}
        isLoading={isLoading}
        isSelected={isSelected}
        shouldFitContainer={shouldFitContainer}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
}
