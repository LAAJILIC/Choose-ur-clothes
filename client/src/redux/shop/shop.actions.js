import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionObjects => ({
type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
payload: collectionObjects    
});

export const fetchCollectionsFailure = errMsg => ({
type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
payload: errMsg
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => 
    {
    }
}