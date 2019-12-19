# `Modal`

## Usage

```jsx
import React, { useState } from "react";
import { Modal } from "malcomponents";

function Demo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader>Some Header</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam
          nisl, tempor ut varius sit amet, sodales sit amet mauris. Aliquam
          vitae sapien quis eros finibus aliquet.
        </ModalBody>
        <ModalFooter>
          <ModalButton>Close</ModalButton>
          <ModalButton>Confirm</ModalButton>
        </ModalFooter>
      </Modal>
    </>
  );
}
```

## Props

- **`onClose`**_`: function`_
- **`mountNode`**_`: element`_
- **`isOpen`**_`: boolean`_
- **`size`**_`: string`_
