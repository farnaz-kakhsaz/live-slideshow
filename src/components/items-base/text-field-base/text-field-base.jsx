import React from "react";
import PropTypes from "prop-types";
// Material-UI
import TextField from "@material-ui/core/TextField";

export default function TextFieldBase({ ...rest }) {
  return <TextField {...rest} />;
}

TextField.propTypes = {
  rest: PropTypes.any,
};
