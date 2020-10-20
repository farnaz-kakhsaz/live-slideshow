import React from "react";
import PropTypes from "prop-types";
// Components
import BoxBase from "../../items-base/box-base/box-base";
import SwitchBase from "../../items-base/switch-base/switch-base";
import FormControlBase from "../../items-base/form-control-base/form-control-base";
import SelectBase from "../../items-base/select-base/select-base";
import MenuItemBase from "../../items-base/menu-item-base/menu-item-base";
import DividerBase from "../../items-base/divider-base/divider-base";
import ButtonBase from "../../items-base/button-base/button-base";

import Slider from "./slider.component";
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
          Maximum width of the entire slideshow screen (default: lg):
        </BoxBase>
        <FormControlBase className={classes.formControl}>
          <SelectBase
            value={slideshowContainerMaxWidth}
            onChange={handleDrawerItemChange("slideshowContainerMaxWidth")}
            inputProps={{ "aria-label": "Dropdown menu" }}
            classes={{ select: classes.menuItem }}
          >
            <MenuItemBase value={false} className={classes.menuItem}>
              false
            </MenuItemBase>
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
          For width lower than this show only one card per screen (default: md):
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
          Cards container justify (default: space-evenly):
        </BoxBase>
        <FormControlBase className={classes.formControl}>
          <SelectBase
            value={cardsContainerJustify}
            onChange={handleDrawerItemChange("cardsContainerJustify")}
            inputProps={{ "aria-label": "Dropdown menu" }}
            classes={{ select: classes.menuItem }}
          >
            <MenuItemBase value="flex-start" className={classes.menuItem}>
              flex-start
            </MenuItemBase>
            <MenuItemBase value="flex-end" className={classes.menuItem}>
              flex-end
            </MenuItemBase>
            <MenuItemBase value="center" className={classes.menuItem}>
              center
            </MenuItemBase>
            <MenuItemBase value="space-between" className={classes.menuItem}>
              space-between
            </MenuItemBase>
            <MenuItemBase value="space-around" className={classes.menuItem}>
              space-around
            </MenuItemBase>
            <MenuItemBase value="space-evenly" className={classes.menuItem}>
              space-evenly
            </MenuItemBase>
          </SelectBase>
        </FormControlBase>
      </BoxBase>
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
  slideshowContainerMaxWidth: PropTypes.string.isRequired,
  forWidthLowerShowOneCard: PropTypes.string.isRequired,
  cardsContainerJustify: PropTypes.string.isRequired,
  cardMarginX: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  cardMarginY: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  handleDrawerOpen: PropTypes.func.isRequired,
  handleDrawerItemChange: PropTypes.func.isRequired,
};
