import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { ALIGN } from "./constants";

const StyledNavigationList = styled.ul`
  display: flex;
  flex-grow: 1;
  list-style-type: none;
  margin: 0;
  justify-content: ${props => props.align};
  padding: 0 ${props => props.theme.malcode.sizing.scale800};
  &:first-child {
    padding: 0;
  }
  &:last-child {
    padding: 0;
  }
`;

function NavigationList(props) {
  const { align, children } = props;

  return (
    <StyledNavigationList {...props} align={align}>
      {children}
    </StyledNavigationList>
  );
}

NavigationList.propTypes = {
  align: PropTypes.oneOf([ALIGN.center, ALIGN.left, ALIGN.right])
};

export default NavigationList;
