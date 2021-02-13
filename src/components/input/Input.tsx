import React from "react";
import styled from "styled-components";

import { size } from "./constants";
import { getInputStyles } from "./styles";

const StyledInput = styled.input`
  ${getInputStyles};
`;

type props = {
  inputSize?: size;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  positive?: boolean;
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: props, ref: React.ForwardedRef<HTMLInputElement>): any {
  const {
    inputSize = "default",
    placeholder = "",
    disabled = false,
    error = false,
    positive = false,
    autoFocus = false,
    onChange = () => undefined,
    onBlur = () => undefined,
  } = props;

  return (
    <StyledInput
      {...props}
      ref={ref}
      inputSize={inputSize}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      positive={positive}
      autoFocus={autoFocus}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

export default React.forwardRef(Input);
