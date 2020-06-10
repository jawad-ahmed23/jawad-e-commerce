import React from "react";

import SearchField from "../search-field/search-field.compoent";
import CartIconComponent from "../cart-icon/cart-icon.component";
import LogInAndSignUpButton from "../login-signup/login-signup.component";
import LogoComponent from "../logo/logo.component";
import Category from "../category/category.component";

import "./header.styles.scss";

const Header = ({ categoryhidden, toggleCategoryHidden }) => {
  return (
    <div className="header">
      <LogoComponent />
      <Category />
      <SearchField />
      <CartIconComponent />
      <LogInAndSignUpButton />
    </div>
  );
};

export default Header;
