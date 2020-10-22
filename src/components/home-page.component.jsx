import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
// Components
import SlideshowWithPagination from "./slideshow";
import DrawerMenuContainer from "./drawer-menu/drawer-menu-container/drawer-menu-container.component";
import ImagePreviewContainer from "./image-preview/image-preview-container/image-preview-container.component";
import UploadImage from "./upload-image/upload-image.component";
import ContainerBase from "./items-base/container-base/container-base";
import BoxBase from "./items-base/box-base/box-base";
import CheckboxBase from "./items-base/checkbox-base/checkbox-base.component";
import GrowBase from "./items-base/grow-base/grow-base";
import { handleTitle } from "../helper/handleTitle";
import { removeItem } from "../helper/removeItem";
import { isEqual } from "../helper/isEqual";
// Constants
import CARDS_DETAILS from "../constants/card-details";
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
    whichImageFade: -1,
    openDrawer: false,
    numberOfCardsPerScreen: 3,
    enableMouseEvents: true,
    imageMaxWidth: 375,
    imageMaxHeight: 234,
    slideshowContainerMaxWidth: "lg",
    forWidthLowerShowOneCard: "md",
    cardsContainerJustify: "space-evenly",
    cardMarginX: 0,
    cardMarginY: 1,
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
        whichImageFade: itemIndex,
      }));

      // The 600ms set based on timeout that we set on the Grow component in the ImagePreviewItem component.
      setTimeout(() => {
        const newArray = removeItem([...state.oneCardPerScreen], itemIndex);
        setState((prevState) => ({
          ...prevState,
          oneCardPerScreen: newArray,
          whichImageFade: -1,
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

  const handleResetImagePreview = () => {
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

  const handleDrawerItemChange = (name) => (event, newValue) => {
    const { value } = event.target;

    switch (name) {
      case "enableMouseEvents":
        setState((prevState) => ({
          ...prevState,
          [name]: !prevState[name],
        }));
        break;
      case "numberOfCardsPerScreen":
        setState((prevState) => ({
          ...prevState,
          [name]: newValue,
        }));
        break;
      case "imageMaxWidth":
        setState((prevState) => ({
          ...prevState,
          [name]: newValue,
        }));
        break;
      case "imageMaxHeight":
        setState((prevState) => ({
          ...prevState,
          [name]: newValue,
        }));
        break;
      case "forWidthLowerShowOneCard":
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
      case "slideshowContainerMaxWidth":
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
      case "cardsContainerJustify":
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
      case "cardMarginX":
        setState((prevState) => ({
          ...prevState,
          [name]: newValue,
        }));
        break;
      case "cardMarginY":
        setState((prevState) => ({
          ...prevState,
          [name]: newValue,
        }));
        break;
      default:
        console.error("Value didn't match in handleDrawerItemChange!");
    }
  };

  return (
    <section className={classes.root}>
      <BoxBase
        my={5}
        textAlign="center"
        className={clsx(classes.content, {
          [classes.contentShift]: state.openDrawer,
        })}
      >
        <ContainerBase maxWidth={false}>
          <BoxBase
            display="inline-block"
            fontSize={{ xs: 32, sm: 42, md: 52 }}
            fontWeight="fontWeightBold"
            component="h1"
            borderBottom="3px solid"
            my="0"
          >
            Go ahead and add or remove photos
            <span role="img" aria-label="winking face">
              &#128521;
            </span>
          </BoxBase>
          <BoxBase
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            alignItems="center"
            justifyContent="center"
            mt={8}
          >
            <BoxBase display="flex" flexDirection="column">
              <ImagePreviewContainer
                cards={state.oneCardPerScreen}
                shakeIt={state.showError && state.shakeEnd ? true : false}
                whichImageFade={state.whichImageFade}
                handleRemoveItem={handleRemoveItem}
                handleShakeAnimation={handleShakeAnimation}
              />
              {state.showError && (
                <GrowBase in={state.showError} timeout={700}>
                  <BoxBase
                    color="error.main"
                    letterSpacing="1px"
                    fontSize="0.86rem"
                    component="p"
                    mt={3}
                    mb={0}
                  >
                    Can't contain less than 4 items!
                  </BoxBase>
                </GrowBase>
              )}
            </BoxBase>
            <UploadImage
              handleAddImage={handleAddImage}
              handleResetImagePreview={handleResetImagePreview}
              showImagePreviewResetBtn={isEqual(
                CARDS_DETAILS,
                state.oneCardPerScreen
              )}
            />
          </BoxBase>
          <BoxBase
            textAlign="center"
            mt={{ xs: "37px", sm: "47px" }}
            mb={{ xs: "30px", sm: "40px" }}
          >
            <CheckboxBase
              checked={state.numbers}
              name="numbers"
              label="Slideshow with Numbers"
              onChange={handleCheckboxChange}
            />
            <CheckboxBase
              checked={state.dots}
              name="dots"
              label="Slideshow with Dots"
              onChange={handleCheckboxChange}
            />
            <CheckboxBase
              checked={state.arrows}
              name="arrows"
              label="Slideshow with Arrows"
              onChange={handleCheckboxChange}
            />
          </BoxBase>
          <BoxBase
            fontSize={{ xs: 26, sm: 36, md: 46 }}
            letterSpacing="1px"
            textAlign="center"
            component="h2"
            fontWeight="fontWeightMedium"
            mb={5}
          >
            {handleTitle(state.numbers, state.dots, state.arrows)}
          </BoxBase>
          <SlideshowWithPagination
            options={state.oneCardPerScreen}
            showNumbers={state.numbers}
            showDots={state.dots}
            showArrows={state.arrows}
            interval={5000}
            enableMouseEvents={state.enableMouseEvents}
            numberOfCardsPerScreen={state.numberOfCardsPerScreen}
            imageMaxWidth={state.imageMaxWidth}
            imageMaxHeight={state.imageMaxHeight}
            slideshowContainerMaxWidth={state.slideshowContainerMaxWidth}
            forWidthLowerShowOneCard={state.forWidthLowerShowOneCard}
            cardsContainerJustify={state.cardsContainerJustify}
            cardMarginX={state.cardMarginX}
            cardMarginY={state.cardMarginY}
            // paginationMarginTop={{ xs: 4 }}
            // springConfig={{
            //   duration: "1s",
            //   easeFunction: "ease-in-out",
            //   delay: "0s",
            // }}
          />
        </ContainerBase>
        <div ref={scrollToBottom} />
      </BoxBase>
      <DrawerMenuContainer
        openDrawer={state.openDrawer}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerItemChange={handleDrawerItemChange}
        enableMouseEvents={state.enableMouseEvents}
        numberOfCardsPerScreen={state.numberOfCardsPerScreen}
        imageMaxWidth={state.imageMaxWidth}
        imageMaxHeight={state.imageMaxHeight}
        slideshowContainerMaxWidth={state.slideshowContainerMaxWidth}
        forWidthLowerShowOneCard={state.forWidthLowerShowOneCard}
        cardsContainerJustify={state.cardsContainerJustify}
        cardMarginX={state.cardMarginX}
        cardMarginY={state.cardMarginY}
      />
    </section>
  );
}
