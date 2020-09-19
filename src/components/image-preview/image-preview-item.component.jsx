import React from "react";
import PropTypes from "prop-types";
// Material-UI
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
// Styles
import { useStyles } from "./image-preview-item.styles";

export default function ImagePreviewItem({
  item,
  index,
  whichOneGrow,
  handleRemoveItem,
  ...rest
}) {
  const classes = useStyles();

  return (
    <Grow in={true} timeout={1000}>
      <GridListTile className={classes.gridListTile} {...rest}>
        <img className={classes.img} src={item.image} alt={item.title} />
        <Button
          className={classes.button}
          onClick={() => handleRemoveItem(index)}
        >
          Delete
        </Button>
      </GridListTile>
    </Grow>
  );
}

ImagePreviewItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  whichOneGrow: PropTypes.number.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};
