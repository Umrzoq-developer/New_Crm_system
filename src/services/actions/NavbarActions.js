import { SET_ACTIVE_KEY } from "../consts";

export const setActiveKey = (key) => {
  return {
    type: SET_ACTIVE_KEY,
    payload: key,
  };
};
