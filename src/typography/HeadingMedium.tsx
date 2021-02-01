import React from "react";
import styled, { css } from "styled-components";

const StyledHeading = styled.h4<{ mt?: string; mb?: string }>`
  color: ${(props) => props.theme.malcode.colors.contentPrimary};
  font-size: ${(props) => props.theme.malcode.typography.size.headingMedium};
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

function HeadingMedium(props: props) {
  const { children } = props;

  return <StyledHeading {...props}>{children}</StyledHeading>;
}

export default HeadingMedium;
