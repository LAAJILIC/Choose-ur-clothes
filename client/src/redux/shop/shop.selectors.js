import { createSelector } from "reselect";

const SelectShop = state => state.shop;

export const selectCollections = createSelector(
    [SelectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
); 

export const selectCollection = collectionUrlParam =>
createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
);

export const selectCollectionIsFetching = createSelector(
  [SelectShop],
  shop => shop.isFetching
);

export const selectIfCollectionLoaded = createSelector(
  [SelectShop],
  shop => !!shop.collections
);