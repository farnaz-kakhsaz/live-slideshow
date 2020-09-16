import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// Styles
import { useStyles } from "./card.styles";

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
