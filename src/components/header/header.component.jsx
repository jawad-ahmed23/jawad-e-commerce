import React from "react";

import { ReactComponent as CartIcon } from "./svg/shopping-cart-icon.svg";
import SearchField from "../search-field/search-field.compoent";

import "./header.styles.scss";

class Header extends React.Component {
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
      <div className="header">
        <div className="logo-container">
          <h1 className="logo">LOGO</h1>
        </div>
        <div className="categories-button-container">
          <span className="categories-button">Categories</span>
        </div>
        <SearchField
          searchInput={this.state.searchInput}
          handleSearchInput={this.handleSearchInput}
        />
        <div className="cart-icon-container">
          <CartIcon className="cart-icon" />
        </div>

        <div className="login-signup-container">
          <button className="login-button">Login</button>
          <button className="sign-up-button">Sign up</button>
        </div>
      </div>
    );
  }
}

export default Header;
