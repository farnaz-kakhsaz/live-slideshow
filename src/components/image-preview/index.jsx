import React from "react";
import PropTypes from "prop-types";
// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  gridList: {
    maxWidth: 600,
    height: 300,
    position: "relative",
  },
  gridListTile: {
    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background:
        "linear-gradient(233.88deg, rgba(254, 0, 90, 0.4) 0%, rgba(255, 45, 30, 0.4) 98.91%)",
      WebkitTransition: "all 0.5s ease-in-out",
      MozTransition: "all 0.5s ease-in-out",
      OTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out",
      opacity: 0,
      zIndex: 1,
    },
    "&:hover": {
      "&:before": {
        opacity: 1,
      },
    },
    "&:hover $img": {
      WebkitFilter: "blur(4px)",
      filter: "blur(4px)",
      transform: "scale(1)",
    },
    "&:hover $button": {
      opacity: 1,
    },
    position: "relative",
    height: "100px !important",
  },
  img: {
    transform: "scale(1)",
    left: 0,
    WebkitTransition: "all 0.5s ease-in-out",
    MozTransition: "all 0.5s ease-in-out",
    OTransition: "all 0.5s ease-in-out",
    transition: "all 0.5s ease-in-out",
  },
  button: {
    "&:before": {
      position: "absolute",
      content: "''",
      left: "50%",
      bottom: 0,
      background: theme.palette.common.white,
      height: 2,
      width: 0,
      WebkitTransition: "all 0.5s ease-in-out",
      MozTransition: "all 0.5s ease-in-out",
      OTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out",
    },
    "&:hover": {
      "&:before": {
        width: "100%",
        left: "0",
      },
    },
    height: 40,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    WebkitTransition: "all 0.5s ease-in-out",
    MozTransition: "all 0.5s ease-in-out",
    OTransition: "all 0.5s ease-in-out",
    transition: "all 0.5s ease-in-out",
    background: "transparent",
    cursor: "pointer",
    border: "none",
    color: "white",
    fontSize: 18,
    zIndex: 10,
    opacity: 0,
    outline: "none",
    padding: 0,
  },
}));

export default function ImagePreview({ cards }) {
  const classes = useStyles();

  return (
    <GridList className={classes.gridList} cellHeight={150} cols={4}>
      {cards.map((item, index) => (
        <GridListTile className={classes.gridListTile} key={index}>
          <img className={classes.img} src={item.image} alt={item.title} />
          <Button className={classes.button}>Delete</Button>
        </GridListTile>
      ))}
    </GridList>
  );
}

ImagePreview.propTypes = {
  cards: PropTypes.array.isRequired,
};
