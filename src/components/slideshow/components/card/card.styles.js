import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    maxWidth: (props) => props.maxWidth,
    height: (props) => props.maxHeight,
    borderRadius: theme.shape.borderRadius * 3,
    cursor: "e-resize",
  },
  typography: {
    marginTop: theme.spacing(0.5),
  },
}));
