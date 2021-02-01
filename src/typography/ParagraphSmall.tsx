import React from "react";
import styled, { css } from "styled-components";

const StyledParagraph = styled.p<{ mt?: string; mb?: string }>`
  color: ${(props) => props.theme.malcode.colors.contentPrimary};
  font-size: ${(props) => props.theme.malcode.typography.size.paragraphSmall};
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

type props = {
  mt?: string;
  mb?: string;
  children?: React.ReactNode;
};

function ParagraphSmall(props: props) {
  const { children } = props;

  return <StyledParagraph {...props}>{children}</StyledParagraph>;
}

export default ParagraphSmall;
