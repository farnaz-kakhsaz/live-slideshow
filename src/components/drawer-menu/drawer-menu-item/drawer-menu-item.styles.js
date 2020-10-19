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
  buttonRoot: {
    "&:hover": {
      background: "rgba(76, 175, 80, 0.04)",
    },
    marginTop: theme.spacing(3),
    marginLeft: "50%",
    transform: "translateX(-50%)",
    color: theme.palette.success.main,
  },
  buttonOutlined: {
    "&:hover": {
      border: `1px solid ${theme.palette.success.dark}`,
    },
    border: `1px solid ${theme.palette.success.light}`,
  },
}));
