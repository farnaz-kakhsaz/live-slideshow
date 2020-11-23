import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  dot: {
    "&:hover": {
      background: (props) => props.darkColorBtn,
    },
    backgroundColor: (props) => props.lightColorBtn,
    width: theme.spacing(2),
    height: theme.spacing(2),
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.5s ease-in-out",
  },
  activeDot: {
    backgroundColor: (props) => props.darkColorBtn,
  },
}));
