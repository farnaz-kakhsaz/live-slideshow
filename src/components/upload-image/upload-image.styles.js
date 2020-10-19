import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: 45,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 40,
    },
    maxWidth: 400,
    width: "100%",
  },
  hiddenInput: {
    display: "none",
  },
  btn: {
    [theme.breakpoints.up("sm")]: {
      width: 190,
    },
  },
  resetBtn: {
    marginTop: 20,
  },
}));
