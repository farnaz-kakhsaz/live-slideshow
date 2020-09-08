import React from "react";
import PropTypes from "prop-types";
// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  gridList: {
    maxWidth: 600,
    height: 300,
  },
  gridListTile: {
    height: "100px !important",
  },
}));

export default function ImagePreview({ cards }) {
  const classes = useStyles();

  return (
    <GridList className={classes.gridList} cellHeight={150} cols={4}>
      {cards.map((item, index) => (
        <GridListTile className={classes.gridListTile} key={index}>
          <img src={item.image} alt={item.title} />
        </GridListTile>
      ))}
    </GridList>
  );
}

ImagePreview.propTypes = {
  cards: PropTypes.array.isRequired,
};
