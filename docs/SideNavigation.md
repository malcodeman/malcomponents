# `SideNavigation`

## Usage

```jsx
import React from "react";
import { SideNavigation } from "malcomponents";
import { useHistory, useLocation } from "react-router-dom";

function Demo() {
  const history = useHistory();
  const location = useLocation();

  return (
    <SideNavigation
      activeItemId={location.pathname}
      items={[
        { title: "Home", itemId: "/" },
        { title: "Account", itemId: "/account" }
      ]}
      onChange={({ event, item }) => {
        event.preventDefault();
        history.push(item.itemId);
      }}
    />
  );
}
```

## Props

- **`items`**_`: array`_
- **`activeItemId`**_`: string`_
- **`onChange`**_`: function`_
