import React from "react";
import PropTypes from "prop-types";
// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  checked: {
    color: theme.palette.secondary.main,
  },
}));

export default function CheckboxInput({
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
      className={value ? classes.checked : ""}
      label={title}
    />
  );
}

CheckboxInput.propTypes = {
  value: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};
