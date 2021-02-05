import React from "react";
import styled from "styled-components";

import { size } from "./constants";
import { getInputStyles } from "./styles";

const StyledTextarea = styled.textarea`
  resize: none;
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
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function Textarea(props: props): React.ReactElement {
  const {
    inputSize = "default",
    value = "",
    placeholder = "",
    disabled = false,
    error = false,
    positive = false,
    autoFocus = false,
    onChange = () => undefined,
    onBlur = () => undefined,
  } = props;

  return (
    <StyledTextarea
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

export default Textarea;
