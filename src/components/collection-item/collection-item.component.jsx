import React from "react";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item }) => {
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
      <CustomButton>Add to cart</CustomButton>
    </div>
  );
};

export default CollectionItem;
