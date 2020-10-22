import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  marginY: {
    margin: theme.spacing(2),
  },
  menuItem: {
    color: theme.palette.text.secondary,
    // fontWeight: theme.typography.fontWeightMedium,
  },
  formControl: {
    minWidth: theme.spacing(8),
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
