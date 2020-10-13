import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Box from "@material-ui/core/Box";

export default function BoxBase({ children, ...rest }) {
  return <Box {...rest}>{children}</Box>;
}

BoxBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
