import React, { useState } from "react";
import PropTypes from "prop-types";
// Components
import Arrow from "./arrow.component";
import PaginationNumber from "./pagination-number.component";
import PaginationDot from "./pagination-dot.component";
// Material-UI
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Slideshow({
  children,
  childrenArray,
  options,
  showDots,
  showNumbers,
  showArrows,
  imageContainerMaxWidth,
  paginationMarginTop,
  ...rest
}) {
  const [activeStep, setActiveStep] = useState(0);

  function handleStepChange(step) {
    setActiveStep(step);
  }

  const handleArrowClick = (position) => (event) => {
    if (position === "right") {
      const step = activeStep + 1 > options.length - 1 ? 0 : activeStep + 1;
      setActiveStep(step);
    } else if (position === "left") {
      const step = activeStep - 1 < 0 ? options.length - 1 : activeStep - 1;
      setActiveStep(step);
    }
  };

  const handleDotClick = (step) => (event) => setActiveStep(step);

  return (
    <>
      <Box position="relative" maxWidth="100%">
        {showArrows && <Arrow handleArrowClick={handleArrowClick} />}
        <Container maxWidth={imageContainerMaxWidth} disableGutters>
          <AutoPlaySwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            springConfig={
              rest.springConfig
                ? rest.springConfig
                : {
                    duration: "1s",
                    easeFunction: "ease-in-out",
                    delay: "0s",
                  }
            }
            {...rest}
          >
            {childrenArray
              ? childrenArray
              : options.map((item, index, array) =>
                  children(item, index, array)
                )}
          </AutoPlaySwipeableViews>
        </Container>
      </Box>
      {showDots && (
        <Box
          display="flex"
          justifyContent="center"
          mt={paginationMarginTop ? paginationMarginTop : 3}
        >
          {showDots &&
            options.map((item, index) => (
              <PaginationDot
                dots={options.length}
                activeDot={index === activeStep}
                index={index}
                handleDotClick={handleDotClick}
                key={index}
              />
            ))}
        </Box>
      )}
      {showNumbers && (
        <Box
          display="flex"
          justifyContent="center"
          mt={paginationMarginTop ? paginationMarginTop : 3}
        >
          {showNumbers && (
            <PaginationNumber
              totalNumber={options.length}
              activeStep={activeStep + 1}
            />
          )}
        </Box>
      )}
    </>
  );
}

Slideshow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.array.isRequired,
  ]),
  childrenArray: PropTypes.array,
  options: PropTypes.array,
  showDots: PropTypes.bool,
  showNumbers: PropTypes.bool,
  showArrows: PropTypes.bool,
  imageContainerMaxWidth: PropTypes.string,
  paginationMarginTop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
};
