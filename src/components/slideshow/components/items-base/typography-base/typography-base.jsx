import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Typography from "@material-ui/core/Typography";

export default function TypographyBase({ children, ...rest }) {
  return <Typography {...rest}>{children}</Typography>;
}

TypographyBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
