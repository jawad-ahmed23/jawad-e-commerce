import { combineReducers } from "redux";

import { shopReducer } from "./shop/shop.reducer";
import { categoryReducer } from "./category/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

export default combineReducers({
  shop: shopReducer,
  category: categoryReducer,
  cart: cartReducer,
});
