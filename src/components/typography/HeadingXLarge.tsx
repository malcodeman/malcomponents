import React from "react";
import styled, { css } from "styled-components";

import { typographyProps } from "../../types";

const StyledHeading = styled.h2<{ mt?: string; mb?: string }>`
  color: ${(props) => props.theme.malcode.colors.contentPrimary};
  font-size: ${(props) => props.theme.malcode.typography.size.headingXLarge};
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

function HeadingXLarge(props: typographyProps): React.ReactElement {
  const { children } = props;

  return <StyledHeading {...props}>{children}</StyledHeading>;
}

export default HeadingXLarge;
