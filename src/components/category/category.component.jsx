import React from "react";
import { connect } from "react-redux";

//actions
import { setCategoryHidden } from "../../redux/category/category.action";

import CategoriesList from "../category-list/category-list.component";

import "./category.styles.scss";

const Category = ({ categoryhidden, toggleCategoryHidden }) => {
  return (
    <div className="categories-button-container">
      <span className="categories-button" onClick={toggleCategoryHidden}>
        Categories
      </span>
      {categoryhidden ? <CategoriesList /> : null}
    </div>
  );
};

const mapStateToProps = ({ category }) => ({
  categoryhidden: category.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCategoryHidden: () => dispatch(setCategoryHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
