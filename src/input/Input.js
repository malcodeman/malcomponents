import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { SIZE } from "./constants";

function getFontStyles(props) {
  const { size } = props;

  switch (size) {
    default:
    case SIZE.default:
      return props.theme.malcode.typography.font300;
    case SIZE.compact:
      return props.theme.malcode.typography.font200;
    case SIZE.large:
      return props.theme.malcode.typography.font400;
  }
}

function getColors(props) {
  const { error, positive } = props;

  if (error) {
    return css`
      color: ${props => props.theme.malcode.colors.foreground};
      border-color: ${props => props.theme.malcode.colors.inputBorderError};
      background-color: ${props => props.theme.malcode.colors.inputFillError};
    `;
  } else if (positive) {
    return css`
      color: ${props => props.theme.malcode.colors.foreground};
      border-color: ${props => props.theme.malcode.colors.inputBorderPositive};
      background-color: ${props =>
        props.theme.malcode.colors.inputFillPositive};
    `;
  } else {
    return css`
      color: ${props => props.theme.malcode.colors.foreground};
      border-color: ${props => props.theme.malcode.colors.inputFill};
      background-color: ${props => props.theme.malcode.colors.inputFill};
    `;
  }
}

const StyledInput = styled.input`
  border-width: 2px;
  border-style: solid;
  outline: 0;
  max-width: 100%;
  padding: 0.5rem 1rem;
  width: 100%;
  :disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.malcode.colors.inputFillDisabled};
    border-color: ${props => props.theme.malcode.colors.inputFillDisabled};
    color: ${props => props.theme.malcode.colors.inputTextDisabled};
  }
  :disabled::placeholder {
    color: ${props => props.theme.malcode.colors.inputTextDisabled};
  }
  :focus {
    background-color: ${props => props.theme.malcode.colors.inputFillActive};
    border-color: ${props => props.theme.malcode.colors.borderFocus};
    color: ${props => props.theme.malcode.colors.foreground};
  }
  ::placeholder {
    color: ${props => props.theme.malcode.colors.foregroundAlt};
  }
  ${getFontStyles};
  ${getColors};
`;

function Input(props) {
  const {
    size,
    value,
    placeholder,
    disabled,
    error,
    positive,
    onChange
  } = props;

  return (
    <StyledInput
      {...props}
      size={size}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      positive={positive}
      onChange={onChange}
    ></StyledInput>
  );
}

Input.propTypes = {
  size: PropTypes.oneOf([SIZE.default, SIZE.compact, SIZE.large]),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  positive: PropTypes.bool,
  onChange: PropTypes.func
};

Input.defaultProps = {
  size: SIZE.default,
  value: "",
  placeholder: "",
  disabled: false,
  error: false,
  positive: false,
  onChange: () => {}
};

export default Input;
