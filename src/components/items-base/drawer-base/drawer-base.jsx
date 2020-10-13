import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Drawer from "@material-ui/core/Drawer";

export default function DrawerBase({ children, ...rest }) {
  return <Drawer {...rest}>{children}</Drawer>;
}

DrawerBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
