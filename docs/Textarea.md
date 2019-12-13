# `Textarea`

## Usage

```jsx
import React, { useState } from "react";
import { Textarea } from "malcomponents";

function Demo() {
  const [value, setValue] = useState("");

  return (
    <Textarea value={value} onChange={e => setValue(e.currentTarget.value)} />
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
