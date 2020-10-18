import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Select from "@material-ui/core/Select";

export default function SelectBase({ children, ...rest }) {
  return <Select {...rest}>{children}</Select>;
}

SelectBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
