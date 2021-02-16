import React from "react";
import { ThemeProvider } from "styled-components";

import { themeProviderProps } from "../../types";
import { LightTheme as defaultTheme } from "../../themes";

function CustomThemeProvider(props: themeProviderProps): React.ReactElement {
  const { children } = props;
  const theme = { ...defaultTheme, ...props.theme };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
