import React from "react";
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
