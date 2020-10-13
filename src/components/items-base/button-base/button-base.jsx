import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Button from "@material-ui/core/Button";

export default function ButtonBase({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}

ButtonBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
