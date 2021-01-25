import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { KIND } from "./constants";

function getBackgroundColor(props) {
  const { kind } = props;

  switch (kind) {
    default:
    case KIND.info:
      return props.theme.malcode?.colors.notificationInfoBackground;
    case KIND.positive:
      return props.theme.malcode?.colors.notificationPositiveBackground;
    case KIND.warning:
      return props.theme.malcode?.colors.notificationWarningBackground;
    case KIND.negative:
      return props.theme.malcode?.colors.notificationNegativeBackground;
  }
}

function getColor(props) {
  const { kind } = props;

  switch (kind) {
    default:
    case KIND.info:
      return props.theme.malcode?.colors.notificationInfoText;
    case KIND.positive:
      return props.theme.malcode?.colors.notificationPositiveText;
    case KIND.warning:
      return props.theme.malcode?.colors.notificationWarningText;
    case KIND.negative:
      return props.theme.malcode?.colors.notificationNegativeText;
  }
}

const StyledNofitication = styled.div<{ kind: string }>`
  padding: 1rem;
  background-color: ${getBackgroundColor};
  color: ${getColor};
  ${(props) => props.theme.malcode?.typography.font250}
`;

function Notification(props) {
  const { kind, children } = props;

  return <StyledNofitication kind={kind}>{children}</StyledNofitication>;
}

Notification.propTypes = {
  kind: PropTypes.oneOf([
    KIND.info,
    KIND.positive,
    KIND.warning,
    KIND.negative,
  ]),
  children: PropTypes.node,
};

Notification.defaultProps = {
  kind: KIND.info,
};

export default Notification;
