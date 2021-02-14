import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { DarkTheme, LightTheme } from "../src/themes";

import ThemeProvider from "../src/ThemeProvider";
import Input from "../src/components/input/Input";
import Button from "../src/components/button/Button";

export default { title: "Misc", decorators: [withKnobs] };

export function ReactHookForm(): React.ReactElement {
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;
  const { register, handleSubmit } = useForm();

  function onSubmit(data: { firstName: string; lastName: string }) {
    console.log(data);
  }

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="firstName" ref={register} />
        <Input name="lastName" ref={register} />
        <Button>Submit</Button>
      </form>
    </ThemeProvider>
  );
}

export function ButtonRef(): React.ReactElement {
  const darkTheme = boolean("darkTheme", false);
  const theme = darkTheme ? DarkTheme : LightTheme;
  const ref: React.Ref<HTMLButtonElement> = React.createRef();

  function handleOnClick() {
    console.log(ref);
  }

  return (
    <ThemeProvider theme={theme}>
      <Button ref={ref}>Ref button</Button>
      <Button onClick={handleOnClick}>Click</Button>
    </ThemeProvider>
  );
}
