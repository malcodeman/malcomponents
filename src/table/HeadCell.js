import React from "react";
import styled from "styled-components";

const StyledHeadCell = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${props =>
    props.theme.malcode.colors.tableHeadBackgroundColor};
  color: ${props => props.theme.malcode.colors.contentPrimary};
  box-shadow: ${props => props.theme.malcode.lighting.shadow400};
  ${props => props.theme.malcode.typography.font350};
`;

function HeadCell(props) {
  const { children } = props;

  return <StyledHeadCell {...props}>{children}</StyledHeadCell>;
}

export default HeadCell;
