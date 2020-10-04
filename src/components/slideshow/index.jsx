import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// Components
import Slideshow from "./components/slideshow/slideshow.component";
import Card from "./components/card/card.component";
import { splitToChunks } from "./helper/splitToChunks";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";

function SlideshowWithPagination({
  width,
  options,
  children,
  showDots,
  showNumbers,
  showArrows,
  paginationMarginTop,
  numberOfCardsPerScreen,
}) {
  const [oneCardPerScreen, setOneCardPerScreen] = useState(options);
  const [multipleCardsPerScreen, setMultipleCardPerScreen] = useState(
    splitToChunks(options, numberOfCardsPerScreen)
  );

  return (
    <Slideshow
      options={
        isWidthDown("md", width) ? oneCardPerScreen : multipleCardsPerScreen
      }
      showNumbers={showNumbers}
      showDots={showDots}
      showArrows={showArrows}
      paginationMarginTop={paginationMarginTop}
    >
      {(item, index) =>
        isWidthDown("md", width) ? (
          <Card image={item.image} title={item.title} key={index} />
        ) : (
          <Grid container justify="space-evenly" key={index}>
            {item.map((item, index) => (
              <Card image={item.image} title={item.title} key={index} />
            ))}
          </Grid>
        )
      }
    </Slideshow>
  );
}

export default withWidth()(SlideshowWithPagination);

SlideshowWithPagination.propTypes = {
  options: PropTypes.array.isRequired,
  numberOfCardsPerScreen: PropTypes.number,
  children: PropTypes.element,
  showDots: PropTypes.bool,
  showNumbers: PropTypes.bool,
  showArrows: PropTypes.bool,
  paginationMarginTop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  width: PropTypes.string.isRequired,
};
