import React from "react";
import styled from "styled-components";

const StyledModalFooter = styled.div`
  margin: 2rem 2rem 1rem 2rem;
  text-align: right;
  color: ${(props) => props.theme.malcode.colors.contentPrimary};
`;

type props = {
  children?: React.ReactNode;
};

function ModalFooter(props: props): React.ReactElement {
  const { children } = props;

  return (
    <StyledModalFooter data-malcomponents="modal-footer">
      {children}
    </StyledModalFooter>
  );
}

export default ModalFooter;
