import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { LightTheme as defaultTheme } from "./themes";

function CustomThemeProvider(props) {
  const theme = { ...defaultTheme, ...props.theme };

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

CustomThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node,
};

CustomThemeProvider.defaultProps = {
  theme: {},
};

export default CustomThemeProvider;
