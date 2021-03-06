const INITIAL_STATE = {
  hidden: false,
};

export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case "SET_CATEGORY_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
