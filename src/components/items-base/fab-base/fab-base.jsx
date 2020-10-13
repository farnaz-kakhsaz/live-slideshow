import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Fab from "@material-ui/core/Fab";

export default function FabBase({ children, ...rest }) {
  return <Fab {...rest}>{children}</Fab>;
}

FabBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
