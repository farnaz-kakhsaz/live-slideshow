import React from "react";
import PropTypes from "prop-types";
// Material-UI
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CircularProgressBase(props) {
  return <CircularProgress {...props} />;
}

CircularProgressBase.prototype = {
  props: PropTypes.any,
};
