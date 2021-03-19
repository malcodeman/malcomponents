import React from "react";
import styled, { css } from "styled-components";

import { typographyProps } from "../../types";

const StyledDisplay = styled.div<{ mt?: string; mb?: string }>`
  color: ${(props) => props.theme.malcode.colors.contentPrimary};
  font-size: ${(props) => props.theme.malcode.typography.size.displaySmall};
  font-weight: bold;
  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}
  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}
`;

function DisplaySmall(props: typographyProps): React.ReactElement {
  const { children } = props;

  return (
    <StyledDisplay {...props} data-malcomponents="display-small">
      {children}
    </StyledDisplay>
  );
}

export default DisplaySmall;
