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

function HomePage({ width }) {
  let moblieArray = [].concat.apply([], CARDS);
  const [state, setState] = useState({
    numbers: false,
    dots: false,
    arrows: false,
  });

  const handleChange = (event) => {
    const { id } = event.target;
    setState((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <section>
      <Box py={20}>
        <Container maxWidth="xl">
          <input type="checkbox" id="numbers" onChange={handleChange} />
          <label htmlFor="numbers">Slideshow with Numbers</label>
          <input type="checkbox" id="dots" onChange={handleChange} />
          <label htmlFor="dots">Slideshow with Dots</label>
          <input type="checkbox" id="arrows" onChange={handleChange} />
          <label htmlFor="arrows">Slideshow with Arrow</label>
          <h2>{state.numbers}</h2>
          <h2>{state.dots}</h2>
          <h2>{state.arrows}</h2>
          <Box
            fontFamily="'Segoe UI', sans-serif"
            color="grey.400"
            lineHeight={1}
            fontSize={36}
            textAlign="center"
            mb={3}
          >
            Simple Slideshow
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
