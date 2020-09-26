import React, { useState } from "react";
import PropTypes from "prop-types";
// Components
import Card from "./card/card.component";
import ImagePreviewContainer from "./image-preview/image-preview-container.component";
import Slideshow from "./slideshow/slideshow.component";
import UploadImage from "./upload-image/upload-image.component";
import CheckboxInput from "./checkbox-input/checkbox-input.component";
import CARDS_DETAILS from "../constants/card-details";
import { handleTitle } from "../helper/handleTitle";
import { splitToChunks } from "../helper/splitToChunks";
import { removeItem } from "../helper/removeItem";
import { isEqual } from "../helper/isEqual";
// Material-UI
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Grow from "@material-ui/core/Grow";

function HomePage({ width }) {
  const [state, setState] = useState({
    threeCardsPerScreen: splitToChunks([...CARDS_DETAILS], 3),
    oneCardPerScreen: CARDS_DETAILS,
    numbers: false,
    dots: false,
    arrows: false,
    showError: false,
    shakeEnd: true,
    whichOneFade: -1,
  });

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  const handleAddImage = (value, name) => {
    const newImageObj = {
      image: URL.createObjectURL(value),
      title: name,
    };

    setState((prevState) => ({
      ...prevState,
      threeCardsPerScreen: splitToChunks(
        [...prevState.oneCardPerScreen, newImageObj],
        3
      ),
      oneCardPerScreen: [...prevState.oneCardPerScreen, newImageObj],
      showError: prevState.oneCardPerScreen.length < 4 ? true : false,
    }));
  };

  const handleRemoveItem = (itemIndex) => {
    if (state.oneCardPerScreen.length > 4) {
      setState((prevState) => ({
        ...prevState,
        whichOneFade: itemIndex,
      }));

      // The 600ms set based on timeout that we set on the Grow component in the ImagePreviewItem component.
      setTimeout(() => {
        const newArray = removeItem([...state.oneCardPerScreen], itemIndex);
        setState((prevState) => ({
          ...prevState,
          threeCardsPerScreen: splitToChunks(newArray, 3),
          oneCardPerScreen: newArray,
          whichOneFade: -1,
        }));
      }, 600);
    } else {
      setState((prevState) => ({
        ...prevState,
        showError: true,
        shakeEnd: true,
      }));
    }
  };

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      threeCardsPerScreen: splitToChunks([...CARDS_DETAILS], 3),
      oneCardPerScreen: CARDS_DETAILS,
      showError: false,
    }));
  };

  const handleShakeAnimation = () => {
    setState((prevState) => ({
      ...prevState,
      shakeEnd: prevState.showError ? false : true,
    }));
  };

  return (
    <section>
      <Box my={5} textAlign="center">
        <Container maxWidth="xl">
          <Box
            display="inline-block"
            fontSize={{ xs: 32, sm: 42, md: 52 }}
            fontWeight="bold"
            component="h1"
            borderBottom="3px solid"
            my="0"
          >
            Go ahead and add or remove photos
            <span role="img" aria-label="winking face">
              &#128521;
            </span>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            alignItems="center"
            justifyContent="center"
            mt={8}
          >
            <Box display="flex" flexDirection="column">
              <ImagePreviewContainer
                cards={state.oneCardPerScreen}
                shakeIt={state.showError && state.shakeEnd ? true : false}
                whichOneFade={state.whichOneFade}
                handleRemoveItem={handleRemoveItem}
                handleShakeAnimation={handleShakeAnimation}
              />
              {state.showError && (
                <Grow in={state.showError} timeout={700}>
                  <Box
                    color="#f44336"
                    letterSpacing="1px"
                    fontSize="0.86rem"
                    component="p"
                    mt={3}
                    mb={0}
                  >
                    Can't contain less than 4 items!
                  </Box>
                </Grow>
              )}
            </Box>
            <UploadImage
              handleAddImage={handleAddImage}
              handleReset={handleReset}
              showResetBtn={isEqual(CARDS_DETAILS, state.oneCardPerScreen)}
            />
          </Box>
          <Box
            textAlign="center"
            mt={{ xs: "37px", sm: "47px" }}
            mb={{ xs: "30px", sm: "40px" }}
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
            fontSize={{ xs: 26, sm: 36, md: 46 }}
            letterSpacing="1px"
            textAlign="center"
            component="h2"
            fontWeight="600"
            mb={5}
          >
            {handleTitle(state.numbers, state.dots, state.arrows)}
          </Box>
          <Slideshow
            options={
              isWidthDown("md", width)
                ? state.oneCardPerScreen
                : state.threeCardsPerScreen
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
