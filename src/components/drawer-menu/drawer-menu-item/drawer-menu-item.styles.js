import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  marginY: {
    margin: theme.spacing(4, 0),
  },
  menuItem: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
