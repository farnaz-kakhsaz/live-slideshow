import React from "react";
import PropTypes from "prop-types";
// Components
import ButtonBase from "../../items-base/button-base/button-base";
// Material-UI
import GridListTile from "@material-ui/core/GridListTile";
import Grow from "@material-ui/core/Grow";
// Styles
import { useStyles } from "./image-preview-item.styles";

export default function ImagePreviewItem({
  item,
  index,
  whichOneFade,
  handleRemoveItem,
  ...rest
}) {
  const classes = useStyles();

  return (
    <Grow in={whichOneFade === index ? false : true} timeout={700}>
      <GridListTile className={classes.gridListTile} {...rest}>
        <img className={classes.img} src={item.image} alt={item.title} />
        <ButtonBase
          className={classes.button}
          onClick={handleRemoveItem(index)}
        >
          Delete
        </ButtonBase>
      </GridListTile>
    </Grow>
  );
}

ImagePreviewItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  whichOneFade: PropTypes.number.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
