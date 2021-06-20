import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
const Button = ({ onLoadMore, children }) => (
  <button type="button" onClick={onLoadMore}>
    Load more {children}
  </button>
);
Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default Button;
