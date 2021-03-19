import React from "react";
import styled from "styled-components";

import { inputProps } from "../../types";
import { getInputStyles } from "./styles";

const StyledInput = styled.input`
  ${getInputStyles};
`;

function Input(
  props: inputProps,
  ref: React.ForwardedRef<HTMLInputElement>
): React.ReactElement {
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
      data-malcomponents="input"
    />
  );
}

export default React.forwardRef(Input);
