import React from 'react';
import { connect } from 'react-redux';
//connect is a HOC
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../redux/user/user.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { HeaderContainer, LogoContainer, ImgLogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';
const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
      <LogoContainer to='/'>
      <ImgLogoContainer src='https://svgshare.com/i/ciK.svg' alt='logo'/>
      </LogoContainer>
     <OptionsContainer>
       <OptionLink to='/shop'>SHOP</OptionLink>
       <OptionLink to='/contact'>CONTACT</OptionLink>
       {
       currentUser ? 
       <OptionDiv as='div' onClick={signOutStart}>SIGN OUT</OptionDiv>
       :
       <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
     </OptionsContainer>
     { hidden ? null : <CartDropdown />
    }
    </HeaderContainer>
);

const  mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToPropos = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToPropos)(Header); 
 










