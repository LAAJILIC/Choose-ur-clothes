import React from 'react';


import {CartItemContainer,
    ItemDetailesContainer,
    NameContainer, PriceContainer
} 
from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <ItemDetailesContainer>
    <NameContainer>{name}</NameContainer>
    <PriceContainer>{quantity} * ${price}</PriceContainer>
    </ItemDetailesContainer>
    </CartItemContainer>
);

export default CartItem; 