import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Styles
import { useStyles } from "./arrow.styles";

export default function Arrow({
  lightColorBtn,
  darkColorBtn,
  handleArrowClick,
}) {
  const classes = useStyles({ lightColorBtn, darkColorBtn });

  return (
    <>
      <div
        className={clsx(classes.commonClass, classes.rightArrow)}
        onClick={handleArrowClick("right")}
        aria-label="Right arrow"
      >
        &#8250;
      </div>
      <div
        className={clsx(classes.commonClass, classes.leftArrow)}
        onClick={handleArrowClick("left")}
        aria-label="Left arrow"
      >
        &#8249;
      </div>
    </>
  );
}

Arrow.propTypes = {
  lightColorBtn: PropTypes.string.isRequired,
  darkColorBtn: PropTypes.string.isRequired,
  handleArrowClick: PropTypes.func.isRequired,
};
