import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
// Material-UI
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
// Styles
import { useStyles } from "./upload-image.styles";

export default function UploadImage({
  handleAddImage,
  handleReset,
  showResetBtn,
}) {
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
      handleAddImage(value, name);
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
          height={{ xs: 205, sm: 133 }}
          textAlign="center"
        >
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            id="custom-file-upload"
            onChange={handleFileChange}
            className={classes.hiddenInput}
          />
          <TextField
            type="text"
            name="name"
            value={name}
            onChange={handleTextChange}
            label="Choose a name"
            variant="outlined"
            color="secondary"
          />
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            height={{ xs: 132, sm: "auto" }}
          >
            <label htmlFor="custom-file-upload">
              <Button
                type="button"
                variant="contained"
                component="span"
                fullWidth
                className={classes.btn}
              >
                Find Photo
              </Button>
            </label>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.btn}
            >
              Upload
            </Button>
          </Box>
        </Box>
        {showResetBtn && (
          <Button
            type="button"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleReset}
            className={classes.resetBtn}
          >
            Reset
          </Button>
        )}
        {error && (
          <Box mt={2}>
            {!name && (
              <FormHelperText className={classes.formHelperText}>
                Please choose a name for the file!
              </FormHelperText>
            )}
            {!value && (
              <FormHelperText className={classes.formHelperText}>
                Please select a photo!
              </FormHelperText>
            )}
          </Box>
        )}
      </FormControl>
    </form>
  );
}

UploadImage.propTypes = {
  handleAddImage: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  showResetBtn: PropTypes.bool.isRequired,
};
