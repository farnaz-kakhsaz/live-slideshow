import React from "react";
import PropTypes from "prop-types";
// Components
import BoxBase from "../box-base/box-base";
// Material-UI
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CircularProgressBase(props) {
  return (
    <BoxBase overflow="hidden">
      <CircularProgress {...props} />
    </BoxBase>
  );
}

CircularProgressBase.prototype = {
  props: PropTypes.any,
};
