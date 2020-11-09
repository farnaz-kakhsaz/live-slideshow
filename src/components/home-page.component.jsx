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

    switch (name) {
      case "autoPlay":
        setState((prevState) => ({
          ...prevState,
          [name]: !prevState[name],
        }));
        break;
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
      case "cardWidth":
        setState((prevState) => ({
          ...prevState,
          [name]: newValue,
        }));
        break;
      case "cardHeight":
        setState((prevState) => ({
          ...prevState,
          [name]: newValue,
        }));
        break;
      case "showOneCardForWidthLower":
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
    <>
      <div className={classes.root}>
        <BoxBase
          my={4}
          textAlign="center"
          className={clsx(classes.content, {
            [classes.contentShift]: state.openDrawer,
          })}
        >
          <ContainerBase maxWidth={false}>
            <header>
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
            </header>
            <section>
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
                    shakeIt={
                      state.showError && state.shakeAnimationEnd ? true : false
                    }
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
                  showImagePreviewResetBtn={state.showImagePreviewResetBtn}
                />
              </BoxBase>
            </section>
            <section>
              <BoxBase
                textAlign="center"
                mt={{ xs: 5, sm: 7 }}
                mb={{ xs: 3, sm: 4 }}
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
              />
            </section>
          </ContainerBase>
          <footer>
            <div className={classes.divider} />
            <BoxBase display="flex" justifyContent="center" alignItems="center">
              <svg
                className={clsx(classes.icon, classes.iconStackOverflow)}
                id="_x3C_Layer_x3E_"
                version="1.1"
                viewBox="0 0 32 32"
                enable-background="new 0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="stackoverflow_x2C__Stack_overflow">
                  <g>
                    <rect
                      className="stack-overflow-rect"
                      height="2"
                      width="13"
                      x="9.5"
                      y="23.5"
                    />
                  </g>
                  <g>
                    <rect
                      className="stack-overflow-rect"
                      height="2"
                      transform="matrix(0.9763 0.2164 -0.2164 0.9763 4.6372 -3.0874)"
                      width="13.001"
                      x="9.913"
                      y="18.626"
                    />
                  </g>
                  <g>
                    <rect
                      className="stack-overflow-rect"
                      height="2"
                      transform="matrix(0.9063 0.4226 -0.4226 0.9063 8.0029 -6.185)"
                      width="12.999"
                      x="11.45"
                      y="13.956"
                    />
                  </g>
                  <g>
                    <rect
                      className="stack-overflow-rect"
                      height="2"
                      transform="matrix(0.7739 0.6334 -0.6334 0.7739 11.402 -10.5264)"
                      width="13"
                      x="13.942"
                      y="9.704"
                    />
                  </g>
                  <g>
                    <rect
                      className="stack-overflow-rect"
                      height="2"
                      transform="matrix(0.6087 0.7934 -0.7934 0.6087 15.0689 -16.2171)"
                      width="13"
                      x="17.476"
                      y="6.168"
                    />
                  </g>
                  <g>
                    <g>
                      <polygon
                        className="stack-overflow-polygon"
                        points="25.5,20.5 25.5,28.5 6.5,28.5 6.5,20.5 4.5,20.5 4.5,30.5 27.5,30.5 27.5,20.5    "
                      />
                    </g>
                    <g>
                      <path
                        className="stack-overflow-path"
                        d="M25.5,29h-19C6.224,29,6,28.776,6,28.5V21H4.5C4.224,21,4,20.776,4,20.5S4.224,20,4.5,20h2     C6.776,20,7,20.224,7,20.5V28h18v-3.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4C26,28.776,25.776,29,25.5,29z"
                      />
                    </g>
                    <g>
                      <path
                        className="stack-overflow-path"
                        d="M27.5,31h-23C4.224,31,4,30.776,4,30.5v-6C4,24.224,4.224,24,4.5,24S5,24.224,5,24.5V30h22v-9h-1.5     c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5v10C28,30.776,27.776,31,27.5,31z"
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      className="stack-overflow-path"
                      d="M22.5,26h-13C9.224,26,9,25.776,9,25.5v-2C9,23.224,9.224,23,9.5,23h10.958c0.276,0,0.5,0.224,0.5,0.5    s-0.224,0.5-0.5,0.5H10v1h12v-1.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v2C23,25.776,22.776,26,22.5,26z"
                    />
                  </g>
                  <g>
                    <path
                      className="stack-overflow-path"
                      d="M22.543,22.51c-0.036,0-0.072-0.004-0.108-0.012L9.742,19.684c-0.129-0.029-0.242-0.108-0.313-0.22    s-0.095-0.248-0.066-0.377l0.434-1.953c0.06-0.269,0.318-0.437,0.597-0.38l10.567,2.343c0.27,0.06,0.439,0.327,0.38,0.597    c-0.06,0.269-0.324,0.44-0.597,0.38l-10.079-2.235l-0.217,0.977l11.716,2.598l0.324-1.464c0.06-0.269,0.318-0.439,0.597-0.38    c0.27,0.06,0.439,0.327,0.38,0.597l-0.433,1.953c-0.028,0.129-0.107,0.242-0.22,0.313C22.73,22.483,22.638,22.51,22.543,22.51z"
                    />
                  </g>
                  <g>
                    <path
                      className="stack-overflow-path"
                      d="M23.418,19.109c-0.071,0-0.143-0.015-0.211-0.047l-11.781-5.494c-0.251-0.117-0.359-0.414-0.242-0.665    l0.845-1.813c0.056-0.12,0.157-0.213,0.282-0.258c0.125-0.046,0.262-0.04,0.382,0.017l9.743,4.543    c0.251,0.117,0.359,0.414,0.242,0.665c-0.117,0.251-0.416,0.357-0.664,0.242l-9.29-4.332l-0.423,0.906l10.875,5.071l0.635-1.359    c0.117-0.251,0.417-0.357,0.664-0.242c0.251,0.117,0.359,0.414,0.242,0.665l-0.846,1.813    C23.786,19.002,23.605,19.109,23.418,19.109z"
                    />
                  </g>
                  <g>
                    <path
                      className="stack-overflow-path"
                      d="M24.839,16.095c-0.115,0-0.227-0.04-0.316-0.113L14.462,7.748c-0.214-0.175-0.245-0.49-0.07-0.703    l1.267-1.548c0.084-0.103,0.205-0.168,0.337-0.181c0.129-0.015,0.264,0.026,0.366,0.111l8.262,6.762    c0.214,0.175,0.245,0.49,0.07,0.704c-0.174,0.213-0.49,0.245-0.703,0.07l-7.875-6.445l-0.634,0.774l9.287,7.601l0.95-1.161    c0.175-0.215,0.49-0.245,0.703-0.07c0.214,0.175,0.245,0.49,0.07,0.703l-1.267,1.548c-0.084,0.103-0.205,0.168-0.337,0.181    C24.872,16.094,24.855,16.095,24.839,16.095z"
                    />
                  </g>
                  <g>
                    <path
                      className="stack-overflow-path"
                      d="M27.139,13.434c-0.149,0-0.298-0.067-0.396-0.196L18.829,2.924c-0.081-0.105-0.116-0.238-0.1-0.37    c0.018-0.131,0.087-0.25,0.191-0.331l1.587-1.217c0.218-0.168,0.532-0.128,0.701,0.092l6.62,8.628    c0.168,0.219,0.127,0.533-0.092,0.701c-0.22,0.167-0.533,0.127-0.701-0.092L20.72,2.104l-0.793,0.608l7.305,9.521l1.189-0.913    c0.218-0.168,0.531-0.128,0.701,0.092c0.168,0.219,0.127,0.533-0.092,0.701l-1.587,1.217C27.353,13.4,27.245,13.434,27.139,13.434    z"
                    />
                  </g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <path
                                  className="stack-overflow-path"
                                  d="M5,22.5C5,22.775,4.775,23,4.5,23l0,0C4.225,23,4,22.775,4,22.5l0,0C4,22.225,4.225,22,4.5,22l0,0          C4.775,22,5,22.225,5,22.5L5,22.5z"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <path
                                  className="stack-overflow-path"
                                  d="M26,22.5c0,0.275-0.225,0.5-0.5,0.5l0,0c-0.275,0-0.5-0.225-0.5-0.5l0,0c0-0.275,0.225-0.5,0.5-0.5          l0,0C25.775,22,26,22.225,26,22.5L26,22.5z"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                className={clsx(classes.icon, classes.iconGitHub)}
                version="1.1"
                viewBox="0 0 32 32"
                enable-background="new 0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Github">
                  <circle className="git-hub-circle" cx="16" cy="16" r="14.5" />
                  <path
                    className="git-hub-path-blue"
                    d="M30.5,16c0-1.339-0.196-2.631-0.536-3.862C27.83,6.787,22.612,3,16.5,3C8.492,3,2,9.492,2,17.5   c0,1.339,0.196,2.631,0.536,3.862C4.67,26.713,9.888,30.5,16,30.5C24.008,30.5,30.5,24.008,30.5,16z"
                  />
                  <g>
                    <path
                      className="git-hub-path-white"
                      d="M20.95,29.614c-0.654,0.237-1.349-0.25-1.347-0.946c0.005-1.227,0.01-2.677,0.01-3.69    c0-1.358-0.464-2.246-0.984-2.696c3.23-0.36,6.62-1.591,6.62-7.183c0-1.59-0.561-2.889-1.491-3.907    c0.15-0.369,0.647-1.848-0.144-3.853c0,0-1.215-0.391-3.983,1.492c-1.158-0.323-2.399-0.484-3.63-0.49    c-1.233,0.006-2.473,0.167-3.63,0.49C9.601,6.949,8.383,7.34,8.383,7.34c-0.788,2.004-0.291,3.484-0.141,3.853    c-0.928,1.018-1.493,2.317-1.493,3.907c0,5.578,3.385,6.827,6.605,7.194c-0.415,0.364-0.79,1.006-0.921,1.946    c-0.827,0.373-2.926,1.016-4.221-1.209c0,0-0.766-1.397-2.22-1.5c0,0-1.417-0.018-0.1,0.885c0,0,0.951,0.448,1.609,2.129    c0,0,0.851,2.832,4.885,1.952c0.003,0.522,0.007,1.358,0.011,2.169c0.003,0.694-0.688,1.189-1.34,0.952    c-1.435-0.521-2.765-1.261-3.949-2.18C9.565,29.35,12.646,30.5,16,30.5c3.279,0,6.294-1.102,8.724-2.938    C23.584,28.421,22.316,29.118,20.95,29.614z"
                    />
                  </g>
                  <path
                    className="git-hub-path"
                    d="M11.393,30.176c-0.171,0-0.342-0.029-0.506-0.089C4.695,27.841,0.728,21.911,1.015,15.33   c0.012-0.275,0.232-0.485,0.521-0.478c0.276,0.012,0.49,0.246,0.478,0.521c-0.268,6.142,3.435,11.677,9.214,13.772   c0.151,0.056,0.318,0.033,0.453-0.063c0.139-0.098,0.218-0.25,0.217-0.417l-0.008-1.573c-3.927,0.561-4.857-2.375-4.867-2.406   c-0.552-1.405-1.342-1.82-1.35-1.824c-0.342-0.229-0.996-0.676-0.81-1.262c0.167-0.528,0.852-0.563,1.136-0.572   c1.736,0.122,2.616,1.693,2.652,1.76c0.956,1.643,2.414,1.446,3.335,1.094c0.09-0.452,0.239-0.863,0.439-1.216   c-2.872-0.486-6.176-1.973-6.176-7.568c0-1.531,0.479-2.88,1.424-4.016C7.465,10.408,7.205,8.97,7.917,7.157   C7.972,7.017,8.087,6.91,8.23,6.864C8.374,6.817,9.703,6.47,12.46,8.29c1.119-0.291,2.309-0.442,3.539-0.448   c1.234,0.006,2.423,0.157,3.543,0.448c2.756-1.82,4.08-1.473,4.226-1.426c0.143,0.046,0.257,0.153,0.312,0.292   c0.715,1.813,0.456,3.251,0.247,3.927c0.944,1.133,1.422,2.482,1.422,4.016c0,5.595-3.308,7.078-6.185,7.559   c0.354,0.623,0.549,1.426,0.549,2.32c0,1.013-0.005,2.465-0.01,3.692c0,0.166,0.077,0.315,0.214,0.412   c0.137,0.096,0.306,0.119,0.463,0.063C26.295,27.141,30,21.858,30,16c0-3.863-1.54-7.46-4.335-10.129   c-2.794-2.667-6.462-4.037-10.336-3.855c-0.275,0.021-0.509-0.201-0.523-0.476c-0.013-0.276,0.2-0.51,0.476-0.523   c4.152-0.19,8.08,1.274,11.073,4.131C29.351,8.007,31,11.861,31,16c0,6.277-3.97,11.937-9.878,14.084   c-0.463,0.167-0.978,0.099-1.38-0.185c-0.401-0.283-0.64-0.744-0.638-1.233c0.005-1.226,0.01-2.676,0.01-3.688   c0-1.459-0.567-2.107-0.811-2.317c-0.15-0.13-0.21-0.337-0.151-0.526c0.059-0.19,0.225-0.327,0.422-0.349   c3.054-0.34,6.176-1.401,6.176-6.686c0-1.38-0.458-2.582-1.36-3.569c-0.13-0.143-0.167-0.347-0.094-0.526   c0.139-0.34,0.524-1.537-0.042-3.198c-0.423,0.012-1.503,0.189-3.34,1.44c-0.122,0.083-0.274,0.109-0.416,0.068   c-1.084-0.302-2.293-0.465-3.499-0.472c-1.218,0.006-2.395,0.165-3.494,0.472c-0.141,0.042-0.293,0.015-0.416-0.068   c-1.83-1.245-2.91-1.427-3.346-1.438c-0.563,1.661-0.177,2.855-0.039,3.196c0.072,0.179,0.036,0.383-0.094,0.525   c-0.904,0.991-1.362,2.192-1.362,3.57c0,5.282,3.115,6.35,6.162,6.697c0.196,0.022,0.361,0.158,0.42,0.347   c0.059,0.188,0.001,0.395-0.147,0.525c-0.224,0.197-0.621,0.672-0.756,1.64c-0.023,0.17-0.133,0.316-0.29,0.386   c-0.75,0.338-3.316,1.237-4.858-1.413c-0.011-0.019-0.525-0.921-1.444-1.186c0.326,0.218,1.077,0.852,1.631,2.265   c0.043,0.133,0.808,2.409,4.313,1.646c0.148-0.031,0.301,0.003,0.419,0.098c0.118,0.094,0.187,0.237,0.188,0.387l0.011,2.17   c0.002,0.491-0.237,0.955-0.641,1.239C12,30.082,11.698,30.176,11.393,30.176z"
                  />
                  <path
                    className="git-hub-path"
                    d="M15.737,31C7.474,31,1,24.411,1,16c0-3.629,1.238-7.111,3.485-9.804c0.176-0.212,0.493-0.241,0.704-0.063   C5.401,6.31,5.43,6.625,5.253,6.837C3.155,9.35,2,12.604,2,16c0,7.851,6.034,14,13.737,14C23.602,30,30,23.72,30,16   S23.602,2,15.737,2c-2.441,0-4.812,0.62-6.858,1.792C8.641,3.927,8.334,3.845,8.197,3.606C8.06,3.366,8.143,3.061,8.382,2.923   C10.579,1.665,13.123,1,15.737,1C24.153,1,31,7.729,31,16S24.153,31,15.737,31z"
                  />
                  <g>
                    <g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <path
                                className="git-hub-path"
                                d="M7.543,4.552c0,0.275-0.225,0.5-0.5,0.5l0,0c-0.275,0-0.5-0.225-0.5-0.5l0,0         c0-0.275,0.225-0.5,0.5-0.5l0,0C7.318,4.052,7.543,4.276,7.543,4.552L7.543,4.552z"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                className={clsx(classes.icon, classes.iconLinkedIn)}
                viewBox="0 0 32 32"
                version="1.1"
                enable-background="new 0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="LinkedIn">
                  <path
                    className="linked-in-path-white"
                    d="M4.983,8.375H4.94c-2.087,0-3.44-1.367-3.44-3.101c0-1.767,1.393-3.106,3.523-3.106   c2.127,0,3.436,1.335,3.477,3.101C8.5,7.002,7.15,8.375,4.983,8.375z"
                    id="LinkedIn_3_"
                  />
                  <path
                    className="linked-in-path-blue"
                    d="M8.5,5.27C8.475,4.184,7.967,3.264,7.087,2.714C6.903,2.692,6.721,2.669,6.523,2.669   C4.393,2.669,3,4.008,3,5.775c0,1.072,0.52,2.001,1.408,2.556C4.582,8.352,4.755,8.375,4.94,8.375h0.043   C7.15,8.375,8.5,7.002,8.5,5.27z"
                  />
                  <path
                    className="linked-in-path"
                    d="M4.983,8.875H4.94C2.657,8.875,1,7.361,1,5.275c0-2.089,1.692-3.606,4.023-3.606   c2.292,0,3.928,1.476,3.977,3.589C9,7.359,7.311,8.875,4.983,8.875z M5.023,2.669C3.243,2.669,2,3.741,2,5.275   c0,1.531,1.209,2.601,2.94,2.601h0.043C6.76,7.875,8,6.804,8,5.27C7.963,3.694,6.795,2.669,5.023,2.669z"
                  />
                  <rect
                    className="linked-in-path-white"
                    height="18"
                    width="5"
                    x="2.5"
                    y="10.5"
                  />
                  <path
                    className="linked-in-path-blue"
                    d="M7.5,28.5H4V12c0-0.552,0.447-1,1-1h2.5V28.5z"
                  />
                  <path
                    className="linked-in-path"
                    d="M7.5,29h-5C2.224,29,2,28.776,2,28.5v-18C2,10.224,2.224,10,2.5,10h5C7.776,10,8,10.224,8,10.5v18   C8,28.776,7.776,29,7.5,29z M3,28h4V11H3V28z"
                  />
                  <path
                    className="linked-in-path-white"
                    d="M23.5,10.5c-2.457,0-4.632,1.188-6,3.014V10.5h-6v18H16h1.5V19c0-1.933,1.567-3.5,3.5-3.5   s3.5,1.567,3.5,3.5v9.5h6v-11C30.5,13.634,27.366,10.5,23.5,10.5z"
                    fill="#FFFFFF"
                  />
                  <path
                    className="linked-in-path-blue"
                    d="M23.724,12.005c-1.884,0.069-3.586,0.835-4.866,2.046C18.532,14.359,18,14.151,18,13.703v-0.784   c-0.176,0.19-0.345,0.387-0.5,0.595V11H14c-0.553,0-1,0.448-1,1v16.5h3h1.5V19c0-1.933,1.567-3.5,3.5-3.5   c1.077,0,2.029,0.498,2.672,1.264C24.479,17.405,25,18.389,25,19.5v9h5.5v-11c0-0.372-0.037-0.734-0.094-1.09   C29.288,13.783,26.708,11.896,23.724,12.005z"
                  />
                  <path
                    className="linked-in-path"
                    d="M30.5,29h-6c-0.276,0-0.5-0.224-0.5-0.5V19c0-1.654-1.346-3-3-3s-3,1.346-3,3v9.5   c0,0.276-0.224,0.5-0.5,0.5h-6c-0.276,0-0.5-0.224-0.5-0.5v-18c0-0.276,0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5v3.014   c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V11h-5v17h5v-9c0-2.206,1.794-4,4-4s4,1.794,4,4v9h5V17.5c0-3.584-2.916-6.5-6.5-6.5   c-1.384,0-2.722,0.406-3.871,1.173c-0.229,0.152-0.54,0.092-0.693-0.138s-0.092-0.54,0.139-0.693C20.388,10.464,21.918,10,23.5,10   c4.136,0,7.5,3.364,7.5,7.5v11C31,28.776,30.776,29,30.5,29z"
                  />
                </g>
              </svg>
            </BoxBase>
          </footer>
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
