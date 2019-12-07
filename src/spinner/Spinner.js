import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  animation ${rotate} 1s linear infinite;
  border-radius: 50%;
  border-left: 2px solid ${props => props.color};
  border-top: 2px solid transparent;
  border-right: 2px solid ${props => props.color};
  border-bottom: 2px solid ${props => props.color};
  height: ${props => props.size};
  width: ${props => props.size};
`;

function Spinner(props) {
  const { color, size } = props;

  return <StyledSpinner color={color} size={size} {...props} />;
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

Spinner.defaultProps = {
  color: "currentColor",
  size: "1rem"
};

export default Spinner;
