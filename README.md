# malcomponents

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malcodeman/malcomponents/blob/master/LICENSE)

Collection of React components.

## Getting started

```
yarn add malcomponents
```

```jsx
import React from "react";
import { ThemeProvider, Button } from "malcomponents";

function App() {
  return (
    <ThemeProvider>
      <Button>Button</Button>
    </ThemeProvider>
  );
}

export default App;
```

## Theming

malcomponents ships by default with the `Light` theme.
With the `ThemeProvider`, you can apply a theme to your application. By default, malcomponents ships with a light and a dark theme.

```jsx
import React from "react";
import { ThemeProvider, DarkTheme, Button } from "malcomponents";

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Button>Button</Button>
    </ThemeProvider>
  );
}

export default App;
```

## Components

- [`Button`](./docs/Button.md)
- [`ButtonGroup`](./docs/ButtonGroup.md)
- [`FormControl`](./docs/FormControl.md)
- [`Input`](./docs/Input.md)
- [`Modal`](./docs/Modal.md)
- [`Notification`](./docs/Notification.md)
- [`Spinner`](./docs/Spinner.md)
- [`Textarea`](./docs/Textarea.md)

## License

[MIT](./LICENSE)
