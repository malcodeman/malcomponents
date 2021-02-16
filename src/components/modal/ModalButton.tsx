import React from "react";
import styled from "styled-components";

import { buttonProps } from "../../types";
import Button from "../button/Button";

const StyledModalButton = styled(Button)`
  :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

function ModalButton(props: buttonProps): React.ReactElement {
  const { children, ...rest } = props;

  return <StyledModalButton {...rest}>{children}</StyledModalButton>;
}

export default ModalButton;
