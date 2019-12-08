import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import defaultTheme from "./themes/darkTheme";

function CustomThemeProvider(props) {
  const theme = {
    malcode: { ...defaultTheme, ...props.theme }
  };

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

CustomThemeProvider.propTypes = {
  theme: PropTypes.object
};

CustomThemeProvider.defaultProps = {
  theme: {}
};

export default CustomThemeProvider;
