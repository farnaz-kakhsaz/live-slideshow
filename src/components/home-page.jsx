import React, { useState } from "react";
import PropTypes from "prop-types";
// Components
import Card from "./card/card.component";
import ImagePreview from "./image-preview/image-preview.component";
import Slideshow from "./slideshow/slideshow.component";
import UploadImage from "./upload-image/upload-image.component";
import CheckboxInput from "./checkbox-input/checkbox-input.component";
import CARDS_DETAILS from "../constants/card-details";
import { handleTitle } from "../helper/handleTitle";
import { splitToChunks } from "../helper/splitToChunks";
import { removeItem } from "../helper/removeItem";
import { compareArrays } from "../helper/compareArrays";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function HomePage({ width }) {
  // mobileCards array contains all objects (spread), desktopCards contains all objects in 3 split chunks
  const [state, setState] = useState({
    desktopCards: splitToChunks([...CARDS_DETAILS], 3),
    moblieCards: CARDS_DETAILS,
    numbers: false,
    dots: false,
    arrows: false,
    showError: false,
  });

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  const handleRemoveItem = (itemIndex) => {
    if (state.moblieCards.length > 4) {
      const newArray = removeItem([...state.moblieCards], itemIndex);

      setState((prevState) => ({
        ...prevState,
        desktopCards: splitToChunks(newArray, 3),
        moblieCards: newArray,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        showError: true,
      }));
    }
  };

  const handleAddImage = (value, name) => {
    const newImageObj = {
      image: URL.createObjectURL(value),
      title: name,
    };

    setState((prevState) => ({
      ...prevState,
      desktopCards: splitToChunks([...prevState.moblieCards, newImageObj], 3),
      moblieCards: [...prevState.moblieCards, newImageObj],
      showError: prevState.moblieCards.length < 4 ? true : false,
    }));
  };

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      desktopCards: splitToChunks([...CARDS_DETAILS], 3),
      moblieCards: CARDS_DETAILS,
      showError: false,
    }));
  };

  return (
    <section>
      <Box my={5} textAlign="center">
        <Container maxWidth="xl">
          <Box fontSize="64px" component="h1" my="0">
            Go ahead and add or remove photos
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            alignItems="center"
            justifyContent="center"
            mt={10}
          >
            <Box display="flex" flexDirection="column">
              <ImagePreview
                cards={state.moblieCards}
                shakeIt={state.showError}
                handleRemoveItem={handleRemoveItem}
              />
              {state.showError && (
                <Box
                  color="#f44336"
                  letterSpacing="1px"
                  fontSize="0.86rem"
                  mt={3}
                >
                  Can't contain less than 4 items!
                </Box>
              )}
            </Box>
            <UploadImage
              handleAddImage={handleAddImage}
              handleReset={handleReset}
              showResetBtn={compareArrays(CARDS_DETAILS, state.moblieCards)}
            />
          </Box>
          <Box
            textAlign="center"
            mt={{ lg: "40px" }}
            mb={{ xs: "20px", sm: "40px" }}
          >
            <CheckboxInput
              value={state.numbers}
              name="numbers"
              title="Slideshow with Numbers"
              handleCheckboxChange={handleCheckboxChange}
            />
            <CheckboxInput
              value={state.dots}
              name="dots"
              title="Slideshow with Dots"
              handleCheckboxChange={handleCheckboxChange}
            />
            <CheckboxInput
              value={state.arrows}
              name="arrows"
              title="Slideshow with Arrows"
              handleCheckboxChange={handleCheckboxChange}
            />
          </Box>
          <Box
            lineHeight={1}
            fontSize={{ xs: 26, sm: 36, md: 46 }}
            fontWeight="600"
            letterSpacing="1px"
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
                <Card image={item.image} title={item.title} />
              ) : (
                <Grid container justify="space-evenly">
                  {item.map((item, index) => (
                    <Card image={item.image} title={item.title} key={index} />
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
