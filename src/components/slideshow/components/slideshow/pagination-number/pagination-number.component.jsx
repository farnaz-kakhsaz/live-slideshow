import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Box from "@material-ui/core/Box";

export default function PaginationNumber({ totalNumber, activeStep }) {
  return (
    <Box color="grey.400" fontSize={16}>
      {activeStep}
      &#8239; / &#8239;
      {totalNumber}
    </Box>
  );
}

PaginationNumber.propTypes = {
  totalNumber: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
};
