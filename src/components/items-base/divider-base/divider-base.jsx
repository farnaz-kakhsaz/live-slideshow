import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Divider from "@material-ui/core/Divider";

export default function DividerBase(props) {
  return <Divider {...props} />;
}

DividerBase.propTypes = {
  props: PropTypes.any,
};
