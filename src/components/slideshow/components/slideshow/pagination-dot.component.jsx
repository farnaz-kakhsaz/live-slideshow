import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
// Styles
import { useStyles } from "./pagination-dot.styles";

export default function PaginationDot({ activeDot, index, handleDotClick }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.dot, { [classes.activeDot]: activeDot })}
      onClick={handleDotClick(index)}
    />
  );
}

PaginationDot.propTypes = {
  activeDot: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleDotClick: PropTypes.func.isRequired,
};
