import { CLEAR_LAST_COUNT, SET_LAST_COUNT } from "./actions";

export default (state, action) => {
  switch (action.type) {
    case SET_LAST_COUNT:
      return {
        ...state,
        lastCounter: {
          ...state.lastCounter,
          ...action.payload
        }
      };
    case CLEAR_LAST_COUNT:
      return {
        ...state,
        hiddenLastCounter: state.lastCounter,
        lastCounter: null
      };
    default:
      return state;
  }
};
