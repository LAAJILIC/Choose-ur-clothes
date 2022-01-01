import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import  { signUpSuccess, signUpFailure, signInSuccess, signInFailure, signOutSuccess, signOutFailure } from './user.actions';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

export function* getDataFromUserAuthentification(userAuth, additionalData){
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch(error) {
        yield put(signInFailure(error));
    }
}
export function* signInWithGoogle(){
//here we write code with an API, so it's has the chance to fail(err)thats why we use try catch block
   try {
        const user = yield auth.signInWithPopup(googleProvider);
        yield getDataFromUserAuthentification(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
};
export function* signInWithEmail({ payload: { email, password } }) {
   try{
      const { user } = yield auth.signInWithEmailAndPassword(email, password);
      yield getDataFromUserAuthentification(user);
   } catch(error){ yield put(signInFailure(error));}
}

export function* verifyAuthenification() {
 try {
    const actualUser = yield getCurrentUser();
    if(!actualUser) return;
    yield getDataFromUserAuthentification(actualUser);
 } catch(error){ yield put(signInFailure(error));}
}
export function* signOut(){
    try{
       yield auth.signOut();
       yield put(signOutSuccess());
    } catch(error){ yield put(signOutFailure(error));}
}


export function* signUp({payload: { email, password, displayName }}){
try{
   const { user } = yield auth.createUserWithEmailAndPassword(email, password);
   yield put(signUpSuccess({ user, additionalData: { displayName } }));
} catch(error){ yield put(signUpFailure(error));}
}

export function* signInAfterSignUp({ payload: { user, additionalData}}){
    yield getDataFromUserAuthentification(user, additionalData);
}

export function* onGoogleSignInStart(){
yield  takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
};
export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}
export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, verifyAuthenification)
}
export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}
export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}
export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function *userSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignOutStart), call(onSignUpStart), call(onSignUpSuccess)]);
}
