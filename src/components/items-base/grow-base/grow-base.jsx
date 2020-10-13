import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Grow from "@material-ui/core/Grow";

export default function GrowBase({ children, ...rest }) {
  return <Grow {...rest}>{children}</Grow>;
}

GrowBase.propTypes = {
  children: PropTypes,
  rest: PropTypes.any,
};
