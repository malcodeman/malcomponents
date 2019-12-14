# `ButtonGroup`

## Usage

```jsx
import React, { useState } from "react";
import { ButtonGroup, Button } from "malcomponents";

function Demo() {
  const [selected, setSelected] = useState([0]);

  return (
    <ButtonGroup
      selected={selected}
      onClick={(event, index) => {
        setSelected([index]);
      }}
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}
```

## Props

- **`selected`**_`: array`_
- **`kind`**_`: string`_
- **`size`**_`: string`_
- **`disabled`**_`: boolean`_
- **`onClick`**_`: function`_
