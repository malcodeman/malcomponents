import React, { useState } from "react";
import {
  ThemeProvider,
  Button,
  FormControl,
  Spinner,
  Input,
  Textarea
} from "../src/index";

function App() {
  const [value, setValue] = useState("input");

  return (
    <ThemeProvider>
      <Button>Button</Button>
      <FormControl label="Your email" positive>
        <Input value={value} onChange={e => setValue(e.currentTarget.value)} />
      </FormControl>
      <Spinner />
      <Textarea value={value} onChange={e => setValue(e.currentTarget.value)} />
    </ThemeProvider>
  );
}

export default App;
