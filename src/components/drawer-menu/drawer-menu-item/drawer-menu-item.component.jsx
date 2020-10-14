import React from "react";
import PropTypes from "prop-types";
// Components
import ContainerBase from "../../items-base/container-base/container-base";
import SwitchBase from "../../items-base/switch-base/switch-base";
import SliderBase from "../../items-base/slider-base/slider-base";
import DividerBase from "../../items-base/divider-base/divider-base";
// Styles
import { useStyles } from "./drawer-menu-item.styles";

export default function DrawerMenuItem({
  enableMouseEvents,
  numberOfCardsPerScreen,
  handleDrawerItemChange,
  imageMaxWidth,
  imageMaxHeight,
}) {
  const classes = useStyles();

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
        className={classes.marginY}
      />
      <DividerBase variant="middle" />
      <SliderBase
        name="numberOfCardsPerScreen"
        value={numberOfCardsPerScreen}
        getAriaValueText={valueText("card")}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("numberOfCardsPerScreen")}
        className={classes.marginY}
        min={1}
        max={10}
        marks
      />
      <DividerBase variant="middle" />
      <SliderBase
        name="imageMaxWidth"
        value={imageMaxWidth}
        getAriaValueText={valueText("image size")}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("imageMaxWidth")}
        className={classes.marginY}
        min={0}
        max={1000}
      />
      <DividerBase variant="middle" />
      <SliderBase
        name="imageMaxHeight"
        value={imageMaxHeight}
        getAriaValueText={valueText("image size")}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("imageMaxHeight")}
        className={classes.marginY}
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
