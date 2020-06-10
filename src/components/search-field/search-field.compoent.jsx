import React from "react";
import { ReactComponent as SearchIcon } from "./search-icon.svg";

import "./search-field.styles.scss";

const SearchField = ({ searchInput, handleSearchInput }) => {
  return (
    <div className="search-bar">
      <input
        value={searchInput}
        type="text"
        name="searchInput"
        placeholder="Search anything you want"
        onChange={handleSearchInput}
      />
      <SearchIcon className="search-icon" />
    </div>
  );
};

export default SearchField;
