import React from "react";
import PropTypes from "prop-types";
// Material-UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& $rightArrow, & $leftArrow": {
      "&:hover": {
        color: theme.palette.grey[700],
      },
      color: theme.palette.grey[400],
      fontSize: 120,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
      fontFamily: "'Courier New', monospace",
      transition: "all 0.5s ease-in-out",
    },
  },
  rightArrow: { right: 0 },
  leftArrow: { left: 0 },
}));

export default function Arrow({ handleArrowClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.rightArrow} onClick={handleArrowClick("right")}>
        &#8250;
      </div>
      <div className={classes.leftArrow} onClick={handleArrowClick("left")}>
        &#8249;
      </div>
    </div>
  );
}

Arrow.propTypes = {
  handleArrowClick: PropTypes.func.isRequired,
};
