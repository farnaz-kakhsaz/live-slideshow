import React from "react";
import PropTypes from "prop-types";
// Components
import DrawerMenuItem from "../drawer-menu-item/drawer-menu-item.component";
import DrawerBase from "../../items-base/drawer-base/drawer-base";
import ContainerBase from "../../items-base/container-base/container-base";
import DividerBase from "../../items-base/divider-base/divider-base";
import FabBase from "../../items-base/fab-base/fab-base";
import ZoomBase from "../../items-base/zoom-base/zoom-base";
import BoxBase from "../../items-base/box-base/box-base";
import ButtonBase from "../../items-base/button-base/button-base";
import GrowBase from "../../items-base/grow-base/grow-base";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import EditIcon from "@material-ui/icons/Edit";
// Styles
import { useStyles } from "./drawer-menu-container.styles";

function DrawerMenuContainer({
  width,
  openDrawer,
  handleDrawerOpen,
  showDrawerResetBtn,
  handleResetDrawerItem,
  ...rest
}) {
  const classes = useStyles();

  return (
    <>
      <DrawerBase
        open={openDrawer}
        onClose={handleDrawerOpen}
        variant={isWidthDown("md", width) ? "temporary" : "persistent"}
        anchor="right"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <ContainerBase>
          <BoxBase
            color="text.secondary"
            fontSize={{ xs: 16, sm: 26, md: 30 }}
            fontWeight="fontWeightMedium"
            textAlign="center"
            my={2}
          >
            You can customize almost anything about the Slideshow
          </BoxBase>
          <DividerBase variant="middle" className={classes.marginY} />
          <DrawerMenuItem {...rest} />
          <DividerBase variant="middle" className={classes.marginY} />
          <BoxBase
            color="text.secondary"
            fontWeight="fontWeightMedium"
            textAlign="center"
            my={3}
          >
            And so much more &nbsp;
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </BoxBase>
          <BoxBase display="flex" justifyContent="space-evenly" mt={2} mb={3}>
            <ButtonBase
              type="button"
              variant="contained"
              color="inherit"
              onClick={handleDrawerOpen}
              className={classes.doneButton}
              fullWidth
            >
              Done
            </ButtonBase>
            {showDrawerResetBtn && (
              <GrowBase in={showDrawerResetBtn} timeout={1500}>
                <ButtonBase
                  type="button"
                  variant="contained"
                  color="secondary"
                  onClick={handleResetDrawerItem}
                  className={classes.resetButton}
                  fullWidth
                >
                  reset
                </ButtonBase>
              </GrowBase>
            )}
          </BoxBase>
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
  showDrawerResetBtn: PropTypes.bool.isRequired,
  handleResetDrawerItem: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
