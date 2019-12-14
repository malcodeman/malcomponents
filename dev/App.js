import React, { useState } from "react";
import {
  ThemeProvider,
  Button,
  ButtonGroup,
  FormControl,
  Input,
  Notification,
  Spinner,
  Textarea
} from "../src/index";

function App() {
  const [value, setValue] = useState("input");
  const [selected, setSelected] = useState([0]);

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
      <Spinner />
      <Textarea value={value} onChange={e => setValue(e.currentTarget.value)} />
    </ThemeProvider>
  );
}

export default App;
