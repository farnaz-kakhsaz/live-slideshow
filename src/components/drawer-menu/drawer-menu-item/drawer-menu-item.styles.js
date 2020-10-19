import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  marginY: {
    margin: theme.spacing(2),
  },
  menuItem: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
  },
  formControl: {
    minWidth: 70,
  },
}));
