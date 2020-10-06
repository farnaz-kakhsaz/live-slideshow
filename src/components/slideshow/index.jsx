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
  imageContainerJustify,
  numberOfCardsPerScreen,
  ...rest
}) {
  const [oneCardPerScreen, setOneCardPerScreen] = useState(options);
  const [multipleCardsPerScreen, setMultipleCardPerScreen] = useState(
    splitToChunks(options ? options : [], numberOfCardsPerScreen)
  );

  useEffect(() => {
    if (options) {
      setOneCardPerScreen(options);
      setMultipleCardPerScreen(splitToChunks(options, numberOfCardsPerScreen));
    }
  }, [options]);

  return (
    <Slideshow
      options={
        children
          ? children
          : isWidthDown("md", width)
          ? oneCardPerScreen
          : multipleCardsPerScreen
      }
      childrenArray={children}
      {...rest}
    >
      {children
        ? children
        : (item, index) =>
            isWidthDown("md", width) ? (
              <Card image={item.image} title={item.title} key={index} />
            ) : (
              <Grid
                container
                justify={
                  imageContainerJustify ? imageContainerJustify : "space-evenly"
                }
                key={index}
              >
                {item.map((item, index) => (
                  <Card image={item.image} title={item.title} key={index} />
                ))}
              </Grid>
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
  imageContainerJustify: PropTypes.string,
};
