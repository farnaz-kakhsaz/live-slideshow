import React from "react";
import PropTypes from "prop-types";
// Material-UI
import MenuItem from "@material-ui/core/MenuItem";

const MenuItemBase = React.forwardRef(({ children, ...rest }, ref) => (
  <MenuItem {...rest} ref={ref}>
    {children}
  </MenuItem>
));

export default MenuItemBase;

MenuItemBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
