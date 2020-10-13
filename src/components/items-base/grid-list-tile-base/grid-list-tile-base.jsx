import React from "react";
import PropTypes from "prop-types";
// Material-UI
import GridListTile from "@material-ui/core/GridListTile";

export default function GridListTileBase({ children, ...rest }) {
  return <GridListTile {...rest}>{children}</GridListTile>;
}

GridListTileBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
