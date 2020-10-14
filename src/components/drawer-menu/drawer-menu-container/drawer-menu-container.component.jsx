import React from "react";
import PropTypes from "prop-types";
// Components
import DrawerMenuItem from "../drawer-menu-item/drawer-menu-item.component";
import DrawerBase from "../../items-base/drawer-base/drawer-base";
import ContainerBase from "../../items-base/container-base/container-base";
import IconButtonBase from "../../items-base/icon-button-base/icon-button-base";
import DividerBase from "../../items-base/divider-base/divider-base";
import FabBase from "../../items-base/fab-base/fab-base";
import ZoomBase from "../../items-base/zoom-base/zoom-base";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import EditIcon from "@material-ui/icons/Edit";
// Styles
import { useStyles } from "./drawer-menu-container.styles";

function DrawerMenuContainer({ width, openDrawer, handleDrawerOpen, ...rest }) {
  const classes = useStyles();

  return (
    <>
      <DrawerBase
        open={openDrawer}
        variant={isWidthDown("md", width) ? "temporary" : "persistent"}
        anchor="right"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButtonBase onClick={handleDrawerOpen} aria-label="Close drawer">
            <ChevronRightIcon />
          </IconButtonBase>
        </div>
        <DividerBase />
        <ContainerBase>
          <DrawerMenuItem {...rest} />
        </ContainerBase>
      </DrawerBase>
      <ZoomBase in={!openDrawer} timeout={500}>
        <FabBase
          color="primary"
          className={classes.fab}
          onClick={handleDrawerOpen}
          aria-label="Open drawer and edit"
        >
          <EditIcon />
        </FabBase>
      </ZoomBase>
    </>
  );
}

export default withWidth()(DrawerMenuContainer);

DrawerMenuContainer.propTypes = {
  width: PropTypes.string.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
