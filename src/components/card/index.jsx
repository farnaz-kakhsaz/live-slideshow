import React from "react";
import PropTypes from "prop-types";
// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: 375,
    maxHeight: 234,
    width: "100%",
    borderRadius: 10,
    marginBottom: theme.spacing(1),
  },
}));

export default function Card({ image, title }) {
  const classes = useStyles();

  return (
    <Box textAlign="center" color="grey.400">
      <img className={classes.image} src={image} alt={title} />
      <Typography>{title}</Typography>
    </Box>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
