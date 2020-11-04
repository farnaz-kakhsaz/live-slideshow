import React, { useState, useEffect, Suspense, lazy } from "react";
import PropTypes from "prop-types";
// Components
import Slideshow from "./components/slideshow/slideshow";
import GridBase from "./components/items-base/grid-base/grid-base";
import CircularProgress from "../items-base/circular-progress-base/circular-progress-base";
import { splitToChunks } from "./helper/splitToChunks";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
// Code Split (Components)
const Card = lazy(() => import("./components/card/card.component"));

function SlideshowWithPagination({
  width,
  options = [],
  children,
  numberOfCardsPerScreen = 3,
  showOneCardForWidthLower = "md",
  cardsContainerJustify = "space-around",
  cardMarginX = 0,
  cardMarginY = 0,
  cardWidth = 390,
  cardHeight = 245,
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
          : isWidthDown(showOneCardForWidthLower, width)
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
            isWidthDown(showOneCardForWidthLower, width) ? (
              <Suspense fallback={<CircularProgress />}>
                <Card
                  image={item.image}
                  title={item.title}
                  cardWidth={cardWidth}
                  cardHeight={cardHeight}
                  cardMarginX={cardMarginX}
                  cardMarginY={cardMarginY}
                  showOneCard
                  key={index}
                />
              </Suspense>
            ) : (
              <GridBase container justify={cardsContainerJustify} key={index}>
                {item.map((item, index) => (
                  <Suspense fallback={<CircularProgress />} key={index}>
                    <Card
                      image={item.image}
                      title={item.title}
                      cardWidth={cardWidth}
                      cardHeight={cardHeight}
                      cardMarginX={cardMarginX}
                      cardMarginY={cardMarginY}
                    />
                  </Suspense>
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
  showOneCardForWidthLower: PropTypes.string,
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
  cardWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cardHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  slideshowContainerMaxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  paginationMarginTop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  springConfig: PropTypes.object,
  rest: PropTypes.any,
};
