import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  image: {
    height: (props) => props.cardHeight,
    backgroundImage: (props) => `url(${props.image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: theme.shape.borderRadius * 3,
  },
  typography: {
    color: (props) => props.textColor,
    marginTop: theme.spacing(0.5),
  },
}));
