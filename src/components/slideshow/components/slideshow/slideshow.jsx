import React, { useState } from "react";
import PropTypes from "prop-types";
// Components
import PaginationNumber from "./pagination-number/pagination-number";
import PaginationDot from "./pagination-dot/pagination-dot.component";
import Arrow from "./arrow/arrow.component";
import ContainerBase from "../items-base/container-base/container-base";
import BoxBase from "../items-base/box-base/box-base";
// Material-UI
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
  slideshowContainerMaxWidth,
  paginationMarginTop,
  autoPlay,
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
      <BoxBase position="relative" maxWidth="100%">
        {showArrows && <Arrow handleArrowClick={handleArrowClick} />}
        <ContainerBase maxWidth={slideshowContainerMaxWidth} disableGutters>
          {autoPlay ? (
            <AutoPlaySwipeableViews
              index={activeStep}
              onChangeIndex={handleStepChange}
              {...rest}
            >
              {childrenArray
                ? childrenArray
                : options.map((item, index, array) =>
                    children(item, index, array)
                  )}
            </AutoPlaySwipeableViews>
          ) : (
            <SwipeableViews
              index={activeStep}
              onChangeIndex={handleStepChange}
              {...rest}
            >
              {childrenArray
                ? childrenArray
                : options.map((item, index, array) =>
                    children(item, index, array)
                  )}
            </SwipeableViews>
          )}
        </ContainerBase>
      </BoxBase>
      {showDots && (
        <BoxBase
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
        </BoxBase>
      )}
      {showNumbers && (
        <BoxBase
          display="flex"
          justifyContent="center"
          mt={paginationMarginTop}
        >
          {showNumbers && (
            <PaginationNumber
              totalNumber={options.length}
              activeStep={activeStep + 1}
            />
          )}
        </BoxBase>
      )}
    </>
  );
}

Slideshow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
  childrenArray: PropTypes.array,
  options: PropTypes.array,
  showDots: PropTypes.bool,
  showNumbers: PropTypes.bool,
  showArrows: PropTypes.bool,
  slideshowContainerMaxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  paginationMarginTop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  autoPlay: PropTypes.bool,
  rest: PropTypes.any,
};
