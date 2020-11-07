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
        "linear-gradient(to right, transparent, rgb(189, 189, 189), transparent)",
    },
    position: "relative",
    height: 1,
  },
}));
