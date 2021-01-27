import { css, DefaultTheme } from "styled-components";

import { size } from "./constants";

function getFontStyles(props: { inputSize: size; theme: DefaultTheme }) {
  const { inputSize } = props;

  switch (inputSize) {
    default:
    case "default":
      return props.theme.malcode?.typography.font450;
    case "compact":
      return props.theme.malcode?.typography.font350;
    case "large":
      return props.theme.malcode?.typography.font550;
  }
}

function getColorStyles(props: { error: boolean; positive: boolean }) {
  const { error, positive } = props;

  if (error) {
    return css`
      color: ${(props) => props.theme.malcode?.colors.foreground};
      border-color: ${(props) => props.theme.malcode?.colors.inputBorderError};
      background-color: ${(props) =>
        props.theme.malcode?.colors.inputFillError};
    `;
  } else if (positive) {
    return css`
      color: ${(props) => props.theme.malcode?.colors.foreground};
      border-color: ${(props) =>
        props.theme.malcode?.colors.inputBorderPositive};
      background-color: ${(props) =>
        props.theme.malcode?.colors.inputFillPositive};
    `;
  }
  return css`
    color: ${(props) => props.theme.malcode?.colors.foreground};
    border-color: ${(props) => props.theme.malcode?.colors.inputFill};
    background-color: ${(props) => props.theme.malcode?.colors.inputFill};
  `;
}

export const getInputStyles = css<{
  inputSize: size;
  error: boolean;
  positive: boolean;
}>`
  border-width: 2px;
  border-style: solid;
  outline: 0;
  max-width: 100%;
  padding: 0.5rem 1rem;
  width: 100%;
  :disabled {
    cursor: not-allowed;
    background-color: ${(props) =>
      props.theme.malcode?.colors.inputFillDisabled};
    border-color: ${(props) => props.theme.malcode?.colors.inputFillDisabled};
    color: ${(props) => props.theme.malcode?.colors.inputTextDisabled};
  }
  :disabled::placeholder {
    color: ${(props) => props.theme.malcode?.colors.inputTextDisabled};
  }
  :focus {
    background-color: ${(props) => props.theme.malcode?.colors.inputFillActive};
    border-color: ${(props) => props.theme.malcode?.colors.borderFocus};
    color: ${(props) => props.theme.malcode?.colors.foreground};
  }
  ::placeholder {
    color: ${(props) => props.theme.malcode?.colors.foregroundAlt};
  }
  ${getFontStyles}
  ${getColorStyles}
`;
