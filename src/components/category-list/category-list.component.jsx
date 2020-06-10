import React from "react";
import { connect } from "react-redux";

import "./category-list.styles.scss";

const CategoriesList = ({ collections }) => {
  return (
    <div className="categories-container">
      <div className="categories-list">
        {collections.map(({ title, id }) => (
          <span key={id} className="category-name">
            {title}
          </span>
        ))}
      </div>
    </div>
  );
};

const mapToStateToProps = (state) => ({
  collections: state.shop.collections,
});

export default connect(mapToStateToProps)(CategoriesList);
