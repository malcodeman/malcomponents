import React, { useState } from "react";
import {
  ThemeProvider,
  Button,
  FormControl,
  Spinner,
  Input
} from "../src/index";

function App() {
  const [value, setValue] = useState("input");

  return (
    <ThemeProvider>
      <Button>Button</Button>
      <FormControl label="Your email">
        <Input value={value} onChange={e => setValue(e.currentTarget.value)} />
      </FormControl>
      <Spinner />
    </ThemeProvider>
  );
}

export default App;
