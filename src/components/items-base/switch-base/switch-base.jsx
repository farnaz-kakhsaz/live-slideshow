import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Material-UI
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// Styles
import { useStyles } from "./switch-base.styles";

export default function SwitchBase({
  checked,
  name,
  label,
  onChange,
  ...rest
}) {
  const classes = useStyles();

  return (
    <FormControlLabel
      control={
        <Switch checked={checked} onChange={onChange} name={name} {...rest} />
      }
      className={clsx({ [classes.checked]: checked })}
      label={label}
    />
  );
}

SwitchBase.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  rest: PropTypes.any,
};
