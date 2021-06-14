import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
      transform: "scale(1.2)",
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
      minWidth: theme.spacing(6),
      fontSize: theme.typography.fontSize - 2,
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
      height: theme.spacing(0.25),
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
    height: theme.spacing(5),
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
    fontSize: theme.typography.fontSize + 2,
    zIndex: 1,
    opacity: 0,
    outline: "none",
  },
}));
