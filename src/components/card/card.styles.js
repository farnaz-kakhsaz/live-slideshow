import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: 375,
    maxHeight: 234,
    width: "100%",
    borderRadius: 10,
    marginBottom: theme.spacing(1),
  },
}));
