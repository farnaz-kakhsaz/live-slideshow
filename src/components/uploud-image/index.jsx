import React, { useState, useRef } from "react";
// Components
import CARDS_DETAILS from "../../constants/CardDetails";
// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  formHelperText: {
    textAlign: "center",
  },
}));

export default function UploadImage() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const fileInput = useRef();
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fileInput.current.value && name) {
      CARDS_DETAILS.push({
        image: URL.createObjectURL(fileInput.current.files[0]),
        text: name,
      });
      fileInput.current.value = null;
      setName("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} fullWidth>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          maxWidth="400px"
          height="200px"
          textAlign="center"
          mx="auto"
          mb="20px"
        >
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            id="custom-file-upload"
            className={classes.input}
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
            onChange={handleChange}
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
        {error && !fileInput.current.value && (
          <FormHelperText className={classes.formHelperText}>
            Please select a photo!
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
