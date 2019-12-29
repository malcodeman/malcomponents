import React from "react";
import styled from "styled-components";

const StyledBodyCell = styled.div`
  padding: 0.5rem 1rem;
  color: ${props => props.theme.malcode.colors.contentPrimary};
  ${props => props.theme.malcode.typography.font200};
`;

function BodyCell(props) {
  const { children } = props;

  return <StyledBodyCell {...props}>{children}</StyledBodyCell>;
}

export default BodyCell;
