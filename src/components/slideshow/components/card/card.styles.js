import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: (props) => props.cardHeight,
    backgroundImage: (props) => `url(${props.image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: theme.shape.borderRadius * 3,
    cursor: "e-resize",
  },
  typography: {
    marginTop: theme.spacing(0.5),
  },
}));
