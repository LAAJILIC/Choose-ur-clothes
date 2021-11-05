import { createSelector } from 'reselect'; //this is a funtion
//input selector : a function that gets the whole state from reducer and returns a slice of it
const selectCart = state => state.cart;

//output selector: use the inputselector on the create selector function to apply the selector itself
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0 
    )
);
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0 
    )
);