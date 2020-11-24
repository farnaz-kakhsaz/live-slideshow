import React from "react";
import PropTypes from "prop-types";
// Components
import ImagePreviewContainer from "../image-preview/image-preview-container/image-preview-container.component";
import UploadImage from "../upload-image/upload-image.component";
import BoxBase from "../items-base/box-base/box-base";
import GrowBase from "../items-base/grow-base/grow-base";

export default function ImagePreviewAndUploadSection({
  oneCardPerScreen,
  shakeAnimationEnd,
  whichImageFade,
  showError,
  handleRemoveItem,
  handleShakeAnimation,
  handleAddImage,
  handleResetImagePreview,
  showImagePreviewResetBtn,
}) {
  return (
    <BoxBase
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      alignItems="center"
      justifyContent="center"
      mt={8}
    >
      <BoxBase display="flex" flexDirection="column">
        <ImagePreviewContainer
          cards={oneCardPerScreen}
          shakeIt={showError && shakeAnimationEnd ? true : false}
          whichImageFade={whichImageFade}
          handleRemoveItem={handleRemoveItem}
          handleShakeAnimation={handleShakeAnimation}
        />
        {showError && (
          <GrowBase in={showError} timeout={700}>
            <BoxBase
              color="error.main"
              letterSpacing="1px"
              fontSize="0.86rem"
              component="p"
              mt={3}
              mb={0}
            >
              Can't contain less than 4 items!
            </BoxBase>
          </GrowBase>
        )}
      </BoxBase>
      <UploadImage
        handleAddImage={handleAddImage}
        handleResetImagePreview={handleResetImagePreview}
        showImagePreviewResetBtn={showImagePreviewResetBtn}
      />
    </BoxBase>
  );
}

ImagePreviewAndUploadSection.propTypes = {
  oneCardPerScreen: PropTypes.array.isRequired,
  shakeAnimationEnd: PropTypes.bool.isRequired,
  whichImageFade: PropTypes.number.isRequired,
  showError: PropTypes.bool.isRequired,
  showImagePreviewResetBtn: PropTypes.bool.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleShakeAnimation: PropTypes.func.isRequired,
  handleAddImage: PropTypes.func.isRequired,
  handleResetImagePreview: PropTypes.func.isRequired,
};
