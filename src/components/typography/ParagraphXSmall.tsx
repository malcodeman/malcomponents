import React from "react";
import styled, { css } from "styled-components";

import { typographyProps } from "../../types";

const StyledParagraph = styled.p<{ mt?: string; mb?: string }>`
  color: ${(props) => props.theme.malcode.colors.contentPrimary};
  font-size: ${(props) => props.theme.malcode.typography.size.paragraphXSmall};
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

function ParagraphXSmall(props: typographyProps): React.ReactElement {
  const { children } = props;

  return (
    <StyledParagraph {...props} data-malcomponents="paragraph-x-small">
      {children}
    </StyledParagraph>
  );
}

export default ParagraphXSmall;
