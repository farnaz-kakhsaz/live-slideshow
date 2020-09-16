import React from "react";
import PropTypes from "prop-types";
// Material-UI
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
// Styles
import { useStyles } from "./image-previw.styles";

export default function ImagePreview({ cards, handleRemoveItem }) {
  const classes = useStyles();

  return (
    <GridList className={classes.gridList} cellHeight={150} cols={4}>
      {cards.map((item, index) => (
        <GridListTile className={classes.gridListTile} key={index}>
          <img className={classes.img} src={item.image} alt={item.title} />
          <Button
            className={classes.button}
            onClick={() => handleRemoveItem(index)}
          >
            Delete
          </Button>
        </GridListTile>
      ))}
    </GridList>
  );
}

ImagePreview.propTypes = {
  cards: PropTypes.array.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};
