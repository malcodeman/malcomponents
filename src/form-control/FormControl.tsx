import React from "react";
import styled, { DefaultTheme } from "styled-components";

const StyledFormControl = styled.div``;

const Label = styled.label<{ disabled: boolean }>`
  display: block;
  margin: 8px 0;
  color: ${(props) =>
    props.disabled
      ? props.theme.malcode?.colors.foregroundAlt
      : props.theme.malcode?.colors.foreground};
  ${(props) => props.theme.malcode?.typography.font250}
`;

function getColor(props: {
  error: boolean;
  positive: boolean;
  theme: DefaultTheme;
}) {
  const { error, positive } = props;

  if (error) {
    return props.theme.malcode?.colors.negative;
  } else if (positive) {
    return props.theme.malcode?.colors.positive;
  }
  return props.theme.malcode?.colors.foregroundAlt;
}

const Caption = styled.div<{ error: boolean; positive: boolean }>`
  margin: 8px 0;
  color: ${getColor};
  ${(props) => props.theme.malcode?.typography.font100}
`;

type props = {
  label?: string;
  htmlFor?: string;
  caption?: string;
  disabled?: boolean;
  error?: boolean;
  positive?: boolean;
  children?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

function FormControl(props: props) {
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
      {React.cloneElement(children, { disabled, error, positive })}
      {caption && (
        <Caption error={error} positive={positive}>
          {caption}
        </Caption>
      )}
    </StyledFormControl>
  );
}

export default FormControl;
