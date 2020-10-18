import React from "react";
import PropTypes from "prop-types";
// Material-UI
import MenuItem from "@material-ui/core/MenuItem";

export default function MenuItemBase({ children, ...rest }) {
  return <MenuItem {...rest}>{children}</MenuItem>;
}

MenuItemBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
