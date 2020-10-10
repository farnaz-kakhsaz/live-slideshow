import { makeStyles } from "@material-ui/styles";

const drawerWidth = 500;

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
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
      right: 20,
      bottom: 15,
    },
    position: "fixed",
    right: 40,
    bottom: 30,
  },
}));
