import React from "react";
import PropTypes from "prop-types";
// Components
import CheckboxBase from "../items-base/checkbox-base/checkbox-base.component";
import BoxBase from "../items-base/box-base/box-base";

export default function CheckboxSection({
  numbers,
  dots,
  arrows,
  handleCheckboxChange,
}) {
  return (
    <BoxBase textAlign="center" mt={{ xs: 5, sm: 7 }} mb={{ xs: 3, sm: 4 }}>
      <CheckboxBase
        checked={numbers}
        name="numbers"
        label="Slideshow with Numbers"
        onChange={handleCheckboxChange}
      />
      <CheckboxBase
        checked={dots}
        name="dots"
        label="Slideshow with Dots"
        onChange={handleCheckboxChange}
      />
      <CheckboxBase
        checked={arrows}
        name="arrows"
        label="Slideshow with Arrows"
        onChange={handleCheckboxChange}
      />
    </BoxBase>
  );
}

CheckboxSection.propTypes = {
  numbers: PropTypes.bool.isRequired,
  dots: PropTypes.bool.isRequired,
  arrows: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};
