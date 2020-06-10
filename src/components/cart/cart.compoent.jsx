import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./cart.styles.scss";

const Cart = ({ item }) => {
  return (
    <div className="cart-container">
      <div className="cart-items">ITEM</div>
      <CustomButton isCartButton>Checkout</CustomButton>
    </div>
  );
};

export default Cart;
