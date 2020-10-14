import React from "react";
import PropTypes from "prop-types";
// Components
import ContainerBase from "../../items-base/container-base/container-base";
import SwitchBase from "../../items-base/switch-base/switch-base";
import SliderBase from "../../items-base/slider-base/slider-base";

export default function DrawerMenuItem({
  enableMouseEvents,
  numberOfCardsPerScreen,
  handleDrawerItemChange,
  imageMaxWidth,
  imageMaxHeight,
}) {
  const valueText = (name) => (value) => {
    switch (name) {
      case "card":
        if (value <= 1) {
          return `${value} Card per screen`;
        } else {
          return `${value} Cards per screen`;
        }
      case "image size":
        return `${value}px`;
      default:
        console.error("Value didn't match in valueText!");
    }
  };

  return (
    <ContainerBase>
      <SwitchBase
        checked={enableMouseEvents}
        label="Enable Mouse Event"
        onChange={handleDrawerItemChange("enableMouseEvents")}
      />
      <SliderBase
        name="numberOfCardsPerScreen"
        value={numberOfCardsPerScreen}
        getAriaValueText={valueText("card")}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("numberOfCardsPerScreen")}
        min={1}
        max={10}
        marks
      />
      <SliderBase
        name="imageMaxWidth"
        value={imageMaxWidth}
        getAriaValueText={valueText("image size")}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("imageMaxWidth")}
        min={0}
        max={1000}
      />
      <SliderBase
        name="imageMaxHeight"
        value={imageMaxHeight}
        getAriaValueText={valueText("image size")}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("imageMaxHeight")}
        min={0}
        max={1000}
      />
    </ContainerBase>
  );
}

DrawerMenuItem.propTypes = {
  enableMouseEvents: PropTypes.bool.isRequired,
  numberOfCardsPerScreen: PropTypes.number.isRequired,
  imageMaxWidth: PropTypes.number.isRequired,
  imageMaxHeight: PropTypes.number.isRequired,
  handleDrawerItemChange: PropTypes.func.isRequired,
};
