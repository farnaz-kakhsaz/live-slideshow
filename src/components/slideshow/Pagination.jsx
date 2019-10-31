import React from "react";
import PropTypes from "prop-types";
// Components
import PaginationDot from "./PaginationDot";

export default function Pagination({ dots, activeStep, handleDotClick }) {
  const children = [];

  for (let i = 0; i < dots; i += 1) {
    children.push(
      <PaginationDot
        key={i}
        index={i}
        active={i === activeStep}
        handleDotClick={handleDotClick}
      />
    );
  }

  return children;
}

Pagination.propTypes = {
  dots: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleDotClick: PropTypes.func.isRequired
};
