# [malcomponents](https://malcomponents.surge.sh)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malcodeman/malcomponents/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/malcomponents)](https://www.npmjs.com/package/malcomponents)

Collection of React components.

## Getting started

```
yarn add malcomponents
```

```jsx
import React from "react";
import { ThemeProvider, LightTheme, Button, GlobalStyle } from "malcomponents";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Button>Button</Button>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
```

## Global styles

Components within the design system assume that a set of global styles have been configured.

## Theming

We require that you select a theme as part of boilerplate setup. Our components require a theme to assign styles.
We provide two themes out of the box, LightTheme and DarkTheme, which style components in light & dark variants.

```jsx
import React from "react";
import { ThemeProvider, DarkTheme, Button, GlobalStyle } from "malcomponents";

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Button>Button</Button>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
```

## License

[MIT](./LICENSE)
