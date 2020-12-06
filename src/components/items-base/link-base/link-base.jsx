import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Link from "@material-ui/core/Link";

export default function LinkBase({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
}

LinkBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
