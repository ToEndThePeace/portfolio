import React from "react";

import Card from "../Card";
import StyledGallery from "./StyledGallery";

const Gallery = (props) => {
  return (
    <StyledGallery>
      <Card />
      <Card />
    </StyledGallery>
  );
};

export default Gallery;
