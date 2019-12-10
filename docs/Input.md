# `Input`

## Usage

```jsx
import React, { useState } from "react";
import { Input } from "malcomponents";

function Demo() {
  const [value, setValue] = useState("");

  return (
    <Input value={value} onChange={e => setValue(e.currentTarget.value)} />
  );
}
```

## Props

- **`size`**_`: string`_
- **`value`**_`: string`_
- **`placeholder`**_`: string`_
- **`disabled`**_`: boolean`_
- **`error`**_`: boolean`_
- **`positive`**_`: boolean`_
- **`onChange`**_`: function`_
