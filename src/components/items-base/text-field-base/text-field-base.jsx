import React from "react";
import PropTypes from "prop-types";
// Material-UI
import TextField from "@material-ui/core/TextField";

export default function TextFieldBase(props) {
  return <TextField {...props} />;
}

TextField.propTypes = {
  props: PropTypes.any,
};
