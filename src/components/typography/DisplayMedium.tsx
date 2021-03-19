import React from "react";
import styled, { css } from "styled-components";

import { typographyProps } from "../../types";

const StyledDisplay = styled.div<{ mt?: string; mb?: string }>`
  color: ${(props) => props.theme.malcode.colors.contentPrimary};
  font-size: ${(props) => props.theme.malcode.typography.size.displayMedium};
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

function DisplayMedium(props: typographyProps): React.ReactElement {
  const { children } = props;

  return (
    <StyledDisplay {...props} data-malcomponents="display-medium">
      {children}
    </StyledDisplay>
  );
}

export default DisplayMedium;
