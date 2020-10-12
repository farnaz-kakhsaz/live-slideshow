import React from "react";
import PropTypes from "prop-types";
// Material-UI
import TextField from "@material-ui/core/TextField";

export default function TextFieldBase({
  type,
  name,
  value,
  onChange,
  label,
  variant,
  color,
  ...rest
}) {
  return (
    <TextField
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      variant={variant}
      color={color}
      {...rest}
    />
  );
}

TextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
};
