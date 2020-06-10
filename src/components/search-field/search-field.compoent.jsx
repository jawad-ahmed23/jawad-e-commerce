import React from "react";
import { ReactComponent as SearchIcon } from "./search-icon.svg";

import "./search-field.styles.scss";

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
    };
  }

  handleSearchInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.searchInput}
          type="text"
          name="searchInput"
          placeholder="Search anything you want"
          onChange={this.handleSearchInput}
        />
        <SearchIcon className="search-icon" />
      </div>
    );
  }
}

export default SearchField;
