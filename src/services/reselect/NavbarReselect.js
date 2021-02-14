import { createSelector } from "reselect";

const mainState = (state) => state.navbar;

export const activeKeySelector = createSelector(
  mainState,
  (state) => state.activeKey
);
