import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Material-UI
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// Styles
import { useStyles } from "./checkbox-base.styles";

export default function CheckboxBase({ checked, name, label, onChange }) {
  const classes = useStyles();

  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} name={name} />}
      className={clsx({ [classes.checked]: checked })}
      label={label}
    />
  );
}

CheckboxBase.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
