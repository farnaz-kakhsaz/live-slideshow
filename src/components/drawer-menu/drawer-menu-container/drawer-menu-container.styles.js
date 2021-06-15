import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 510;

export const useStyles = makeStyles((theme) => ({
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.95)",
      boxShadow: "0 0 0 0 rgba(63, 81, 181, 0.7)",
    },
    "70%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 20px rgba(63, 81, 181, 0)",
    },
    "100%": {
      transform: "scale(0.95)",
      boxShadow: "0 0 0 0 rgba(63, 81, 181, 0)",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
    },
    [theme.breakpoints.up("lg")]: {
      // To hide drawer shadow that affects items on the screen
      zIndex: (props) => props.zIndex,
    },
    width: "90%",
  },
  drawerPaper: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
    },
    width: "90%",
  },
  fab: {
    [theme.breakpoints.down("xs")]: {
      right: theme.spacing(3),
      bottom: theme.spacing(2.7),
    },
    position: "fixed",
    right: theme.spacing(5),
    bottom: theme.spacing(4),
    zIndex: 1,
    width: 70,
    height: 70,
  },
  fabWithAnimation: {
    animation: "$pulse 2s infinite",
  },
  marginY: {
    margin: theme.spacing(1, 2),
  },
  doneButton: {
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
    maxWidth: theme.spacing(20),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.success.main,
  },
  resetButton: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(2),
    },
    maxWidth: theme.spacing(20),
  },
}));
