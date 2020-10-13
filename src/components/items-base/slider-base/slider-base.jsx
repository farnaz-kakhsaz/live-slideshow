import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Slider from "@material-ui/core/Slider";

export default function SliderBase({ ...rest }) {
  return <Slider {...rest} />;
}

SliderBase.propTypes = {
  rest: PropTypes.any,
};
