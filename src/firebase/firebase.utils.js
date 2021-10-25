import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBFOAxVy7Wt5dQIA6PBZcTDlc_pfeXw1_E",
    authDomain: "crown-database-6c993.firebaseapp.com",
    projectId: "crown-database-6c993",
    storageBucket: "crown-database-6c993.appspot.com",
    messagingSenderId: "792693497332",
    appId: "1:792693497332:web:93c274f55e4cf770e6eda1",
    measurementId: "G-TWRKJM0MZL"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account '});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;