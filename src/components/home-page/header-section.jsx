import React from "react";
// Components
import BoxBase from "../items-base/box-base/box-base";

export default function HeaderSection() {
  return (
    <>
      <BoxBase
        fontSize={{ xs: 32, sm: 42, md: 52 }}
        fontWeight="fontWeightBold"
        component="h1"
        my="0"
      >
        This is my React slideshow library
      </BoxBase>
      <BoxBase
        display="inline-block"
        fontSize={{ xs: 24, sm: 32, md: 42 }}
        fontWeight="fontWeightBold"
        component="h2"
        borderBottom="3px solid"
        mt="10px"
        mb="0"
      >
        Go ahead and add or remove photos
        <span role="img" aria-label="winking face">
          &#128521;
        </span>
      </BoxBase>
    </>
  );
}
