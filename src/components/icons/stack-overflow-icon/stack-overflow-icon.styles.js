import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  stackOverflowIcon: {
    "&:hover": {
      "& .stack-overflow-rect": {
        fill: "#FFB74D",
      },
      "& .stack-overflow-polygon": {
        fill: "#CFD8DC",
      },
      transform: "scale(1.2)",
    },
    "& .stack-overflow-rect": {
      fill: "transparent",
      WebkitTransition: "all 0.5s ease-in-out",
      MozTransition: "all 0.5s ease-in-out",
      OTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out",
    },
    "& .stack-overflow-polygon": {
      fill: "transparent",
      WebkitTransition: "all 0.5s ease-in-out",
      MozTransition: "all 0.5s ease-in-out",
      OTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out",
    },
    "& .stack-overflow-path": {
      fill: "#455A64",
    },
    WebkitTransition: "all 0.5s ease-in-out",
    MozTransition: "all 0.5s ease-in-out",
    OTransition: "all 0.5s ease-in-out",
    transition: "all 0.5s ease-in-out",
    transform: "scale(1)",
    width: 60,
    height: 60,
  },
}));
