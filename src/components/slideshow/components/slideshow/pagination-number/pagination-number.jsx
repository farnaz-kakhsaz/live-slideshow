import React from "react";
import PropTypes from "prop-types";
// Components
import BoxBase from "../../items-base/box-base/box-base";

export default function PaginationNumber({
  totalNumber,
  activeStep,
  textColor,
}) {
  return (
    <BoxBase color={textColor} fontSize={16}>
      {activeStep}
      &#8239; / &#8239;
      {totalNumber}
    </BoxBase>
  );
}

PaginationNumber.propTypes = {
  totalNumber: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  textColor: PropTypes.string.isRequired,
};
