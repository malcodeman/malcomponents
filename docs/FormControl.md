# `FormControl`

## Usage

```jsx
import React, { useState } from "react";
import { FormControl, Input } from "malcomponents";

function Demo() {
  const [email, setEmail] = useState("");

  return (
    <FormControl label="Your email">
      <Input value={email} onChange={e => setEmail(e.currentTarget.value)} />
    </FormControl>
  );
}
```

## Props

- **`label`**_`: string`_
- **`disabled`**_`: boolean`_
- **`error`**_`: boolean`_
- **`positive`**_`: boolean`_
