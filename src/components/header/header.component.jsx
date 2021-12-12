import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//connect is a HOC
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
      <img className='img-logo' src='https://svgshare.com/i/ciK.svg' alt='logo'/>
      </Link>
     <div className='options'>
       <Link className='option' to='/shop'>SHOP</Link>
       <Link className='option' to='/contact'>CONTACT</Link>
       {
       currentUser ? 
       <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
       :
       <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
     </div>
     { hidden ? null : <CartDropdown />
    }
    </div>
);

const  mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header); 
 










