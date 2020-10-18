import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// Components
import Slideshow from "./components/slideshow/slideshow";
import Card from "./components/card/card.component";
import GridBase from "./components/items-base/grid-base/grid-base";
import { splitToChunks } from "./helper/splitToChunks";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

function SlideshowWithPagination({
  width,
  options = [],
  children,
  numberOfCardsPerScreen = 3,
  forWidthLowerShowOneCard = "md",
  cardsContainerJustify = "space-evenly",
  cardMarginX = 0,
  cardMarginY = 0,
  imageMaxWidth = 375,
  imageMaxHeight = 234,
  slideshowContainerMaxWidth = "lg",
  paginationMarginTop = 3,
  springConfig = {
    duration: "1s",
    easeFunction: "ease-in-out",
    delay: "0s",
  },
  ...rest
}) {
  const [oneCardPerScreen, setOneCardPerScreen] = useState(options);
  const [multipleCardsPerScreen, setMultipleCardPerScreen] = useState(
    splitToChunks(options, numberOfCardsPerScreen)
  );

  useEffect(() => {
    if (options) {
      setOneCardPerScreen(options);
      setMultipleCardPerScreen(splitToChunks(options, numberOfCardsPerScreen));
    }
  }, [options, numberOfCardsPerScreen]);

  return (
    <Slideshow
      options={
        children
          ? children
          : isWidthDown(forWidthLowerShowOneCard, width)
          ? oneCardPerScreen
          : multipleCardsPerScreen
      }
      childrenArray={children}
      slideshowContainerMaxWidth={slideshowContainerMaxWidth}
      paginationMarginTop={paginationMarginTop}
      springConfig={springConfig}
      {...rest}
    >
      {children
        ? children
        : (item, index) =>
            isWidthDown(forWidthLowerShowOneCard, width) ? (
              <Card
                image={item.image}
                title={item.title}
                imageMaxWidth={imageMaxWidth}
                imageMaxHeight={imageMaxHeight}
                cardMarginX={cardMarginX}
                cardMarginY={cardMarginY}
                key={index}
              />
            ) : (
              <GridBase container justify={cardsContainerJustify} key={index}>
                {item.map((item, index) => (
                  <Card
                    image={item.image}
                    title={item.title}
                    imageMaxWidth={imageMaxWidth}
                    imageMaxHeight={imageMaxHeight}
                    cardMarginX={cardMarginX}
                    cardMarginY={cardMarginY}
                    key={index}
                  />
                ))}
              </GridBase>
            )}
    </Slideshow>
  );
}

export default withWidth()(SlideshowWithPagination);

SlideshowWithPagination.propTypes = {
  options: PropTypes.array,
  children: PropTypes.array,
  width: PropTypes.string.isRequired,
  numberOfCardsPerScreen: PropTypes.number,
  forWidthLowerShowOneCard: PropTypes.string,
  cardsContainerJustify: PropTypes.string,
  cardMarginX: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  cardMarginY: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  imageMaxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageMaxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rest: PropTypes.any,
};
