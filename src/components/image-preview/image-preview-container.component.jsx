import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Components
import ImagePreviewItem from "./image-preview-item.component";
// Material-UI
import GridList from "@material-ui/core/GridList";
// Styles
import { useStyles } from "./image-preview-container.styles";

export default function ImagePreviewContainer({
  cards,
  shakeIt,
  whichOneFade,
  handleRemoveItem,
  handleShakeAnimation,
}) {
  const classes = useStyles();

  return (
    <GridList
      className={clsx(classes.gridList, shakeIt && classes.shakeIt)}
      cellHeight={150}
      cols={4}
      onAnimationEnd={handleShakeAnimation}
    >
      {cards.map((item, index) => (
        <ImagePreviewItem
          key={index}
          item={item}
          index={index}
          whichOneFade={whichOneFade}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </GridList>
  );
}

ImagePreviewContainer.propTypes = {
  cards: PropTypes.array.isRequired,
  shakeIt: PropTypes.bool.isRequired,
  whichOneFade: PropTypes.number.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleShakeAnimation: PropTypes.func.isRequired,
};