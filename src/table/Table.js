import React from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  display: grid;
  overflow-x: auto;
  height: 100%;
  grid-template-columns: ${props => props.gridTemplateColumns};
  border-radius: ${props => props.theme.malcode.borders.radius200};
  background-color: ${props => props.theme.malcode.colors.tableBackground};
  border: ${props => props.theme.malcode.borders.border300};
`;

function Table(props) {
  const { gridTemplateColumns, children } = props;

  return (
    <StyledTable {...props} gridTemplateColumns={gridTemplateColumns}>
      {children}
    </StyledTable>
  );
}

export default Table;
