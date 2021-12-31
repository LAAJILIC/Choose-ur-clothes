import React from 'react';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


import {
    CartIconContainer,
    ShoppingIconContainer,
    ItemCountNumber
} 
from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
     <ShoppingIconContainer />
     <ItemCountNumber>{itemCount}</ItemCountNumber>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToPropos = state => ({
    itemCount: selectCartItemsCount(state)
});
export default connect(mapStateToPropos, mapDispatchToProps)(CartIcon);