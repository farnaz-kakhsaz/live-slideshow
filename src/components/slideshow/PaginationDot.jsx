import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
// Material-UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dot: {
    "&:hover": {
      background: theme.palette.grey[700],
    },
    backgroundColor: theme.palette.grey[400],
    width: theme.spacing(2),
    height: theme.spacing(2),
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.5s ease-in-out",
  },
  activeDot: {
    backgroundColor: theme.palette.grey[700],
  },
}));

export default function PaginationDot({ activeDot, index, handleDotClick }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.dot, activeDot ? classes.activeDot : "")}
      onClick={handleDotClick(index)}
    />
  );
}

PaginationDot.propTypes = {
  activeDot: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleDotClick: PropTypes.func.isRequired,
};
