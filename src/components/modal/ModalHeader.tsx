import React from "react";
import styled from "styled-components";

const StyledModalHeader = styled.div`
  margin: 2rem 2rem 1rem 2rem;
  color: ${(props) => props.theme.malcode.colors.contentPrimary};
`;

type props = {
  children?: React.ReactNode;
};

function ModalHeader(props: props): React.ReactElement {
  const { children } = props;

  return <StyledModalHeader>{children}</StyledModalHeader>;
}

export default ModalHeader;
