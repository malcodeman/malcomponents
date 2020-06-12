import { css } from "styled-components";

import { SIZE } from "./constants";

function getFont(props) {
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
      color: ${(props) => props.theme.malcode.colors.foreground};
      border-color: ${(props) => props.theme.malcode.colors.inputBorderError};
      background-color: ${(props) => props.theme.malcode.colors.inputFillError};
    `;
  } else if (positive) {
    return css`
      color: ${(props) => props.theme.malcode.colors.foreground};
      border-color: ${(props) =>
        props.theme.malcode.colors.inputBorderPositive};
      background-color: ${(props) =>
        props.theme.malcode.colors.inputFillPositive};
    `;
  } else {
    return css`
      color: ${(props) => props.theme.malcode.colors.foreground};
      border-color: ${(props) => props.theme.malcode.colors.inputFill};
      background-color: ${(props) => props.theme.malcode.colors.inputFill};
    `;
  }
}

export const getInputStyles = css`
  border-width: 2px;
  border-style: solid;
  outline: 0;
  max-width: 100%;
  padding: 0.5rem 1rem;
  width: 100%;
  :disabled {
    cursor: not-allowed;
    background-color: ${(props) =>
      props.theme.malcode.colors.inputFillDisabled};
    border-color: ${(props) => props.theme.malcode.colors.inputFillDisabled};
    color: ${(props) => props.theme.malcode.colors.inputTextDisabled};
  }
  :disabled::placeholder {
    color: ${(props) => props.theme.malcode.colors.inputTextDisabled};
  }
  :focus {
    background-color: ${(props) => props.theme.malcode.colors.inputFillActive};
    border-color: ${(props) => props.theme.malcode.colors.borderFocus};
    color: ${(props) => props.theme.malcode.colors.foreground};
  }
  ::placeholder {
    color: ${(props) => props.theme.malcode.colors.foregroundAlt};
  }
  ${getFont};
  ${getColors};
`;
