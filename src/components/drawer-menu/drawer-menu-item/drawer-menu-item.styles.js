import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  marginY: {
    margin: theme.spacing(1, 2),
  },
  menuItem: {
    color: theme.palette.text.secondary,
  },
  formControl: {
    minWidth: theme.spacing(8),
  },
}));
