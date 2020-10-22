import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
// Components
import TextFieldBase from "../items-base/text-field-base/text-field-base";
import ButtonBase from "../items-base/button-base/button-base";
import BoxBase from "../items-base/box-base/box-base";
import GrowBase from "../items-base/grow-base/grow-base";
// Styles
import { useStyles } from "./upload-image.styles";

export default function UploadImage({
  handleAddImage,
  handleResetImagePreview,
  showImagePreviewResetBtn,
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
      <BoxBase
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
        <TextFieldBase
          type="text"
          name="name"
          value={name}
          onChange={handleTextChange}
          label="Choose a name"
          variant="outlined"
          color="secondary"
          error={error && !name}
        />
        <BoxBase
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          height={{ xs: 132, sm: "auto" }}
        >
          <label htmlFor="custom-file-upload">
            <ButtonBase
              type="button"
              variant="contained"
              component="span"
              fullWidth
              className={classes.btn}
            >
              Find Photo
            </ButtonBase>
          </label>
          <ButtonBase
            type="submit"
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            Upload
          </ButtonBase>
        </BoxBase>
      </BoxBase>
      {showImagePreviewResetBtn && (
        <GrowBase in={showImagePreviewResetBtn} timeout={700}>
          <ButtonBase
            type="button"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleResetImagePreview}
            className={classes.resetBtn}
          >
            Reset
          </ButtonBase>
        </GrowBase>
      )}
      {error && (
        <BoxBase mt={2}>
          {!name && (
            <GrowBase in={!name} timeout={700}>
              <BoxBase
                color="error.main"
                letterSpacing="1px"
                fontSize="0.86rem"
                component="p"
                mb={1}
              >
                Please choose a name for the file!
              </BoxBase>
            </GrowBase>
          )}
          {!value && (
            <GrowBase in={!value} timeout={700}>
              <BoxBase
                color="error.main"
                letterSpacing="1px"
                fontSize="0.86rem"
                component="p"
                my={0}
              >
                Please select a photo!
              </BoxBase>
            </GrowBase>
          )}
        </BoxBase>
      )}
    </form>
  );
}

UploadImage.propTypes = {
  handleAddImage: PropTypes.func.isRequired,
  handleResetImagePreview: PropTypes.func.isRequired,
  showImagePreviewResetBtn: PropTypes.bool.isRequired,
};
