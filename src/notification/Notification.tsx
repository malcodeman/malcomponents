import React from "react";
import styled, { DefaultTheme } from "styled-components";

import { kind } from "./constants";

function getBackgroundColorStyles(props: { kind: kind; theme: DefaultTheme }) {
  const { kind } = props;

  switch (kind) {
    default:
    case "info":
      return props.theme.malcode?.colors.notificationInfoBackground;
    case "positive":
      return props.theme.malcode?.colors.notificationPositiveBackground;
    case "warning":
      return props.theme.malcode?.colors.notificationWarningBackground;
    case "negative":
      return props.theme.malcode?.colors.notificationNegativeBackground;
  }
}

function getColorStyles(props: { kind: kind; theme: DefaultTheme }) {
  const { kind } = props;

  switch (kind) {
    default:
    case "info":
      return props.theme.malcode?.colors.notificationInfoText;
    case "positive":
      return props.theme.malcode?.colors.notificationPositiveText;
    case "warning":
      return props.theme.malcode?.colors.notificationWarningText;
    case "negative":
      return props.theme.malcode?.colors.notificationNegativeText;
  }
}

const StyledNofitication = styled.div<{
  kind: kind;
  shouldFitContainer: boolean;
}>`
  padding: 1rem;
  width: ${(props) => (props.shouldFitContainer ? "100%" : "18rem")};
  background-color: ${getBackgroundColorStyles};
  color: ${getColorStyles};
  font-size: ${(props) => props.theme.malcode?.typography.size.paragraphSmall};
`;

type props = {
  kind?: kind;
  shouldFitContainer?: boolean;
  children?: React.ReactNode;
};

function Notification(props: props): React.ReactElement {
  const { kind = "info", shouldFitContainer = false, children } = props;

  return (
    <StyledNofitication kind={kind} shouldFitContainer={shouldFitContainer}>
      {children}
    </StyledNofitication>
  );
}

export default Notification;
