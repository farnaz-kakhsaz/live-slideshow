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
    fill: "currentColor",
    width: "3rem",
    height: "3rem",
    margin: theme.spacing(3),
  },
  iconStackOverflow: {
    // width: "2.5rem",
    // height: "2.5rem",
  },
  iconGitHub: {},
  iconLinkedIn: {
    width: "3.9rem",
    height: "3.9rem",
  },
}));
