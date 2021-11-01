export const addItemToCart = (cartItems, itemToAdd) => {
    const isItemExistsInCart = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
    if (isItemExistsInCart) {
        return cartItems.map(cartItem => cartItem.id === itemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem )
    }
    return [...cartItems, {...itemToAdd, quantity: 1 }]
};