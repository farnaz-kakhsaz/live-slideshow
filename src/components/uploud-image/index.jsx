import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      marginLeft: 45,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 45,
    },
  },
  input: {
    display: "none",
  },
  formHelperText: {
    textAlign: "center",
    letterSpacing: 1,
  },
}));

export default function UploadImage({ handleUpdateImagesArray }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(false);
  const fileInput = useRef();
  const classes = useStyles();

  const handleTextChange = (event) => {
    setName(event.target.value);
  };

  const handleFileChange = () => {
    setValue(fileInput.current.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value && name) {
      handleUpdateImagesArray(value, name);
      fileInput.current.value = null;
      setValue(null);
      setName("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} fullWidth>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="200px"
          textAlign="center"
          mb="20px"
        >
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            id="custom-file-upload"
            className={classes.input}
            onChange={handleFileChange}
          />
          <label htmlFor="custom-file-upload">
            <Button
              variant="contained"
              component="span"
              color="primary"
              fullWidth
            >
              Upload
            </Button>
          </label>
          <TextField
            type="text"
            name="name"
            value={name}
            onChange={handleTextChange}
            label="Choose a name"
            variant="outlined"
            color="secondary"
          />
          <Button type="submit" variant="contained" color="secondary">
            Select
          </Button>
        </Box>
        {error && !name && (
          <FormHelperText className={classes.formHelperText}>
            Please choose a name for the file!
          </FormHelperText>
        )}
        {error && !value && (
          <FormHelperText className={classes.formHelperText}>
            Please select a photo!
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}

UploadImage.propTypes = {
  handleUpdateImagesArray: PropTypes.func.isRequired,
};
