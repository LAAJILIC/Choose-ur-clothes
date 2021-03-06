import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router';

import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
 
import { CartDropdownContainer,
    CartItemsContainer, 
    EmptyMessageContainer
} from './cart-dropdown.styles';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
     <CartItemsContainer>
        { cartItems.length ? 
            (cartItems.map(cartItem => (
             <CartItem key={cartItem.id} item={cartItem} />
         ))) : (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
        }
     </CartItemsContainer>
     <CustomButton onClick={() => 
        {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));