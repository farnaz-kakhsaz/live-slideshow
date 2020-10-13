import { makeStyles } from "@material-ui/styles";

const drawerWidth = 500;

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
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
}));
