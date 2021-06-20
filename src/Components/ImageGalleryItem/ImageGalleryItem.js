import React from "react";
import PropTypes from "prop-types";
import "./ImageGalleryItem.css";

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  onOpenModal,
}) => (
  <li className="ImageGalleryItem" onClick={onOpenModal}>
    <img
      src={webformatURL}
      alt={tags}
      className="ImageGalleryItem-image"
      data-source={largeImageURL}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
