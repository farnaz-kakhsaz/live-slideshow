import React from "react";
import PropTypes from "prop-types";
// Components
import BoxBase from "../../items-base/box-base/box-base";
import SliderBase from "../../items-base/slider-base/slider-base";
import FormHelperTextBase from "../../items-base/form-helper-text-base/form-helper-text-base";

export default function Slider({
  boxText,
  FormHelperTextText,
  name,
  value,
  getAriaValueText,
  ariaLabelledby,
  valueLabelDisplay,
  onChange,
  min,
  max,
  marks,
}) {
  return (
    <>
      <BoxBase color="text.secondary" fontWeight="fontWeightMedium" mb={1}>
        {boxText}
        {FormHelperTextText && (
          <FormHelperTextBase disabled>{FormHelperTextText}</FormHelperTextBase>
        )}
      </BoxBase>
      <SliderBase
        name={name}
        value={value}
        getAriaValueText={getAriaValueText}
        aria-labelledby={ariaLabelledby}
        valueLabelDisplay={valueLabelDisplay}
        onChange={onChange}
        min={min}
        max={max}
        marks={marks}
      />
    </>
  );
}

Slider.propTypes = {
  boxText: PropTypes.string.isRequired,
  FormHelperTextText: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  getAriaValueText: PropTypes.func.isRequired,
  ariaLabelledby: PropTypes.string.isRequired,
  valueLabelDisplay: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  marks: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};
