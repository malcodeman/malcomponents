import React from "react";
import styled, { css } from "styled-components";

import { typographyProps } from "../../types";

const StyledHeading = styled.h4<{ mt?: string; mb?: string }>`
  color: ${(props) => props.theme.malcode.colors.contentPrimary};
  font-size: ${(props) => props.theme.malcode.typography.size.headingMedium};
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

function HeadingMedium(props: typographyProps): React.ReactElement {
  const { children } = props;

  return (
    <StyledHeading {...props} data-malcomponents="heading-medium">
      {children}
    </StyledHeading>
  );
}

export default HeadingMedium;
