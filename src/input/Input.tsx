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
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  positive?: boolean;
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: props) {
  const {
    inputSize = "default",
    value = "",
    placeholder = "",
    disabled = false,
    error = false,
    positive = false,
    autoFocus = false,
    onChange = () => {},
    onBlur = () => {},
  } = props;

  return (
    <StyledInput
      {...props}
      inputSize={inputSize}
      value={value}
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

export default Input;
