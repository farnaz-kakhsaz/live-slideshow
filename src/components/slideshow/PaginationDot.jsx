import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
// Material-UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  dot: {
    backgroundColor: "#DCDCDC",
    width: theme.spacing(2),
    height: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    outline: "none"
  },
  activeDot: {
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  }
}));

export default function PaginationDot({ active, index, handleDotClick }) {
  const classes = useStyles();

  return (
    <button
      type="button"
      className={clsx(classes.dot, active ? classes.activeDot : "")}
      onClick={handleDotClick(index)}
    />
  );
}

PaginationDot.propTypes = {
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleDotClick: PropTypes.func.isRequired
};
