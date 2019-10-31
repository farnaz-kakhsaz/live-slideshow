import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
// Material-UI
import  makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  dot: {
    backgroundColor: theme.palette.grey[400],
    width: theme.spacing(2),
    height: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    outline: "none"
  },
  activeDot: {
    backgroundColor: theme.palette.grey[700]
  }
}));

export default function PaginationDot({ activeDot, index, handleDotClick }) {
  const classes = useStyles();

  return (
    <button
      type="button"
      className={clsx(classes.dot, activeDot ? classes.activeDot : "")}
      onClick={handleDotClick(index)}
    />
  );
}

PaginationDot.propTypes = {
  activeDot: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleDotClick: PropTypes.func.isRequired
};
