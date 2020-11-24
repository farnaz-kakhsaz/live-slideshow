import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
// Components
import HeaderSection from "./header-section";
import ImagePreviewAndUploadSection from "./image-preview-and-upload-section";
import CheckboxSection from "./checkbox-section";
import FooterSection from "./footer-section";
import SlideshowWithPagination from "../slideshow";
import DrawerMenuContainer from "../drawer-menu/drawer-menu-container/drawer-menu-container.component";
import ContainerBase from "../items-base/container-base/container-base";
import BoxBase from "../items-base/box-base/box-base";
import { handleTitle } from "../../helper/handleTitle";
import { removeItem } from "../../helper/removeItem";
import { isEqual } from "../../helper/isEqual";
// Constants
import CARDS_DETAILS from "../../constants/card-details";
// Styles
import { useStyles } from "./home-page.styles";

const INITIAL_STATE_FOR_DRAWER = {
  autoPlay: true,
  enableMouseEvents: true,
  numberOfCardsPerScreen: 3,
  cardWidth: 390,
  cardHeight: 245,
  slideshowContainerMaxWidth: "lg",
  showOneCardForWidthLower: "md",
  cardsContainerJustify: "space-around",
  cardMarginX: 0,
  cardMarginY: 1,
};

export default function HomePage() {
  const [state, setState] = useState({
    oneCardPerScreen: CARDS_DETAILS,
    showNewTitle: "Simple Slideshow",
    numbers: false,
    dots: false,
    arrows: false,
    showError: false,
    shakeAnimationEnd: true,
    whichImageFade: -1,
    showImagePreviewResetBtn: false,
    openDrawer: false,
    startPulseAnimation: true,
    showDrawerResetBtn: false,
    ...INITIAL_STATE_FOR_DRAWER,
  });
  const scrollToBottom = useRef(null);
  const classes = useStyles();

  // Change title name & Scroll to bottom
  useEffect(() => {
    if (state.numbers || state.dots || state.arrows) {
      scrollToBottom.current.scrollIntoView({ behavior: "smooth" });
    }
    setState((prevState) => ({
      ...prevState,
      showNewTitle: handleTitle(state.numbers, state.dots, state.arrows),
    }));
  }, [state.numbers, state.dots, state.arrows]);

  // Show image preview rest button
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      showImagePreviewResetBtn: isEqual(
        CARDS_DETAILS,
        prevState.oneCardPerScreen
      )
        ? false
        : true,
    }));
  }, [state.oneCardPerScreen]);

  // Show drawer reset button
  useEffect(() => {
    const drawerState = {
      autoPlay: state.autoPlay,
      enableMouseEvents: state.enableMouseEvents,
      numberOfCardsPerScreen: state.numberOfCardsPerScreen,
      cardWidth: state.cardWidth,
      cardHeight: state.cardHeight,
      slideshowContainerMaxWidth: state.slideshowContainerMaxWidth,
      showOneCardForWidthLower: state.showOneCardForWidthLower,
      cardsContainerJustify: state.cardsContainerJustify,
      cardMarginX: state.cardMarginX,
      cardMarginY: state.cardMarginY,
    };
    setState((prevState) => ({
      ...prevState,
      showDrawerResetBtn: isEqual(INITIAL_STATE_FOR_DRAWER, drawerState)
        ? false
        : true,
    }));
  }, [
    state.autoPlay,
    state.enableMouseEvents,
    state.numberOfCardsPerScreen,
    state.cardWidth,
    state.cardHeight,
    state.slideshowContainerMaxWidth,
    state.showOneCardForWidthLower,
    state.cardsContainerJustify,
    state.cardMarginX,
    state.cardMarginY,
  ]);

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
        shakeAnimationEnd: true,
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
      shakeAnimationEnd: prevState.showError ? false : true,
    }));
  };

  const handleDrawerOpen = () => {
    setState((prevState) => ({
      ...prevState,
      openDrawer: !prevState.openDrawer,
      startPulseAnimation: false,
    }));
  };

  const handleResetDrawerItem = () => {
    setState((prevState) => ({ ...prevState, ...INITIAL_STATE_FOR_DRAWER }));
  };

  const handleDrawerItemChange = (name) => (event, newValue) => {
    const { value } = event.target;
    const switchBtn = name === "enableMouseEvents" || name === "autoPlay";
    const sliderBtn =
      name === "numberOfCardsPerScreen" ||
      name === "cardWidth" ||
      name === "cardHeight" ||
      name === "cardMarginX" ||
      name === "cardMarginY";
    const dropdownMenu =
      name === "showOneCardForWidthLower" ||
      name === "slideshowContainerMaxWidth" ||
      name === "cardsContainerJustify";

    if (switchBtn) {
      setState((prevState) => ({
        ...prevState,
        [name]: !prevState[name],
      }));
    } else if (sliderBtn) {
      setState((prevState) => ({
        ...prevState,
        [name]: newValue,
      }));
    } else if (dropdownMenu) {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <div className={classes.root}>
        <BoxBase
          mt={4}
          mb={{ xs: 9, sm: 4 }}
          textAlign="center"
          className={clsx(classes.content, {
            [classes.contentShift]: state.openDrawer,
          })}
        >
          <ContainerBase maxWidth={false}>
            <header>
              <HeaderSection />
            </header>
            <section>
              <ImagePreviewAndUploadSection
                oneCardPerScreen={state.oneCardPerScreen}
                shakeAnimationEnd={state.shakeAnimationEnd}
                whichImageFade={state.whichImageFade}
                showError={state.showError}
                showImagePreviewResetBtn={state.showImagePreviewResetBtn}
                handleRemoveItem={handleRemoveItem}
                handleShakeAnimation={handleShakeAnimation}
                handleAddImage={handleAddImage}
                handleResetImagePreview={handleResetImagePreview}
              />
            </section>
            <section>
              <CheckboxSection
                numbers={state.numbers}
                dots={state.dots}
                arrows={state.arrows}
                handleCheckboxChange={handleCheckboxChange}
              />
              <div ref={scrollToBottom} />
              <BoxBase
                fontSize={{ xs: 26, sm: 36, md: 46 }}
                letterSpacing="1px"
                textAlign="center"
                component="h2"
                fontWeight="fontWeightMedium"
                mb={{ xs: 4, sm: 5 }}
                mt={0}
              >
                {state.showNewTitle}
              </BoxBase>
              <SlideshowWithPagination
                options={state.oneCardPerScreen}
                showNumbers={state.numbers}
                showDots={state.dots}
                showArrows={state.arrows}
                autoPlay={state.autoPlay}
                enableMouseEvents={state.enableMouseEvents}
                numberOfCardsPerScreen={state.numberOfCardsPerScreen}
                showOneCardForWidthLower={state.showOneCardForWidthLower}
                slideshowContainerMaxWidth={state.slideshowContainerMaxWidth}
                cardsContainerJustify={state.cardsContainerJustify}
                cardWidth={state.cardWidth}
                cardHeight={state.cardHeight}
                cardMarginX={state.cardMarginX}
                cardMarginY={state.cardMarginY}
                textColor="#bdbdbd"
              />
            </section>
          </ContainerBase>
          <ContainerBase>
            <footer>
              <FooterSection classes={classes} />
            </footer>
          </ContainerBase>
        </BoxBase>
        <DrawerMenuContainer
          openDrawer={state.openDrawer}
          startPulseAnimation={state.startPulseAnimation}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerItemChange={handleDrawerItemChange}
          handleResetDrawerItem={handleResetDrawerItem}
          showDrawerResetBtn={state.showDrawerResetBtn}
          autoPlay={state.autoPlay}
          enableMouseEvents={state.enableMouseEvents}
          numberOfCardsPerScreen={state.numberOfCardsPerScreen}
          showOneCardForWidthLower={state.showOneCardForWidthLower}
          slideshowContainerMaxWidth={state.slideshowContainerMaxWidth}
          cardsContainerJustify={state.cardsContainerJustify}
          cardWidth={state.cardWidth}
          cardHeight={state.cardHeight}
          cardMarginX={state.cardMarginX}
          cardMarginY={state.cardMarginY}
        />
      </div>
    </>
  );
}
