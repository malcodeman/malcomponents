import React, { Children, isValidElement, cloneElement } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { SIZE, KIND } from "../button/constants";

const StyledButtonGroup = styled.div`
  display: flex;
`;

function ButtonGroup(props) {
  const { children, kind, size, disabled, selected, onClick } = props;

  function isSelected(selected, index) {
    if (!Array.isArray(selected) && typeof selected !== "number") {
      return false;
    }
    if (Array.isArray(selected)) {
      return selected.includes(index);
    }
    return selected === index;
  }

  return (
    <StyledButtonGroup>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return null;
        }
        return cloneElement(child, {
          ...child.props,
          kind,
          size,
          disabled: disabled || child.props.disabled,
          isSelected: isSelected(selected, index),
          onClick: event => {
            if (disabled) {
              return;
            }
            if (child.props.onClick) {
              child.props.onClick(event);
            }
            if (onClick) {
              onClick(event, index);
            }
          }
        });
      })}
    </StyledButtonGroup>
  );
}

ButtonGroup.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.number),
  kind: PropTypes.oneOf([KIND.primary, KIND.secondary]),
  size: PropTypes.oneOf([SIZE.default, SIZE.compact, SIZE.large]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

ButtonGroup.defaultProps = {
  selected: [],
  kind: KIND.secondary,
  size: SIZE.default,
  disabled: false,
  onClick: () => {}
};

export default ButtonGroup;
