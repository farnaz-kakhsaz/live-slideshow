import React from "react";
import PropTypes from "prop-types";
// Components
import BoxBase from "../../items-base/box-base/box-base";
import SwitchBase from "../../items-base/switch-base/switch-base";
import SliderBase from "../../items-base/slider-base/slider-base";
import FormControlBase from "../../items-base/form-control-base/form-control-base";
import SelectBase from "../../items-base/select-base/select-base";
import MenuItemBase from "../../items-base/menu-item-base/menu-item-base";
import DividerBase from "../../items-base/divider-base/divider-base";
// Styles
import { useStyles } from "./drawer-menu-item.styles";

export default function DrawerMenuItem({
  enableMouseEvents,
  numberOfCardsPerScreen,
  imageMaxWidth,
  imageMaxHeight,
  forWidthLowerShowOneCard,
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
      <BoxBase color="text.secondary" fontWeight="fontWeightMedium">
        Number of cards per screen (default: 3):
      </BoxBase>
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
      <DividerBase className={classes.marginY} />
      <BoxBase
        display="inline-block"
        color="text.secondary"
        fontWeight="fontWeightMedium"
      >
        Images width (default: 375):
      </BoxBase>
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
      <DividerBase className={classes.marginY} />
      <BoxBase
        display="inline-block"
        color="text.secondary"
        fontWeight="fontWeightMedium"
      >
        Images height (default: 234):
      </BoxBase>
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
      <DividerBase className={classes.marginY} />
      <BoxBase
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <BoxBase
          display="inline-block"
          color="text.secondary"
          fontWeight="fontWeightMedium"
        >
          For width lower than this show only one card per screen:
        </BoxBase>
        <FormControlBase className={classes.formControl}>
          <SelectBase
            value={forWidthLowerShowOneCard}
            onChange={handleDrawerItemChange("forWidthLowerShowOneCard")}
            inputProps={{ "aria-label": "Dropdown menu" }}
            classes={{ select: classes.menuItem }}
          >
            <MenuItemBase value="xs" className={classes.menuItem}>
              xs
            </MenuItemBase>
            <MenuItemBase value="sm" className={classes.menuItem}>
              sm
            </MenuItemBase>
            <MenuItemBase value="md" className={classes.menuItem}>
              md
            </MenuItemBase>
            <MenuItemBase value="lg" className={classes.menuItem}>
              lg
            </MenuItemBase>
            <MenuItemBase value="xl" className={classes.menuItem}>
              xl
            </MenuItemBase>
          </SelectBase>
        </FormControlBase>
      </BoxBase>
    </>
  );
}

DrawerMenuItem.propTypes = {
  enableMouseEvents: PropTypes.bool.isRequired,
  numberOfCardsPerScreen: PropTypes.number.isRequired,
  imageMaxWidth: PropTypes.number.isRequired,
  imageMaxHeight: PropTypes.number.isRequired,
  forWidthLowerShowOneCard: PropTypes.string.isRequired,
  handleDrawerItemChange: PropTypes.func.isRequired,
};
