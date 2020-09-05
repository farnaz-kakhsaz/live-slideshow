import React, { useState, useRef } from "react";
// Components
import CARDS_DETAILS from "../../constants/CardDetails";
// Material-UI
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function UploadImage() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const fileInput = useRef();

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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        maxWidth="400px"
        height="200px"
        textAlign="center"
        mx="auto"
        mb="25px"
      >
        <TextField
          inputRef={fileInput}
          type="file"
          accept="image/*"
          color="secondary"
        />
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
      {error && !name && <p>Please choose a name for the file!</p>}
      {error && !fileInput.current.value && <p>Please select a photo!</p>}
    </form>
  );
}
