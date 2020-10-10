import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import Fade from "@material-ui/core/Fade";
// Styles
import { useStyles } from "./drawer-base.styles";

export default function DrawerBase({ openDrawer, handleDrawer }) {
  const classes = useStyles();

  return (
    <>
      <Drawer
        open={openDrawer}
        variant="persistent"
        anchor="right"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer} aria-label="Close Drawer">
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
        distinctio explicabo quaerat modi autem asperiores iste expedita nisi,
        repudiandae sit, accusamus error alias aspernatur? Reprehenderit officia
        quas cupiditate itaque eaque.
      </Drawer>
      <Fade in={!openDrawer}>
        <Fab
          color={"primary"}
          className={classes.fab}
          onClick={handleDrawer}
          aria-label="Open Drawer"
        >
          <EditIcon />
        </Fab>
      </Fade>
    </>
  );
}

DrawerBase.propTypes = {
  openDrawer: PropTypes.bool.isRequired,
  handleDrawer: PropTypes.func.isRequired,
};
