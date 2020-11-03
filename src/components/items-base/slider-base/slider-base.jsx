import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Slider from "@material-ui/core/Slider";

export default function SliderBase(props) {
  return <Slider {...props} />;
}

SliderBase.propTypes = {
  props: PropTypes.any,
};
