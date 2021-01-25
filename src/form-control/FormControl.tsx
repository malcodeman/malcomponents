import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.label<{ disabled: boolean }>`
  display: block;
  margin: 8px 0;
  width: 100%;
  color: ${(props) =>
    props.disabled
      ? props.theme.malcode?.colors.foregroundAlt
      : props.theme.malcode?.colors.foreground};
  ${(props) => props.theme.malcode?.typography.font250}
`;

function getColor(props) {
  const { error, positive } = props;

  if (error) {
    return props.theme.malcode?.colors.negative;
  } else if (positive) {
    return props.theme.malcode?.colors.positive;
  } else {
    return props.theme.malcode?.colors.foregroundAlt;
  }
}

const Caption = styled.div<{ error: boolean;positive:boolean }>`
  margin: 8px 0;
  color: ${getColor};
  ${(props) => props.theme.malcode?.typography.font100}
`;

function FormControl(props) {
  const { label, caption, disabled, error, positive, children } = props;

  return (
    <>
      {label && <Label disabled={disabled}>{label}</Label>}
      {cloneElement(children, { disabled, error, positive })}
      {caption && (
        <Caption error={error} positive={positive}>
          {caption}
        </Caption>
      )}
    </>
  );
}

FormControl.propTypes = {
  label: PropTypes.string,
  caption: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  positive: PropTypes.bool,
  children: PropTypes.node,
};

FormControl.defaultProps = {
  label: "",
  caption: "",
  disabled: false,
  error: false,
  positive: false,
};

export default FormControl;
