import React from "react";
import styled, { keyframes, useTheme } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div<{ size: string }>`
  animation: ${rotate} 1s linear infinite;
  border-radius: 50%;
  border-left: 2px solid transparent;
  cursor: wait;
  border-top: 2px solid ${(props) => props.color};
  border-right: 2px solid ${(props) => props.color};
  border-bottom: 2px solid ${(props) => props.color};
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;

type props = {
  color?: string;
  size?: string;
};

function Spinner(props: props): React.ReactElement {
  const theme = useTheme();
  const { color = theme.malcode.colors.accent, size = "1rem" } = props;

  return <StyledSpinner {...props} color={color} size={size} />;
}

export default Spinner;
