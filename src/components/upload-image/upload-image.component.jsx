import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
// Components
import FormControlBase from "../items-base/form-control-base/form-control-base";
import TextFieldBase from "../items-base/text-field-base/text-field-base";
import ButtonBase from "../items-base/button-base/button-base";
import BoxBase from "../items-base/box-base/box-base";
import GrowBase from "../items-base/grow-base/grow-base";
// Material-UI
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
      <FormControlBase component="fieldset" error={error} fullWidth>
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
        {showResetBtn && (
          <GrowBase in={showResetBtn} timeout={700}>
            <ButtonBase
              type="button"
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleReset}
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
                <FormHelperText className={classes.formHelperText}>
                  Please choose a name for the file!
                </FormHelperText>
              </GrowBase>
            )}
            {!value && (
              <GrowBase in={!value} timeout={700}>
                <FormHelperText className={classes.formHelperText}>
                  Please select a photo!
                </FormHelperText>
              </GrowBase>
            )}
          </BoxBase>
        )}
      </FormControlBase>
    </form>
  );
}

UploadImage.propTypes = {
  handleAddImage: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  showResetBtn: PropTypes.bool.isRequired,
};
