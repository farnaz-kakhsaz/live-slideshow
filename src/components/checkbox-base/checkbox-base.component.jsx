import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Material-UI
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// Styles
import { useStyles } from "./checkbox-base.styles";

export default function CheckboxBase({
  value,
  name,
  title,
  handleCheckboxChange,
}) {
  const classes = useStyles();

  return (
    <FormControlLabel
      control={
        <Checkbox checked={value} onChange={handleCheckboxChange} name={name} />
      }
      className={clsx({ [classes.checked]: value })}
      label={title}
    />
  );
}

CheckboxBase.propTypes = {
  value: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};
