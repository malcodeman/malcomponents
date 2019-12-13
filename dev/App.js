import React, { useState } from "react";
import {
  ThemeProvider,
  Button,
  FormControl,
  Input,
  Notification,
  Spinner,
  Textarea
} from "../src/index";

function App() {
  const [value, setValue] = useState("input");

  return (
    <ThemeProvider>
      <Button>Button</Button>
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
