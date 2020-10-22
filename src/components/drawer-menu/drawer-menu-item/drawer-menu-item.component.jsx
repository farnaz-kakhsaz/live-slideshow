import React from "react";
import PropTypes from "prop-types";
// Components
import BoxBase from "../../items-base/box-base/box-base";
import SwitchBase from "../../items-base/switch-base/switch-base";
import DividerBase from "../../items-base/divider-base/divider-base";
import ButtonBase from "../../items-base/button-base/button-base";

import Slider from "./slider.component";
import Select from "./select.component";
// Styles
import { useStyles } from "./drawer-menu-item.styles";

export default function DrawerMenuItem({
  enableMouseEvents,
  numberOfCardsPerScreen,
  imageMaxWidth,
  imageMaxHeight,
  slideshowContainerMaxWidth,
  forWidthLowerShowOneCard,
  cardsContainerJustify,
  cardMarginX,
  cardMarginY,
  handleDrawerOpen,
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
      <BoxBase
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop={4}
      >
        <BoxBase
          display="inline-block"
          color="text.secondary"
          fontWeight="fontWeightMedium"
        >
          Mouse Event (default: enabled):
        </BoxBase>
        <SwitchBase
          checked={enableMouseEvents}
          onChange={handleDrawerItemChange("enableMouseEvents")}
        />
      </BoxBase>
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
        boxText="Images width (default: 375):"
        name="imageMaxWidth"
        value={imageMaxWidth}
        getAriaValueText={valueText("image size")}
        ariaLabelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("imageMaxWidth")}
        min={0}
        max={1000}
      />
      <DividerBase className={classes.marginY} />
      <Slider
        boxText="Images height (default: 234):"
        name="imageMaxHeight"
        value={imageMaxHeight}
        getAriaValueText={valueText("image size")}
        ariaLabelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={handleDrawerItemChange("imageMaxHeight")}
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
        boxText="For width lower than this show only one card per screen (default: md):"
        menuItemValue={["xs", "sm", "md", "lg", "xl"]}
        value={forWidthLowerShowOneCard}
        onChange={handleDrawerItemChange("forWidthLowerShowOneCard")}
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
      <ButtonBase
        variant="outlined"
        color="inherit"
        classes={{ root: classes.buttonRoot, outlined: classes.buttonOutlined }}
        onClick={handleDrawerOpen}
      >
        Done
      </ButtonBase>
    </>
  );
}

DrawerMenuItem.propTypes = {
  enableMouseEvents: PropTypes.bool.isRequired,
  numberOfCardsPerScreen: PropTypes.number.isRequired,
  imageMaxWidth: PropTypes.number.isRequired,
  imageMaxHeight: PropTypes.number.isRequired,
  slideshowContainerMaxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  forWidthLowerShowOneCard: PropTypes.string.isRequired,
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
  handleDrawerOpen: PropTypes.func.isRequired,
  handleDrawerItemChange: PropTypes.func.isRequired,
};
