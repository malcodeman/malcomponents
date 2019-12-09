import React, { useState } from "react";
import { ThemeProvider, Spinner, Input, Button } from "../src/index";

function App() {
  const [value, setValue] = useState("input");

  return (
    <ThemeProvider>
      <Button>Button</Button>
      <Input
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
      ></Input>
      <Spinner />
    </ThemeProvider>
  );
}

export default App;
