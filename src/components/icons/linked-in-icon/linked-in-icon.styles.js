import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  linkedInIcon: {
    "&:hover": {
      "& .linked-in-path-blue": {
        fill: "#80D8FF",
      },
      "& .linked-in-path-white": {
        fill: "#FFFFFF",
      },
      transform: "scale(1.2)",
    },
    "& .linked-in-path": {
      fill: "#455A64",
    },
    "& .linked-in-path-blue": {
      fill: "transparent",
      WebkitTransition: "all 0.5s ease-in-out",
      MozTransition: "all 0.5s ease-in-out",
      OTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out",
    },
    "& .linked-in-path-white": {
      fill: "transparent",
      WebkitTransition: "all 0.5s ease-in-out",
      MozTransition: "all 0.5s ease-in-out",
      OTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out",
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
