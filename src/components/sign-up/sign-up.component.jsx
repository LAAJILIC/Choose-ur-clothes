import React, { useState} from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';
import { SignUpContainer, TitleContainer } from './sign-up.styles';
/* import UserActionTypes from '../../redux/user/user.types';
 */
const SignUp = ({ signUpStart }) => {

  const [newUserData, setNewUserData ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
});
  const { displayName, email, password, confirmPassword } = newUserData;

  const handleSubmit = async e => {
      e.preventDefault();
      if (password !== confirmPassword) { alert("Passwords don't match");
        return;}
        signUpStart({ displayName, email, password});
  };
   const handleChange = e => {
       const { name, value } = e.target;

       setNewUserData({...newUserData, [name]: value });
   };
      return(
        <SignUpContainer>
        <TitleContainer>Don't have an account yet?</TitleContainer>
        <span>Sign up with your email und password</span>
          <form className='sign-up-form' onSubmit={handleSubmit}>
          
            <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' required />
            <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' required />
            <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required />
            <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confirm Password' required />

           <CustomButton type='submit'>SIGN UP</CustomButton>
          </form>
        </SignUpContainer>
      );
  }

const mapDispatchToProps = dispatch => ({
  signUpStart: UserCredentials => dispatch(signUpStart(UserCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);