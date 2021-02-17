import React from "react";

import { LightTheme } from "../src/themes";
import GlobalStyle from "../src/GlobalStyle";
import ThemeProvider from "../src/components/theme-provider/ThemeProvider";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={LightTheme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
