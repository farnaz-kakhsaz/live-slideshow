import { makeStyles } from "@material-ui/styles";

const drawerWidth = 510;

export const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
    },
    width: "90%",
  },
  drawerPaper: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
    },
    width: "90%",
  },
  fab: {
    [theme.breakpoints.down("xs")]: {
      right: theme.spacing(2),
      bottom: theme.spacing(1.5),
    },
    position: "fixed",
    right: theme.spacing(5),
    bottom: theme.spacing(4),
    zIndex: 1,
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
