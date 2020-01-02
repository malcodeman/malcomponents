import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  padding: ${props => props.theme.malcode.sizing.scale500} 0;
  border-bottom: 1px solid ${props => props.theme.malcode.colors.border};
  background-color: ${props => props.theme.malcode.colors.headerNavigationFill};
  ${props => props.theme.malcode.typography.font300}
`;

function HeaderNavigation(props) {
  const { children } = props;

  return <Nav {...props}>{children}</Nav>;
}

export default HeaderNavigation;
