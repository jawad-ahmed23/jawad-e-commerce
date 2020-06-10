import React from "react";
import { withRouter } from "react-router-dom";
import CategoriesList from "../category-list/category-list.component";
import { connect } from "react-redux";
import { setCategoryHidden } from "../../redux/category/category.action";

import { ReactComponent as CartIcon } from "./svg/shopping-cart-icon.svg";
import SearchField from "../search-field/search-field.compoent";

import "./header.styles.scss";

const Header = ({ history, hidden, toggleHidden }) => {
  return (
    <div className="header">
      <div className="logo-container">
        <h1 className="logo" onClick={() => history.push("/")}>
          LOGO
        </h1>
      </div>
      <div className="categories-button-container">
        <span className="categories-button" onClick={toggleHidden}>
          Categories
        </span>
        {hidden ? <CategoriesList /> : null}
      </div>
      <SearchField />
      <div className="cart-icon-container">
        <CartIcon className="cart-icon" />
      </div>

      <div className="login-signup-container">
        <button
          className="login-button"
          onClick={() => history.push("/signin")}
        >
          Login
        </button>
        <button
          className="sign-up-button"
          onClick={() => history.push("/signup")}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ category }) => ({
  hidden: category.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(setCategoryHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
