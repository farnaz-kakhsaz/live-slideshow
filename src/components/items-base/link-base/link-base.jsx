import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Link from "@material-ui/core/link";

export default function LinkBase(props) {
  return <Link {...props} />;
}

LinkBase.propTypes = {
  props: PropTypes.any,
};
