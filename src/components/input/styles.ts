import { css, DefaultTheme } from "styled-components";

import { inputSize } from "../../types";

function getFontStyles(props: { inputSize: inputSize; theme: DefaultTheme }) {
  const { inputSize } = props;

  switch (inputSize) {
    default:
    case "default":
      return props.theme.malcode.typography.size.paragraphLarge;
    case "compact":
      return props.theme.malcode.typography.size.paragraphMedium;
    case "large":
      return props.theme.malcode.typography.size.headingXSmall;
  }
}

function getColorStyles(props: { error: boolean; positive: boolean }) {
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
  }
  return css`
    color: ${(props) => props.theme.malcode.colors.foreground};
    border-color: ${(props) => props.theme.malcode.colors.inputFill};
    background-color: ${(props) => props.theme.malcode.colors.inputFill};
  `;
}

export const getInputStyles = css<{
  inputSize: inputSize;
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
  font-size: ${getFontStyles};
  ${getColorStyles};
`;
