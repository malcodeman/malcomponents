import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  margin: 8px 0;
  width: 100%;
  color: ${props =>
    props.disabled
      ? props.theme.malcode.colors.foregroundAlt
      : props.theme.malcode.colors.foreground};
  ${props => props.theme.malcode.typography.font250}
`;

function FormControl(props) {
  const { label, disabled, error, positive, children } = props;

  return (
    <>
      {label && <Label disabled={disabled}>{label}</Label>}
      {cloneElement(children, { disabled, error, positive })}
    </>
  );
}

FormControl.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  positive: PropTypes.bool
};

FormControl.defaultProps = {
  label: "",
  disabled: false,
  error: false,
  positive: false
};

export default FormControl;
