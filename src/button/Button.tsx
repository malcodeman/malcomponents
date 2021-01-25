import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Spinner from "../spinner/Spinner";
import { KIND, SIZE } from "./constants";

function getFontStyles(props) {
  const { size } = props;

  switch (size) {
    default:
    case SIZE.default:
      return props.theme.malcode?.typography.font450;
    case SIZE.compact:
      return props.theme.malcode?.typography.font350;
    case SIZE.large:
      return props.theme.malcode?.typography.font550;
  }
}

function getKindStyles(props) {
  const { kind, isSelected } = props;

  switch (kind) {
    default:
    case KIND.primary:
      if (isSelected) {
        return css`
          background-color: ${props.theme.malcode?.colors
            .buttonPrimarySelectedFill};
          color: ${props.theme.malcode?.colors.buttonPrimarySelectedText};
        `;
      }
      return css`
        background-color: ${props.theme.malcode?.colors.buttonPrimaryFill};
        color: ${props.theme.malcode?.colors.buttonPrimaryText};
      `;
    case KIND.secondary:
      if (isSelected) {
        return css`
          background-color: ${props.theme.malcode?.colors
            .buttonSecondarySelectedFill};
          color: ${props.theme.malcode?.colors.buttonSecondarySelectedText};
        `;
      }
      return css`
        background-color: ${props.theme.malcode?.colors.buttonSecondaryFill};
        color: ${props.theme.malcode?.colors.buttonSecondaryText};
      `;
  }
}

const StyledButton = styled.button`
  border: 0;
  cursor: pointer;
  outline: 0;
  padding: 0.5rem 1rem;
  :disabled {
    cursor: not-allowed;
    background-color: ${(props) =>
      props.theme.malcode?.colors.buttonDisabledFill};
    color: ${(props) => props.theme.malcode?.colors.buttonDisabledText};
  }
  ${getFontStyles};
  ${getKindStyles};
`;



function Button(props) {
  const { kind, size, disabled, isLoading, onClick, children } = props;

  function internalOnClick() {
    if (!isLoading) {
      onClick();
    }
  }

  return (
    <StyledButton
      {...props}
      kind={kind}
      size={size}
      disabled={disabled}
      onClick={internalOnClick}
    >
      {isLoading ? <Spinner /> : children}
    </StyledButton>
  );
}

Button.propTypes = {
  kind: PropTypes.oneOf([KIND.primary, KIND.secondary]),
  size: PropTypes.oneOf([SIZE.default, SIZE.compact, SIZE.large]),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  kind: KIND.primary,
  size: SIZE.default,
  disabled: false,
  isLoading: false,
  isSelected: false,
  onClick: () => {},
};

export default Button;
