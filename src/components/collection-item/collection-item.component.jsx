import React from "react";
import { connect } from "react-redux";

//actions
import { addItemToCart } from "../../redux/cart/cart.action";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addItemToCart }) => {
  return (
    <div className="collection-item">
      <div
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        className="background-image"
      />
      <div className="details">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
      </div>
      <CustomButton onClick={() => addItemToCart(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
