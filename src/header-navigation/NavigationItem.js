import React from "react";
import styled from "styled-components";

const StyledNavigationItem = styled.li`
  align-self: center;
  padding-left: ${props => props.theme.malcode.sizing.scale800};
`;

function NavigationItem(props) {
  const { children } = props;

  return <StyledNavigationItem {...props}>{children}</StyledNavigationItem>;
}

export default NavigationItem;
