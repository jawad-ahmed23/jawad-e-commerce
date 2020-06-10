const INITIAL_STATE = {
  hidden: false,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
