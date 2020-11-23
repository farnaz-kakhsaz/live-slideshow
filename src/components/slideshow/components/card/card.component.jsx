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
  cardWidth,
  cardHeight,
  cardMarginX,
  cardMarginY,
  textColor,
  showOneCard,
}) {
  const classes = useStyles({
    cardWidth,
    cardHeight,
    showOneCard,
    textColor,
    image,
  });

  return (
    <BoxBase
      textAlign="center"
      mx={showOneCard ? "auto" : cardMarginX}
      my={cardMarginY}
      maxWidth={cardWidth}
      width="100%"
    >
      <div className={classes.image} />
      {title && (
        <TypographyBase className={classes.typography}>{title}</TypographyBase>
      )}
    </BoxBase>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  cardHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  cardMarginX: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  cardMarginY: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  textColor: PropTypes.string.isRequired,
  showOneCard: PropTypes.bool,
};
