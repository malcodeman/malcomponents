import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { LightTheme as defaultTheme } from "./themes";

type props = {
  theme?: DefaultTheme;
  children?: React.ReactNode;
};

function CustomThemeProvider(props: props): React.ReactElement {
  const { children } = props;
  const theme = { ...defaultTheme, ...props.theme };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
