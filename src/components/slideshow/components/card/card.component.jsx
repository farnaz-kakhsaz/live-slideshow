import React from "react";
import PropTypes from "prop-types";
// Components
import BoxBase from "../items-base/box-base/box-base";
import TypographyBase from "../items-base/typography-base/typography-base";
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
    <BoxBase textAlign="center" mx={cardMarginX} my={cardMarginY}>
      <img className={classes.image} src={image} alt={title} />
      {title && (
        <TypographyBase className={classes.typography}>{title}</TypographyBase>
      )}
    </BoxBase>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageMaxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageMaxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cardMarginX: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  cardMarginY: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
};
