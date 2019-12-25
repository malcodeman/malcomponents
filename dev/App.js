import React, { useState } from "react";
import {
  ThemeProvider,
  Button,
  ButtonGroup,
  FormControl,
  Input,
  Notification,
  SideNavigation,
  Spinner,
  Textarea
} from "../src/index";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton
} from "../src/modal";

function App() {
  const [value, setValue] = useState("input");
  const [selected, setSelected] = useState([0]);
  const [modal, setModal] = useState(false);
  const [activeItemId, setActiveItemId] = React.useState("#home");

  return (
    <ThemeProvider>
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
      <FormControl label="Your email">
        <Input value={value} onChange={e => setValue(e.currentTarget.value)} />
      </FormControl>
      <Notification>Notification</Notification>
      <SideNavigation
        activeItemId={activeItemId}
        items={[
          { title: "Home", itemId: "#home" },
          { title: "Account", itemId: "#account" }
        ]}
        onChange={({ event, item }) => {
          setActiveItemId(item.itemId);
        }}
      />
      <Spinner />
      <Textarea value={value} onChange={e => setValue(e.currentTarget.value)} />
      <Button onClick={() => setModal(true)}>Open modal</Button>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
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
    </ThemeProvider>
  );
}

export default App;
