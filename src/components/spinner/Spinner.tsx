import React from "react";
import styled, { keyframes, useTheme } from "styled-components";

import { spinnerProps } from "../../types";

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

function Spinner(props: spinnerProps): React.ReactElement {
  const theme = useTheme();
  const { color = theme.malcode.colors.accent, size = "1rem" } = props;

  return (
    <StyledSpinner
      {...props}
      color={color}
      size={size}
      data-malcomponents="spinner"
    />
  );
}

export default Spinner;
