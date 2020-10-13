import React from "react";
import PropTypes from "prop-types";
// Components
import ContainerBase from "../../items-base/container-base/container-base";
import CheckboxBase from "../../items-base/checkbox-base/checkbox-base.component";
import SliderBase from "../../items-base/slider-base/slider-base";

export default function DrawerMenuItem({
  enableMouseEvents,
  numberOfCardsPerScreen,
  handleDrawerItemChange,
}) {
  const valueText = (value) => {
    if (value <= 1) {
      return `${value} Card per screen`;
    } else {
      return `${value} Cards per screen`;
    }
  };

  return (
    <ContainerBase>
      <CheckboxBase
        checked={enableMouseEvents}
        label="Enable Mouse Event"
        onChange={handleDrawerItemChange("enableMouseEvents")}
      />
      <SliderBase
        name="numberOfCardsPerScreen"
        value={numberOfCardsPerScreen}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("numberOfCardsPerScreen")}
        min={1}
        max={10}
        marks
      />
    </ContainerBase>
  );
}

DrawerMenuItem.propTypes = {
  enableMouseEvents: PropTypes.bool.isRequired,
  numberOfCardsPerScreen: PropTypes.number.isRequired,
  handleDrawerItemChange: PropTypes.func.isRequired,
};
