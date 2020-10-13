import React from "react";
import PropTypes from "prop-types";
// Components
import DrawerMenuItem from "../drawer-menu-item/drawer-menu-item";
import ContainerBase from "../../items-base/container-base/container-base";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
// Styles
import { useStyles } from "./drawer-menu-container.styles";

function DrawerMenuContainer({ width, openDrawer, handleDrawerOpen, ...rest }) {
  const classes = useStyles();

  return (
    <>
      <Drawer
        open={openDrawer}
        variant={isWidthDown("md", width) ? "temporary" : "persistent"}
        anchor="right"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerOpen} aria-label="Close drawer">
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <ContainerBase>
          <DrawerMenuItem {...rest} />
        </ContainerBase>
      </Drawer>
      {!openDrawer && (
        <Fab
          color="primary"
          className={classes.fab}
          onClick={handleDrawerOpen}
          aria-label="Open drawer and edit"
        >
          <EditIcon />
        </Fab>
      )}
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
