import React from "react";
import styled, { DefaultTheme } from "styled-components";

import { formControlProps } from "../../types";

const StyledFormControl = styled.div``;

const Label = styled.label<{ disabled: boolean }>`
  display: block;
  margin: 8px 0;
  color: ${(props) =>
    props.disabled
      ? props.theme.malcode.colors.foregroundAlt
      : props.theme.malcode.colors.foreground};
  font-size: ${(props) => props.theme.malcode.typography.size.paragraphSmall};
`;

function getColor(props: {
  error: boolean;
  positive: boolean;
  theme: DefaultTheme;
}) {
  const { error, positive } = props;

  if (error) {
    return props.theme.malcode.colors.negative;
  } else if (positive) {
    return props.theme.malcode.colors.positive;
  }
  return props.theme.malcode.colors.foregroundAlt;
}

const Caption = styled.div<{ error: boolean; positive: boolean }>`
  margin: 8px 0;
  color: ${getColor};
  font-size: ${(props) => props.theme.malcode.typography.size.paragraphXSmall};
`;

function FormControl(props: formControlProps): React.ReactElement {
  const {
    label = "",
    htmlFor = "",
    caption = "",
    disabled = false,
    error = false,
    positive = false,
    children,
  } = props;

  return (
    <StyledFormControl>
      {label && (
        <Label disabled={disabled} htmlFor={htmlFor}>
          {label}
        </Label>
      )}
      {React.cloneElement(children, {
        ...children.props,
        disabled,
        error,
        positive,
      })}
      {caption && (
        <Caption error={error} positive={positive}>
          {caption}
        </Caption>
      )}
    </StyledFormControl>
  );
}

export default FormControl;
