import React from "react";
// Components
import BoxBase from "../items-base/box-base/box-base";

export default function HeaderSection() {
  return (
    <BoxBase
      display="inline-block"
      fontSize={{ xs: 32, sm: 42, md: 52 }}
      fontWeight="fontWeightBold"
      component="h1"
      borderBottom="3px solid"
      my="0"
    >
      Go ahead and add or remove photos
      <span role="img" aria-label="winking face">
        &#128521;
      </span>
    </BoxBase>
  );
}
