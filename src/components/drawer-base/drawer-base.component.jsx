import React from "react";
import PropTypes from "prop-types";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
// Styles
import { useStyles } from "./drawer-base.styles";

function DrawerBase({ width, openDrawer, handleDrawer }) {
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
          <IconButton onClick={handleDrawer} aria-label="Close drawer">
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
        distinctio explicabo quaerat modi autem asperiores iste expedita nisi,
        repudiandae sit, accusamus error alias aspernatur? Reprehenderit officia
        quas cupiditate itaque eaque.
      </Drawer>
      {!openDrawer && (
        <Fab
          color="primary"
          className={classes.fab}
          onClick={handleDrawer}
          aria-label="Open drawer and edit"
        >
          <EditIcon />
        </Fab>
      )}
    </>
  );
}

export default withWidth()(DrawerBase);

DrawerBase.propTypes = {
  width: PropTypes.string.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  handleDrawer: PropTypes.func.isRequired,
};
