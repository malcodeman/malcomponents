import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import { DarkTheme, LightTheme } from "../src/themes";
import ThemeProvider from "../src/components/theme-provider/ThemeProvider";
import Button from "../src/components/button/Button";
import Modal from "../src/components/modal/Modal";
import ModalHeader from "../src/components/modal/ModalHeader";
import ModalBody from "../src/components/modal/ModalBody";
import ModalButton from "../src/components/modal/ModalButton";
import ModalFooter from "../src/components/modal/ModalFooter";

export default { title: "Modal", decorators: [withKnobs] };

export function Default(): React.ReactElement {
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;
  const [isOpen, setIsOpen] = React.useState(false);

  function onClose() {
    setIsOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
          faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
        </ModalBody>
        <ModalFooter>
          <ModalButton kind="secondary" onClick={onClose}>
            Cancel
          </ModalButton>
          <ModalButton onClick={onClose}>OK</ModalButton>
        </ModalFooter>
      </Modal>
    </ThemeProvider>
  );
}
