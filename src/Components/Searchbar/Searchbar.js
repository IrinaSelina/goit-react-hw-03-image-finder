import React from "react";
import PropTypes from "prop-types";
import "./Searchbar.css";

const Searchbar = ({ onSetQuery, searchQuery, onSubmit }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          name="searchQuery"
          value={searchQuery}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onInput={onSetQuery}
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSetQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
