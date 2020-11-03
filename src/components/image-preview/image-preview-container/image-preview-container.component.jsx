import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Components
import GridListBase from "../../items-base/grid-list-base/gris-list-base";
import CircularProgress from "../../items-base/circular-progress-base/circular-progress-base";
// Styles
import { useStyles } from "./image-preview-container.styles";
// Code Split (Components)
const ImagePreviewItem = lazy(() =>
  import("../image-preview-item/image-preview-item.component")
);

export default function ImagePreviewContainer({
  cards,
  shakeIt,
  whichImageFade,
  handleRemoveItem,
  handleShakeAnimation,
}) {
  const classes = useStyles();

  return (
    <Suspense fallback={<CircularProgress />}>
      <GridListBase
        className={clsx(classes.gridList, { [classes.shakeIt]: shakeIt })}
        cellHeight={150}
        cols={4}
        onAnimationEnd={handleShakeAnimation}
      >
        {cards.map((item, index) => (
          <ImagePreviewItem
            key={index}
            item={item}
            index={index}
            whichImageFade={whichImageFade}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </GridListBase>
    </Suspense>
  );
}

ImagePreviewContainer.propTypes = {
  cards: PropTypes.array.isRequired,
  shakeIt: PropTypes.bool.isRequired,
  whichImageFade: PropTypes.number.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleShakeAnimation: PropTypes.func.isRequired,
};
