# `Table`

## Usage

```jsx
import React from "react";
import { Table, HeadCell, BodyCell } from "malcomponents/table";

function Demo() {
  return (
    <Table gridTemplateColumns="1fr 1fr">
      <HeadCell>Col 1</HeadCell>
      <HeadCell>Col 2</HeadCell>
      <BodyCell>Row 1</BodyCell>
      <BodyCell>Row 1</BodyCell>
      <BodyCell>Row 2</BodyCell>
      <BodyCell>Row 2</BodyCell>
    </Table>
  );
}
```
