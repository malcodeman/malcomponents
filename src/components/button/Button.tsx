import React from "react";
import styled, { css, DefaultTheme } from "styled-components";

import Spinner from "../spinner/Spinner";
import { kind, size } from "./constants";

function getFontStyles(props: { size: size; theme: DefaultTheme }) {
  const { size } = props;

  switch (size) {
    default:
    case "default":
      return props.theme.malcode.typography.size.paragraphLarge;
    case "compact":
      return props.theme.malcode.typography.size.paragraphMedium;
    case "large":
      return props.theme.malcode.typography.size.headingXSmall;
  }
}

function getKindStyles(props: {
  kind: kind;
  isSelected: boolean;
  theme: DefaultTheme;
}) {
  const { kind, isSelected } = props;

  switch (kind) {
    default:
    case "primary":
      if (isSelected) {
        return css`
          background-color: ${props.theme.malcode.colors
            .buttonPrimarySelectedFill};
          color: ${props.theme.malcode.colors.buttonPrimarySelectedText};
        `;
      }
      return css`
        background-color: ${props.theme.malcode.colors.buttonPrimaryFill};
        color: ${props.theme.malcode.colors.buttonPrimaryText};
      `;
    case "secondary":
      if (isSelected) {
        return css`
          background-color: ${props.theme.malcode.colors
            .buttonSecondarySelectedFill};
          color: ${props.theme.malcode.colors.buttonSecondarySelectedText};
        `;
      }
      return css`
        background-color: ${props.theme.malcode.colors.buttonSecondaryFill};
        color: ${props.theme.malcode.colors.buttonSecondaryText};
      `;
  }
}

const StyledButton = styled.button<{
  kind: kind;
  size: size;
  isSelected: boolean;
  shouldFitContainer: boolean;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
  outline: 0;
  padding: 0.5rem 1rem;
  width: ${(props) => (props.shouldFitContainer ? "100%" : "auto")};
  :disabled {
    cursor: not-allowed;
    background-color: ${(props) =>
      props.theme.malcode.colors.buttonDisabledFill};
    color: ${(props) => props.theme.malcode.colors.buttonDisabledText};
  }
  font-size: ${getFontStyles};
  ${getKindStyles};
`;

type props = {
  kind?: kind;
  size?: size;
  disabled?: boolean;
  isLoading?: boolean;
  isSelected?: boolean;
  shouldFitContainer?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};

function Button(
  props: props,
  ref: React.ForwardedRef<HTMLButtonElement>
): React.ReactElement {
  const {
    kind = "primary",
    size = "default",
    disabled = false,
    isLoading = false,
    isSelected = false,
    shouldFitContainer = false,
    children,
    onClick = () => undefined,
  } = props;

  function internalOnClick() {
    if (!isLoading) {
      onClick();
    }
  }

  return (
    <StyledButton
      {...props}
      ref={ref}
      kind={kind}
      size={size}
      disabled={disabled}
      isSelected={isSelected}
      shouldFitContainer={shouldFitContainer}
      onClick={internalOnClick}
    >
      {isLoading ? <Spinner /> : children}
    </StyledButton>
  );
}

export default React.forwardRef(Button);