import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function CheckboxInput({ value, name, text, handleChange }) {
  return (
    <FormControlLabel
      control={<Checkbox checked={value} onChange={handleChange} name={name} />}
      label={text}
    />
  );
}

CheckboxInput.propTypes = {
  value: PropTypes.bool,
  name: PropTypes.string,
  text: PropTypes.string,
  handleChange: PropTypes.func,
};
