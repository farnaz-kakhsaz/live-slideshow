import React from "react";
import PropTypes from "prop-types";
// Material-UI
import IconButton from "@material-ui/core/IconButton";

export default function IconButtonBase({ children, ...rest }) {
  return <IconButton {...rest}>{children}</IconButton>;
}

IconButtonBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
