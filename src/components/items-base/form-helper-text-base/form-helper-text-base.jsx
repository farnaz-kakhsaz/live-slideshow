import React from "react";
import PropTypes from "prop-types";
// Material-UI
import FormHelperText from "@material-ui/core/FormHelperText";

export default function FormHelperTextBase({ children, ...rest }) {
  return <FormHelperText {...rest}>{children}</FormHelperText>;
}

FormHelperTextBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
