# `HeaderNavigation`

## Usage

```jsx
import React from "react";
import {
  HeaderNavigation,
  NavigationList,
  NavigationItem
} from "malcomponents";

function Demo() {
  return (
    <HeaderNavigation>
      <NavigationList>
        <NavigationItem>Test</NavigationItem>
      </NavigationList>
      <NavigationList>
        <NavigationItem>Malcomponents</NavigationItem>
      </NavigationList>
      <NavigationList align="center">
        <NavigationItem>
          <Button>Get started</Button>
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
}
```
