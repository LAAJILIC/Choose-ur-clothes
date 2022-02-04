import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
//these 2 actions will be dispatched by mapDispatchToProps
import { SignInContainer, ButtonsContainer, } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
const [userData, setUserData ] = useState({ email: '', password: '' })
const { email, password } = userData;

const handleSubmit = async event => {
    event.preventDefault();
     emailSignInStart(email, password);
  
};
const handleChange = event => {
    const { value, name } = event.target; //event.target is what has been typed by the user(password value or email value)

    setUserData({...userData, [name]: value });
};

    return(
        <SignInContainer>
          <h2>Already have an account?</h2>
          <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
         <FormInput 
          name='email' 
          type='email' 
          handleChange={handleChange} 
          value={email} 
          label='email'
          required />
         <FormInput name='password' type='password' handleChange={handleChange} value={password} label='password'
         required 
         />
         <ButtonsContainer>
         <CustomButton type='submit'>SIGN IN</CustomButton>
           <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
           Sign in with google
           </CustomButton>
         </ButtonsContainer>
           </form>
        </SignInContainer>
    );
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);