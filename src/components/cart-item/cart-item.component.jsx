import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, price } = cartItem;
  return (
    <div className="cart-item">
      <div className="image">
        <img src={imageUrl} alt="img" />
      </div>
      <div className="details">
        <span className="name">{name}</span>
        <span className="price">1 x ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
