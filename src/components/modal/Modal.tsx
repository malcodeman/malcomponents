import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useKeyPressEvent, useClickAway } from "react-use";

import { modalProps } from "../../types";
import XIcon from "../../icons/X";

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled.div`
  position: relative;
  width: 500px;
  margin: 1rem;
  background-color: ${(props) => props.theme.malcode.colors.backgroundPrimary};
`;

const CloseButton = styled.button`
  border: 0;
  padding: 0;
  outline: 0;
  padding: 0;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  display: flex;
  color: ${(props) => props.theme.malcode.colors.modalCloseColor};
`;

function Modal(props: modalProps): React.ReactElement {
  const {
    isOpen = false,
    mountNode = document.body,
    role = "dialog",
    onClose = () => undefined,
    children,
    ...rest
  } = props;
  const ref = React.useRef(null);

  useKeyPressEvent("Escape", onClose);
  useClickAway(ref, onClose);

  if (!isOpen) {
    return null;
  }
  return createPortal(
    <Backdrop>
      <StyledModal {...rest} ref={ref} role={role}>
        {children}
        <CloseButton onClick={onClose}>
          <XIcon />
        </CloseButton>
      </StyledModal>
    </Backdrop>,
    mountNode
  );
}

export default Modal;
