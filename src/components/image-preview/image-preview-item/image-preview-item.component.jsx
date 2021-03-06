import React from "react";
import PropTypes from "prop-types";
// Components
import ButtonBase from "../../items-base/button-base/button-base";
import GrowBase from "../../items-base/grow-base/grow-base";
import GridListTileBase from "../../items-base/grid-list-tile-base/grid-list-tile-base";
// Styles
import { useStyles } from "./image-preview-item.styles";

export default function ImagePreviewItem({
  item,
  index,
  whichImageFade,
  handleRemoveItem,
  ...rest
}) {
  const classes = useStyles();

  return (
    <GrowBase in={whichImageFade === index ? false : true} timeout={700}>
      <GridListTileBase className={classes.gridListTile} {...rest}>
        <img className={classes.img} src={item.image} alt={item.title} />
        <ButtonBase
          className={classes.button}
          onClick={handleRemoveItem(index)}
        >
          Delete
        </ButtonBase>
      </GridListTileBase>
    </GrowBase>
  );
}

ImagePreviewItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  whichImageFade: PropTypes.number.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
