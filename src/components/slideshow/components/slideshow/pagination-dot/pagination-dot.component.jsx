import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Styles
import { useStyles } from "./pagination-dot.styles";

export default function PaginationDot({
  activeDot,
  index,
  lightColorBtn,
  darkColorBtn,
  handleDotClick,
}) {
  const classes = useStyles({ lightColorBtn, darkColorBtn });

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
  lightColorBtn: PropTypes.string.isRequired,
  darkColorBtn: PropTypes.string.isRequired,
  handleDotClick: PropTypes.func.isRequired,
};
