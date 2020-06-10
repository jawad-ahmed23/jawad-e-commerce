import SHOP_DATA from "./shop.data.js";

const INITIAL_STATE = SHOP_DATA;

export const shopReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case "SET_SHOP_DATA":
      return {
        ...state,
      };
    case "SET_SEARCH_ITEM":
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
