import React from "react";
import { ThemeProvider, Spinner, Button } from "../src/index";

function App() {
  return (
    <ThemeProvider>
      <Button>Button</Button>
      <Spinner />
    </ThemeProvider>
  );
}

export default App;
