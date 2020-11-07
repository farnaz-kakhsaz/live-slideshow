import React from "react";
import PropTypes from "prop-types";
// Components
import DividerBase from "../../items-base/divider-base/divider-base";

import Switch from "./switch.component";
import Slider from "./slider.component";
import Select from "./select.component";
// Styles
import { useStyles } from "./drawer-menu-item.styles";

export default function DrawerMenuItem({
  autoPlay,
  enableMouseEvents,
  numberOfCardsPerScreen,
  cardWidth,
  cardHeight,
  slideshowContainerMaxWidth,
  showOneCardForWidthLower,
  cardsContainerJustify,
  cardMarginX,
  cardMarginY,
  handleDrawerItemChange,
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
      case "margin":
        return `${value * 8}px`;
      default:
        console.error("Value didn't match in valueText!");
    }
  };

  return (
    <>
      <Switch
        boxText="Slideshow auto-play (default: true):"
        checked={autoPlay}
        onChange={handleDrawerItemChange("autoPlay")}
      />
      <DividerBase className={classes.marginY} />
      <Switch
        boxText="Mouse event (default: true):"
        checked={enableMouseEvents}
        onChange={handleDrawerItemChange("enableMouseEvents")}
      />
      <DividerBase className={classes.marginY} />
      <Slider
        boxText="Number of cards per screen (default: 3):"
        name="numberOfCardsPerScreen"
        value={numberOfCardsPerScreen}
        getAriaValueText={valueText("card")}
        ariaLabelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("numberOfCardsPerScreen")}
        min={1}
        max={10}
        marks
      />
      <DividerBase className={classes.marginY} />
      <Slider
        boxText="Card width (default: 390):"
        name="cardWidth"
        value={cardWidth}
        getAriaValueText={valueText("image size")}
        ariaLabelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("cardWidth")}
        min={0}
        max={1000}
      />
      <DividerBase className={classes.marginY} />
      <Slider
        boxText="Card height (default: 245):"
        name="cardHeight"
        value={cardHeight}
        getAriaValueText={valueText("image size")}
        ariaLabelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("cardHeight")}
        min={0}
        max={1000}
      />
      <DividerBase className={classes.marginY} />
      <Select
        boxText="Maximum width of the entire slideshow screen (default: lg):"
        menuItemValue={[false, "xs", "sm", "md", "lg", "xl"]}
        value={slideshowContainerMaxWidth}
        onChange={handleDrawerItemChange("slideshowContainerMaxWidth")}
        inputProps={{ "aria-label": "Dropdown menu" }}
        classes={classes}
      />
      <DividerBase className={classes.marginY} />
      <Select
        boxText="For width lower than this, it shows only one card per screen (default: md):"
        menuItemValue={[false, "xs", "sm", "md", "lg", "xl"]}
        value={showOneCardForWidthLower}
        onChange={handleDrawerItemChange("showOneCardForWidthLower")}
        inputProps={{ "aria-label": "Dropdown menu" }}
        classes={classes}
      />
      <DividerBase className={classes.marginY} />
      <Select
        boxText="Cards container justify (default: space-around):"
        menuItemValue={[
          "flex-start",
          "flex-end",
          "center",
          "space-between",
          "space-around",
          "space-evenly",
        ]}
        value={cardsContainerJustify}
        onChange={handleDrawerItemChange("cardsContainerJustify")}
        inputProps={{ "aria-label": "Dropdown menu" }}
        classes={classes}
      />
      <DividerBase className={classes.marginY} />
      <Slider
        boxText="Card horizontal margin (default: 0):"
        FormHelperTextText="Each unit is equal to 8px"
        name="cardMarginX"
        value={cardMarginX}
        getAriaValueText={valueText("margin")}
        ariaLabelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("cardMarginX")}
        min={0}
        max={10}
        marks
      />
      <DividerBase className={classes.marginY} />
      <Slider
        boxText="Card vertical margin (default: 0 - but I set it one here):"
        FormHelperTextText="Each unit is equal to 8px"
        name="cardMarginY"
        value={cardMarginY}
        getAriaValueText={valueText("margin")}
        ariaLabelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("cardMarginY")}
        min={0}
        max={10}
        marks
      />
    </>
  );
}

DrawerMenuItem.propTypes = {
  autoPlay: PropTypes.bool.isRequired,
  enableMouseEvents: PropTypes.bool.isRequired,
  numberOfCardsPerScreen: PropTypes.number.isRequired,
  cardWidth: PropTypes.number.isRequired,
  cardHeight: PropTypes.number.isRequired,
  slideshowContainerMaxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  showOneCardForWidthLower: PropTypes.string.isRequired,
  cardsContainerJustify: PropTypes.string.isRequired,
  cardMarginX: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  cardMarginY: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  handleDrawerItemChange: PropTypes.func.isRequired,
};
