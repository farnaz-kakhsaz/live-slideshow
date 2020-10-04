import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: 375,
    maxHeight: 234,
    width: "100%",
    borderRadius: 10,
    cursor: "e-resize",
  },
  typography: {
    marginTop: theme.spacing(0.5),
  },
}));
