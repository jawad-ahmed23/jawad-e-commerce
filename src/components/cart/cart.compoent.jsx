import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart.styles.scss";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <div className="cart-items">
        {!cartItems.length ? (
          <span style={{ textAlign: "center", margin: "auto" }}>
            Your cart is empty
          </span>
        ) : null}
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <CustomButton isCartButton>Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(Cart);
