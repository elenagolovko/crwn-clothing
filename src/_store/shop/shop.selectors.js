import { createSelector } from "reselect";

const selectShopData = state => state.shop;

export const selectShopDataCollections = createSelector(
  [selectShopData],
  shop => shop.collections
);
