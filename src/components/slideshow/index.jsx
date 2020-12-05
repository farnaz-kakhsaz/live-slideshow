import React, { useState, useEffect, Suspense, lazy } from "react";
import PropTypes from "prop-types";
// Components
import Slideshow from "./components/slideshow/slideshow";
import GridBase from "./components/items-base/grid-base/grid-base";
import CircularProgress from "./components/items-base/circular-progress-base/circular-progress-base";
import { splitToChunks } from "./helper/splitToChunks";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
// Code Split (Components)
const Card = lazy(() => import("./components/card/card.component"));

function SlideshowWithPagination({
  width,
  options = [],
  children,
  autoPlay = true,
  enableMouseEvents = true,
  numberOfCardsPerScreen = 3,
  showOneCardForWidthLower = "md",
  slideshowContainerMaxWidth = "lg",
  cardsContainerJustify = "space-around",
  cardWidth = 390,
  cardHeight = 245,
  cardMarginX = 0,
  cardMarginY = 0,
  textColor = "rgba(0, 0, 0, 0.87)",
  lightColorBtn = "#bdbdbd",
  darkColorBtn = "#616161",
  paginationMarginTop = 3,
  interval = 5000,
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
    if (options.length) {
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
      autoPlay={autoPlay}
      enableMouseEvents={enableMouseEvents}
      textColor={textColor}
      lightColorBtn={lightColorBtn}
      darkColorBtn={darkColorBtn}
      paginationMarginTop={paginationMarginTop}
      interval={interval}
      springConfig={springConfig}
      {...rest}
    >
      {children
        ? children
        : (item, index) =>
            isWidthDown(showOneCardForWidthLower, width) ? (
              <Suspense fallback={<CircularProgress />} key={index}>
                <Card
                  image={item.image}
                  title={item.title}
                  cardWidth={cardWidth}
                  cardHeight={cardHeight}
                  cardMarginX={cardMarginX}
                  cardMarginY={cardMarginY}
                  textColor={textColor}
                  showOneCard
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
                      textColor={textColor}
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
  autoPlay: PropTypes.bool,
  enableMouseEvents: PropTypes.bool,
  numberOfCardsPerScreen: PropTypes.number,
  showOneCardForWidthLower: PropTypes.string,
  slideshowContainerMaxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  cardsContainerJustify: PropTypes.string,
  cardWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cardHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
  textColor: PropTypes.string,
  lightColorBtn: PropTypes.string,
  darkColorBtn: PropTypes.string,
  paginationMarginTop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  interval: PropTypes.number,
  springConfig: PropTypes.object,
  rest: PropTypes.any,
};
