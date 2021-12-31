import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import { CheckoutItemContainer, ImageContainer, ArrowType, RemoveButtonContainer, 
    NameContainer, PriceContainer, QuantityContainer, ValueContainer
 } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
 const { name, imageUrl, price, quantity } = cartItem;
 return (
<CheckoutItemContainer >
 <ImageContainer >
  <img src={imageUrl} alt='item'/>
 </ImageContainer>
<NameContainer>{name}</NameContainer>
<QuantityContainer>
<ArrowType onClick={()=> removeItem(cartItem)}>&#10094;</ArrowType>
<ValueContainer>{quantity}</ValueContainer>
<ArrowType onClick={()=> addItem(cartItem)}>&#10095;</ArrowType>
</QuantityContainer>
<PriceContainer>{price}</PriceContainer>
<RemoveButtonContainer onClick={()=> clearItem(cartItem)}>
&#10005;
</RemoveButtonContainer>
</CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
clearItem: item => dispatch(clearItemFromCart(item)),
addItem: item => dispatch(addItem(item)),
removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);