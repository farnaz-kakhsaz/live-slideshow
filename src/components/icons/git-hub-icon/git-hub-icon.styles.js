import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  gitHubIcon: {
    "&:hover": {
      "& .git-hub-circle": {
        fill: "#FFFFFF",
      },
      "& .git-hub-path-white": {
        fill: "#FFFFFF",
      },
      "& .git-hub-path-blue": {
        fill: "#80D8FF",
      },
      transform: "scale(1.2)",
    },
    "& .git-hub-path": {
      fill: "#455A64",
    },
    "& .git-hub-circle": {
      fill: "transparent",
      WebkitTransition: "all 0.5s ease-in-out",
      MozTransition: "all 0.5s ease-in-out",
      OTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out",
    },
    "& .git-hub-path-blue": {
      fill: "transparent",
      WebkitTransition: "all 0.5s ease-in-out",
      MozTransition: "all 0.5s ease-in-out",
      OTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out",
    },
    "& .git-hub-path-white": {
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
    margin: theme.spacing(0, 3),
  },
}));
