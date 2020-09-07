import React, { useState } from "react";
import PropTypes from "prop-types";
// Components
import CARDS_DETAILS from "../constants/CardDetails";
import Card from "./card";
import Slideshow from "./slideshow";
import UploadImage from "./uploud-image";
import CheckboxInput from "./checkbox-input";
import { handleTitle } from "../helper/handleTitle";
import { splitToChunks } from "../helper/splitToChunks";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function HomePage({ width }) {
  const [state, setState] = useState({
    desktopCards: splitToChunks(CARDS_DETAILS, 3),
    moblieCards: CARDS_DETAILS,
    numbers: false,
    dots: false,
    arrows: false,
  });

  const handleChange = (event) => {
    const { name } = event.target;
    setState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  const updateImagesArray = (value, name) => {
    CARDS_DETAILS.push({
      image: URL.createObjectURL(value),
      text: name,
    });
    setState((prevState) => ({
      ...prevState,
      desktopCards: splitToChunks(CARDS_DETAILS, 3),
      moblieCards: CARDS_DETAILS,
    }));
  };

  return (
    <section>
      <Box my={{ xs: 5, sm: 10 }} textAlign="center">
        <Container maxWidth="xl">
          <UploadImage updateImagesArray={updateImagesArray} />
          <Box
            textAlign="center"
            mb={{ xs: "20px", sm: "40px" }}
            mt={{ sm: "20px" }}
          >
            <CheckboxInput
              value={state.numbers}
              name="numbers"
              text="Slideshow with Numbers"
              handleChange={handleChange}
            />
            <CheckboxInput
              value={state.dots}
              name="dots"
              text="Slideshow with Dots"
              handleChange={handleChange}
            />
            <CheckboxInput
              value={state.arrows}
              name="arrows"
              text="Slideshow with Arrows"
              handleChange={handleChange}
            />
          </Box>
          <Box
            fontFamily="'Segoe UI', sans-serif"
            lineHeight={1}
            fontSize={{ xs: 26, sm: 36 }}
            textAlign="center"
            mb={5}
          >
            {handleTitle(state.numbers, state.dots, state.arrows)}
          </Box>
          <Slideshow
            options={
              isWidthDown("md", width) ? state.moblieCards : state.desktopCards
            }
            paginationMarginTop={{ xs: 3 }}
            showNumbers={state.numbers}
            showDots={state.dots}
            showArrows={state.arrows}
          >
            {(item) =>
              isWidthDown("md", width) ? (
                <Card image={item.image} text={item.text} />
              ) : (
                <Grid container justify="space-evenly">
                  {item.map((item, index) => (
                    <Card image={item.image} text={item.text} key={index} />
                  ))}
                </Grid>
              )
            }
          </Slideshow>
        </Container>
      </Box>
    </section>
  );
}

export default withWidth()(HomePage);

HomePage.propTypes = {
  width: PropTypes.string.isRequired,
};
