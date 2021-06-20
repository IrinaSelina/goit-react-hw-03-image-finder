import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";

import "./ImageGallery.css";

const ImageGallery = ({ images, onOpenModal }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        webformatURL={webformatURL}
        tags={tags}
        key={id}
        onOpenModal={onOpenModal}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
export default ImageGallery;
