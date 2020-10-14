import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Zoom from "@material-ui/core/Zoom";

export default function ZoomBase({ children, ...rest }) {
  return <Zoom {...rest}>{children}</Zoom>;
}

ZoomBase.propTypes = {
  rest: PropTypes.any,
};
