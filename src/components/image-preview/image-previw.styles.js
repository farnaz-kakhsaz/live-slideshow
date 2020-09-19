import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  "@keyframes shake": {
    "0%": {
      transform: "translate(1px, 1px) rotate(0deg)",
    },
    "10%": {
      transform: "translate(-1px, -2px) rotate(-1deg)",
    },
    "20%": {
      transform: "translate(-3px, 0px) rotate(1deg)",
    },
    "30%": {
      transform: "translate(3px, 2px) rotate(0deg)",
    },
    "40%": {
      transform: "translate(1px, -1px) rotate(1deg)",
    },
    "50%": {
      transform: "translate(-1px, 2px) rotate(-1deg)",
    },
    "60%": {
      transform: "translate(-3px, 1px) rotate(0deg)",
    },
    "70%": {
      transform: "translate(3px, 1px) rotate(-1deg)",
    },
    "80%": {
      transform: "translate(-1px, -1px) rotate(1deg)",
    },
    "90%": {
      transform: "translate(1px, 2px) rotate(0deg)",
    },
    "100%": {
      transform: "translate(1px, -2px) rotate(-1deg)",
    },
  },
  shakeIt: {
    animation: "$shake 0.5s ",
  },
  gridList: {
    maxWidth: 600,
    maxHeight: 300,
    position: "relative",
  },
  gridListTile: {
    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background:
        "linear-gradient(233.88deg, rgba(254, 0, 90, 0.4) 0%, rgba(255, 45, 30, 0.4) 98.91%)",
      WebkitTransition: "all 0.5s ease-in-out",
      MozTransition: "all 0.5s ease-in-out",
      OTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out",
      opacity: 0,
      zIndex: 1,
    },
    "&:hover": {
      "&:before": {
        opacity: 1,
      },
    },
    "&:hover $img": {
      WebkitFilter: "blur(4px)",
      filter: "blur(4px)",
      transform: "scale(1)",
    },
    "&:hover $button": {
      opacity: 1,
    },
    position: "relative",
    height: "100px !important",
  },
  img: {
    transform: "scale(1)",
    left: 0,
    top: 0,
    WebkitTransition: "all 0.5s ease-in-out",
    MozTransition: "all 0.5s ease-in-out",
    OTransition: "all 0.5s ease-in-out",
    transition: "all 0.5s ease-in-out",
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      minWidth: 55,
      fontSize: 14,
    },
    "&:before": {
      [theme.breakpoints.down("xs")]: {
        height: 1,
      },
      position: "absolute",
      content: "''",
      left: "50%",
      bottom: 0,
      background: theme.palette.common.white,
      height: 2,
      width: 0,
      WebkitTransition: "all 0.5s ease-in-out",
      MozTransition: "all 0.5s ease-in-out",
      OTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out",
    },
    "&:hover": {
      "&:before": {
        width: "100%",
        left: "0",
      },
    },
    height: 40,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    WebkitTransition: "all 0.5s ease-in-out",
    MozTransition: "all 0.5s ease-in-out",
    OTransition: "all 0.5s ease-in-out",
    transition: "all 0.5s ease-in-out",
    background: "transparent",
    cursor: "pointer",
    border: "none",
    color: "white",
    fontSize: 18,
    zIndex: 10,
    opacity: 0,
    outline: "none",
  },
}));
