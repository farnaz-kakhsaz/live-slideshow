import React from "react";
import PropTypes from "prop-types";
// Material-UI
import FormControl from "@material-ui/core/FormControl";

export default function FormControlBase({ children, ...rest }) {
  return <FormControl {...rest}>{children}</FormControl>;
}

FormControlBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
