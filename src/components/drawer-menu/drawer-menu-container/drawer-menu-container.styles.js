import { makeStyles } from "@material-ui/styles";

const drawerWidth = 500;

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
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
