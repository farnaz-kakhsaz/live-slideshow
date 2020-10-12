import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
// Components
import SlideshowWithPagination from "./slideshow";
import DrawerMenuContainer from "./drawer-menu/drawer-menu-container/drawer-menu-container.component";
import ImagePreviewContainer from "./image-preview/image-preview-container/image-preview-container.component";
import UploadImage from "./upload-image/upload-image.component";
import CheckboxBase from "./items-base/checkbox-base/checkbox-base.component";
import { handleTitle } from "../helper/handleTitle";
import { removeItem } from "../helper/removeItem";
import { isEqual } from "../helper/isEqual";
// Constants
import CARDS_DETAILS from "../constants/card-details";
// Material-UI
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grow from "@material-ui/core/Grow";
// Styles
import { useStyles } from "./home-page.styles";

export default function HomePage() {
  const [state, setState] = useState({
    oneCardPerScreen: CARDS_DETAILS,
    numbers: false,
    dots: false,
    arrows: false,
    showError: false,
    shakeEnd: true,
    whichOneFade: -1,
    openDrawer: false,
  });
  const scrollToBottom = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    if (state.numbers || state.dots || state.arrows) {
      scrollToBottom.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state.numbers, state.dots, state.arrows]);

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
      oneCardPerScreen: [...prevState.oneCardPerScreen, newImageObj],
      showError: prevState.oneCardPerScreen.length < 4 ? true : false,
    }));
  };

  const handleRemoveItem = (itemIndex) => (event) => {
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

  const handleDrawerOpen = () => {
    setState((prevState) => ({
      ...prevState,
      openDrawer: !prevState.openDrawer,
    }));
  };

  return (
    <section className={classes.root}>
      <Box
        my={5}
        textAlign="center"
        className={clsx(classes.content, {
          [classes.contentShift]: state.openDrawer,
        })}
      >
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
            <CheckboxBase
              value={state.numbers}
              name="numbers"
              label="Slideshow with Numbers"
              handleCheckboxChange={handleCheckboxChange}
            />
            <CheckboxBase
              value={state.dots}
              name="dots"
              label="Slideshow with Dots"
              handleCheckboxChange={handleCheckboxChange}
            />
            <CheckboxBase
              value={state.arrows}
              name="arrows"
              label="Slideshow with Arrows"
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

          <SlideshowWithPagination
            options={state.oneCardPerScreen}
            showNumbers={state.numbers}
            showDots={state.dots}
            showArrows={state.arrows}
            enableMouseEvents
            interval={5000}
            // forWidthLowerShowOneCard={"lg"}
            // numberOfCardsPerScreen={4}
            // paginationMarginTop={{ xs: 4 }}
            // imageContainerMaxWidth={"xl"}
            // imageContainerJustify={"space-between"}
            // imageMaxWidth={50}
            // imageMaxHeight={100}
            // springConfig={{
            //   duration: "1s",
            //   easeFunction: "ease-in-out",
            //   delay: "0s",
            // }}
          />
        </Container>
        <div ref={scrollToBottom} />
      </Box>
      <DrawerMenuContainer
        handleDrawerOpen={handleDrawerOpen}
        openDrawer={state.openDrawer}
      />
    </section>
  );
}
