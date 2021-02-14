import { SET_ACTIVE_KEY } from "../consts";

const initialState = {
  activeKey: "/",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_KEY:
      return {
        ...state,
        activeKey: action.payload,
      };
    default:
      return state;
  }
};
