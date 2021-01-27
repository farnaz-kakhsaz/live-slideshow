import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  autoPlaySwipeableViews: {
    "&:active": {
      cursor: (props) => (props.cursor ? "grabbing" : "default"),
      cursor: (props) => (props.cursor ? "-moz-grabbing" : "default"),
      cursor: (props) => (props.cursor ? "-webkit-grabbing" : "default"),
    },
    cursor: (props) =>
      props.cursor
        ? "move"
        : "default" /* fallback if grab cursor is unsupported */,
    cursor: (props) => (props.cursor ? "grab" : "default"),
    cursor: (props) => (props.cursor ? "-moz-grab" : "default"),
    cursor: (props) => (props.cursor ? "-webkit-grab" : "default"),
  },
}));
