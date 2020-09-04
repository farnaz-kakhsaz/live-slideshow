import React, { useState } from "react";
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
  var desktopCards = splitToChunks(CARDS_DETAILS, 3);
  let moblieCards = CARDS_DETAILS;

  const [state, setState] = useState({
    numbers: false,
    dots: false,
    arrows: false,
  });

  const handleChange = (event) => {
    const { name } = event.target;
    setState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  return (
    <section>
      <Box my={{ xs: 5, sm: 20 }}>
        <Container maxWidth="xl">
          <Box textAlign="center">
            <UploadImage />
            <Box
              textAlign={{ xs: "start", sm: "center" }}
              mb={{ xs: "20px", sm: "40px" }}
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
          </Box>
          <Box
            fontFamily="'Segoe UI', sans-serif"
            lineHeight={1}
            fontSize={{ xs: 26, sm: 36 }}
            textAlign="center"
            mb={3}
          >
            {handleTitle(state.numbers, state.dots, state.arrows)}
          </Box>
          <Slideshow
            options={isWidthDown("md", width) ? moblieCards : desktopCards}
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
