import { makeStyles } from "@material-ui/styles";

const drawerWidth = 510;

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  content: {
    [theme.breakpoints.up("lg")]: {
      marginRight: -drawerWidth,
    },
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  divider: {
    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: "5%",
      right: "5%",
      width: "90%",
      height: 1,
      backgroundImage:
        "-webkit-linear-gradient(to right, transparent, rgb(189, 189, 189), transparent)",
      backgroundImage:
        "-moz-linear-gradient(to right, transparent, rgb(189, 189, 189), transparent)",
      backgroundImage:
        "-o-linear-gradient(to right, transparent, rgb(189, 189, 189), transparent)",
      backgroundImage:
        "linear-gradient(to right, transparent, rgb(189, 189, 189), transparent)",
    },
    position: "relative",
    height: 1,
  },
  icon: {
    width: 200,
    height: 200,
  },
  iconStackOverflow: {
    "&:hover": {
      "& .stack-overflow-rect": {
        fill: "#FFB74D",
      },
      "& .stack-overflow-polygon": {
        fill: "#CFD8DC",
      },
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
  },
  iconGitHub: {
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
  },
  iconLinkedIn: {
    "&:hover": {
      "& .linked-in-path-blue": {
        fill: "#80D8FF",
      },
      "& .linked-in-path-white": {
        fill: "#FFFFFF",
      },
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
  },
}));
