import React, { useRef } from "react";
// Components
import CARDS_DETAILS from "../../constants/CardDetails";
export default function UploadImage() {
  const fileInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    CARDS_DETAILS.push([
      { image: URL.createObjectURL(fileInput.current.files[0]), text: "hi" },
    ]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" ref={fileInput} />
      <button type="submit">Select</button>
    </form>
  );
}
