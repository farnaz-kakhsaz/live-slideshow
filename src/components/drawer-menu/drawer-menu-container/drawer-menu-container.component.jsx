import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
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
import LinkBase from "../../items-base/link-base/link-base";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import EditIcon from "@material-ui/icons/Edit";
// Styles
import { useStyles } from "./drawer-menu-container.styles";

function DrawerMenuContainer({
  width,
  openDrawer,
  startPulseAnimation,
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
            fontSize={{ xs: 20, sm: 23 }}
            fontWeight="fontWeightMedium"
            textAlign="center"
            my={{ xs: 2, lg: 1.8 }}
            mx={{ lg: 6 }}
          >
            You can customize almost anything about this Slideshow
          </BoxBase>
          <DividerBase variant="middle" className={classes.marginY} />
          <DrawerMenuItem {...rest} />
          <DividerBase variant="middle" className={classes.marginY} />
          <BoxBase
            color="text.secondary"
            fontWeight="fontWeightMedium"
            textAlign="center"
            my={2}
          >
            And so much more &nbsp;
            <LinkBase
              href="https://github.com/farnaz-kakhsaz/react-slideshow-with-pagination"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </LinkBase>
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
          className={clsx(classes.fab, {
            [classes.fabWithAnimation]: startPulseAnimation,
          })}
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
  startPulseAnimation: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  showDrawerResetBtn: PropTypes.bool.isRequired,
  handleResetDrawerItem: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
