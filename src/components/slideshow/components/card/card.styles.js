import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: (props) => props.maxWidth,
    maxHeight: (props) => props.maxHeight,
    width: "100%",
    borderRadius: theme.shape.borderRadius * 3,
    cursor: "e-resize",
  },
  typography: {
    marginTop: theme.spacing(0.5),
  },
}));
