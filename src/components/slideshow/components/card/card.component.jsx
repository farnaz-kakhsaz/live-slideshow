import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// Styles
import { useStyles } from "./card.styles";

export default function Card({
  image,
  title,
  imageMaxWidth,
  imageMaxHeight,
  cardMarginX,
  cardMarginY,
}) {
  const classes = useStyles({
    maxWidth: imageMaxWidth,
    maxHeight: imageMaxHeight,
  });

  return (
    <Box textAlign="center" mx={cardMarginX} my={cardMarginY}>
      <img className={classes.image} src={image} alt={title} />
      {title && <Typography className={classes.typography}>{title}</Typography>}
    </Box>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageMaxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageMaxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cardMarginX: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  cardMarginY: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};
