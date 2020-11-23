import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  commonClass: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize * 7,
    },
    "&:hover": {
      color: (props) => props.darkColorBtn,
    },
    color: (props) => props.lightColorBtn,
    fontSize: theme.typography.fontSize * 8,
    position: "absolute",
    top: "45%",
    transform: "translateY(-50%)",
    zIndex: 1,
    cursor: "pointer",
    transition: "all 0.5s ease-in-out",
    fontFamily: "none",
  },
  rightArrow: { right: 0 },
  leftArrow: { left: 0 },
}));
