import React from "react";
import PropTypes from "prop-types";
// Styles
import { useStyles } from "./arrow.styles";

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
