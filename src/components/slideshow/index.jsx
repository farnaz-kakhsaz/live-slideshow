import React, { useState } from "react";
import PropTypes from "prop-types";
// Components
import Arrow from "./Arrow"
import PaginationDot from "./PaginationDot";
// Material-UI
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Slideshow({ children, options, showDots, showArrow, dotMarginTop }) {
  const [activeStep, setActiveStep] = useState(0);

  function handleStepChange(step) {
    setActiveStep(step);
  }

  const handleArrowClick = (position) => (event) => {
    if (position === "right") {
      const step = activeStep + 1 > options.length - 1 ? 0 : activeStep + 1
      setActiveStep(step)
    } else if (position === "left") {
      const step = activeStep - 1 < 0 ? options.length - 1 : activeStep - 1
      setActiveStep(step)
    }
  }

  const handleDotClick = (step) => (event) => {
    setActiveStep(step)
  }

  return (
    <>
      <Box position="relative" maxWidth="100%">
        {
          showArrow && (
            <Arrow handleArrowClick={handleArrowClick} />
          )
        }
        <Container>
          <AutoPlaySwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={6000}
            springConfig={{
              duration: "1s",
              easeFunction: "ease-in-out",
              delay: "0s"
            }}
          >

            {options.map((item, index) => {
              return (
                <Box display="flex" justifyContent="center" key={index}>
                  {Math.abs(activeStep - index) <= 2 ? children(item) : null}
                </Box>
              );
            })}

          </AutoPlaySwipeableViews>
        </Container>
      </Box>
      {
        showDots &&
        <Box display="flex" justifyContent="center" mt={dotMarginTop}>
          {
            options.map((item, index) =>
              <PaginationDot
                dots={options.length}
                activeDot={index === activeStep}
                index={index}
                handleDotClick={handleDotClick}
                key={index}
              />
            )
          }
        </Box>
      }
    </>
  );
}

Slideshow.propTypes = {
  children: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  showDots: PropTypes.bool,
  showArrow: PropTypes.bool,
  dotMarginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

};
