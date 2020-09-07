import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function CheckboxInput({ value, name, title, handleChange }) {
  return (
    <FormControlLabel
      control={<Checkbox checked={value} onChange={handleChange} name={name} />}
      label={title}
    />
  );
}

CheckboxInput.propTypes = {
  value: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
