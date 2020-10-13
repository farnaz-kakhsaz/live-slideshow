import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Divider from "@material-ui/core/Divider";

export default function DividerBase({ children, ...rest }) {
  return <Divider {...rest}>{children}</Divider>;
}

DividerBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
