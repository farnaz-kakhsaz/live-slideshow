import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Grid from "@material-ui/core/Grid";

export default function GridBase({ children, ...rest }) {
  return <Grid {...rest}>{children}</Grid>;
}

GridBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
