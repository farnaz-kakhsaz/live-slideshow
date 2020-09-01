import React, { useState } from "react";
// Components
import Card from "./Card";
import Slideshow from "./slideshow";
import CARDS from "../constants/CardAssets";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function HomePage({ width }) {
  let moblieArray = [].concat.apply([], CARDS);
  const [state, setState] = useState({
    numbers: false,
    dots: false,
    arrows: false,
  });

  const handleChange = (event) => {
    const { name } = event.target;
    setState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  const handleTitle = () => {
    const isOneClicked = state.numbers || state.dots || state.arrows;

    if (isOneClicked) {
      let result = "";
      const howManyClicked = state.numbers + state.dots + state.arrows;
      const whitchOneLTR = state.numbers
        ? "Numbers"
        : state.dots
        ? "Dots"
        : state.arrows && "Arrows";
      const whitchOneRTL = state.arrows
        ? "Arrows"
        : state.dots
        ? "Dots"
        : state.numbers && "Numbers";

      switch (howManyClicked) {
        case 1:
          result = whitchOneLTR;
          break;
        case 2:
          result = `${whitchOneLTR} and ${whitchOneRTL}`;
          break;
        default:
          return "Slideshow with Numbers, Dots and Arrows";
      }
      return "Slidshow with " + result;
    } else {
      return "Simple Slideshow";
    }
  };

  return (
    <section>
      <Box my={{ xs: 5, sm: 20 }}>
        <Container maxWidth="xl">
          <Box textAlign="center">
            <Box
              textAlign={{ xs: "start", sm: "center" }}
              mb={{ xs: "20px", sm: "40px" }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.numbers}
                    onChange={handleChange}
                    name="numbers"
                  />
                }
                label="Slideshow with Numbers"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.dots}
                    onChange={handleChange}
                    name="dots"
                  />
                }
                label="Slideshow with Dots"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.arrows}
                    onChange={handleChange}
                    name="arrows"
                  />
                }
                label="Slideshow with Arrows"
              />
            </Box>
          </Box>
          <Box
            fontFamily="'Segoe UI', sans-serif"
            lineHeight={1}
            fontSize={36}
            textAlign="center"
            mb={3}
          >
            {handleTitle()}
          </Box>
          <Slideshow
            options={isWidthDown("md", width) ? moblieArray : CARDS}
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
