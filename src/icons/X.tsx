import React from "react";

import { iconProps } from "../types";

function X(props: iconProps): React.ReactElement {
  const { color = "currentColor", size = 16, ...rest } = props;

  return (
    <svg
      width={size}
      height={size}
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default X;
