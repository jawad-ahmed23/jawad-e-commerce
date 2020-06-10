import { combineReducers } from "redux";

import { shopReducer } from "./shop/shop.reducer";
import { categoryHiddenReducer } from "./category/category.reducer";

export default combineReducers({
  shop: shopReducer,
  category: categoryHiddenReducer,
});
