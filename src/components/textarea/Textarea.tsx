import React from "react";
import styled from "styled-components";

import { textareaProps } from "../../types";
import { getInputStyles } from "../input/styles";

const StyledTextarea = styled.textarea`
  resize: none;
  ${getInputStyles};
`;

function Textarea(props: textareaProps): React.ReactElement {
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
    <StyledTextarea
      {...props}
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

export default Textarea;
