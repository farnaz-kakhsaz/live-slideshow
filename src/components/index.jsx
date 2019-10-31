import React from "react";
// Components
import Card from "./Card";
import Slideshow from "./slideshow";
// Images
import Image1 from "../assets/images/image-1.jpg";
import Image2 from "../assets/images/image-2.jpg";
import Image3 from "../assets/images/image-3.jpg";
import Image4 from "../assets/images/image-4.jpg";
import Image5 from "../assets/images/image-5.jpg";
import Image6 from "../assets/images/image-6.jpg";
import Image7 from "../assets/images/image-7.jpg";
import Image8 from "../assets/images/image-8.jpg";
import Image9 from "../assets/images/image-9.jpg";
import Image10 from "../assets/images/image-10.jpg";
import Image11 from "../assets/images/image-11.jpg";
import Image12 from "../assets/images/image-12.jpg";

// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const CARDS = [
  [
    {
      image: Image1,
      text: "Cyberpunk 2077"
    },
    {
      image: Image2,
      text: "Tom Clancy's Rainbow Six Siege"
    },
    {
      image: Image3,
      text: "Final Fantasy 7"
    },
  ],
  [
    {
      image: Image4,
      text: "Mirror's Edge"
    },
    {
      image: Image5,
      text: "Hitman: Absolution"
    },
    {
      image: Image6,
      text: "Fall out 4"
    }
  ],
  [
    {
      image: Image7,
      text: "Call of Duty: Advanced Warfare"
    },
    {
      image: Image8,
      text: "Killzone 5"
    },
    {
      image: Image9,
      text: "Hitman: Absolution"
    },
  ],
  [
    {
      image: Image10,
      text: "Last of Us: Part 2"
    },
    {
      image: Image11,
      text: "Tomb Raider"
    },
    {
      image: Image12,
      text: "Watch Dogs"
    }
  ],
];

function Section5({ width }) {
  let moblieArray = [].concat.apply([], CARDS);

  return (
    <section>
      <Box bgcolor="rgb(21, 32, 43)" py={10}>
        <Container maxWidth="xl">
          <Box fontFamily="'Segoe UI', sans-serif" color="grey.400"
            lineHeight={1} fontSize={36} textAlign="center" mb={3}>
            Simple Slideshow
          </Box>
          <Slideshow
            options={isWidthDown("md", width) ? moblieArray : CARDS}
            dotMarginTop={{ xs: 3 }}
          >
            {item =>
              isWidthDown("md", width) ? (
                <Card image={item.image} text={item.text} />
              ) : (
                  <Grid container justify="space-between">
                    {item.map((item, index) => (
                      <Card image={item.image} text={item.text} key={index} />
                    ))}
                  </Grid>
                )
            }
          </Slideshow>

          <Box fontFamily="'Segoe UI', sans-serif" color="grey.400"
            lineHeight={1} fontSize={36} textAlign="center" mt={8} mb={3}>
            Slideshow with Dots
          </Box>
          <Slideshow
            options={isWidthDown("md", width) ? moblieArray : CARDS}
            dotMarginTop={{ xs: 3 }}
            showDots
          >
            {item =>
              isWidthDown("md", width) ? (
                <Card image={item.image} text={item.text} />
              ) : (
                  <Grid container justify="space-between">
                    {item.map((item, index) => (
                      <Card image={item.image} text={item.text} key={index} />
                    ))}
                  </Grid>
                )
            }
          </Slideshow>

          <Box fontFamily="'Segoe UI', sans-serif" color="grey.400"
            lineHeight={1} fontSize={36} textAlign="center" mt={8} mb={3}>
            Slideshow with Dots and Arrow
          </Box>
          <Slideshow
            options={isWidthDown("md", width) ? moblieArray : CARDS}
            dotMarginTop={{ xs: 3 }}
            showDots
            showArrow
          >
            {item =>
              isWidthDown("md", width) ? (
                <Card image={item.image} text={item.text} />
              ) : (
                  <Grid container justify="space-between">
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

export default withWidth()(Section5);
