import React from "react";
import styled, { DefaultTheme } from "styled-components";

import { notificationProps, notificationKind } from "../../types";

function getBackgroundColorStyles(props: {
  kind: notificationKind;
  theme: DefaultTheme;
}) {
  const { kind } = props;

  switch (kind) {
    default:
    case "info":
      return props.theme.malcode.colors.notificationInfoBackground;
    case "positive":
      return props.theme.malcode.colors.notificationPositiveBackground;
    case "warning":
      return props.theme.malcode.colors.notificationWarningBackground;
    case "negative":
      return props.theme.malcode.colors.notificationNegativeBackground;
  }
}

function getColorStyles(props: {
  kind: notificationKind;
  theme: DefaultTheme;
}) {
  const { kind } = props;

  switch (kind) {
    default:
    case "info":
      return props.theme.malcode.colors.notificationInfoText;
    case "positive":
      return props.theme.malcode.colors.notificationPositiveText;
    case "warning":
      return props.theme.malcode.colors.notificationWarningText;
    case "negative":
      return props.theme.malcode.colors.notificationNegativeText;
  }
}

const StyledNofitication = styled.div<{
  kind: notificationKind;
  shouldFitContainer: boolean;
}>`
  padding: 1rem;
  width: ${(props) => (props.shouldFitContainer ? "100%" : "18rem")};
  background-color: ${getBackgroundColorStyles};
  color: ${getColorStyles};
  font-size: ${(props) => props.theme.malcode.typography.size.paragraphSmall};
`;

function Notification(props: notificationProps): React.ReactElement {
  const { kind = "info", shouldFitContainer = false, children } = props;

  return (
    <StyledNofitication
      kind={kind}
      shouldFitContainer={shouldFitContainer}
      data-malcomponents="notification"
    >
      {children}
    </StyledNofitication>
  );
}

export default Notification;
