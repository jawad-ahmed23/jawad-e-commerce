import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "..//../redux/cart/cart.action";

import { ReactComponent as CartIcon } from "./svg/shopping-cart-icon.svg";

import Cart from "../../components/cart/cart.compoent";

import "./cart-icon.styles.scss";

const CartIconComponent = ({ cartHidden, toggleCartHidden }) => {
  return (
    <div className="cart-icon-container">
      <span className="items-count">0</span>
      <CartIcon className="cart-icon" onClick={toggleCartHidden} />
      {cartHidden ? <Cart /> : null}
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartHidden: cart.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIconComponent);
