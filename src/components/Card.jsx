import React from "react"
import PropTypes from "prop-types"
// Material-UI
import makeStyles from "@material-ui/core/styles/makeStyles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  image: {
    width: 400,
    borderRadius: 10,
    marginBottom: theme.spacing(1)
  }
}))

export default function Card({ image, text }) {
  const classes = useStyles()

  return (
    <Box textAlign="center" color="grey.400">
      <img className={classes.image} src={image} alt={text} />
      <Typography>
        {text}
      </Typography>
    </Box>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}