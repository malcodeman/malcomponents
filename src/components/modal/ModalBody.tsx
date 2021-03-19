import React from "react";
import styled from "styled-components";

const StyledModalBody = styled.div`
  margin: 1rem 2rem 1rem 2rem;
  color: ${(props) => props.theme.malcode.colors.contentPrimary};
`;

type props = {
  children?: React.ReactNode;
};

function ModalBody(props: props): React.ReactElement {
  const { children } = props;

  return (
    <StyledModalBody data-malcomponents="modal-body">
      {children}
    </StyledModalBody>
  );
}

export default ModalBody;
