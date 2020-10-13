import React from "react";
import PropTypes from "prop-types";
// Material-UI
import GridList from "@material-ui/core/GridList";

export default function GridListBase({ children, ...rest }) {
  return <GridList {...rest}>{children}</GridList>;
}

GridListBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
