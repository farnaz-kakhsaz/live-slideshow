import React from "react";
import PropTypes from "prop-types";
// Components
import BoxBase from "../../items-base/box-base/box-base";
import SwitchBase from "../../items-base/switch-base/switch-base";

export default function Switch({ boxText, checked, onChange }) {
  return (
    <BoxBase display="flex" justifyContent="space-between" alignItems="center">
      <BoxBase
        display="inline-block"
        color="text.secondary"
        fontWeight="fontWeightMedium"
      >
        {boxText}
      </BoxBase>
      <SwitchBase checked={checked} onChange={onChange} />
    </BoxBase>
  );
}

Switch.propTypes = {
  boxText: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
