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

 export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;
    
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = userRef.get();
     
   if (!snapShot.exists){
     const { displayName, email} = userAuth;
     const createdAt = new Date();
     try {
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
     }   catch (error) {console.log('error creating user', error.message);
     }
    }
    return userRef;
  };

   
  export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch(); //batch: send all in the same request= big group of data, either all will work or  all will fail so like this we can predict so anticipate
    objectsToAdd.forEach(obj => 
      { //const newDocRef = collectionRef.doc(obj.title); //create in the firestore database objects for the 5 collections with their ID which is token here as obj.title
        const newDocRef = collectionRef.doc(); // here we create them with unique ID value for all the objects
        batch.set(newDocRef, obj); // it's like newDocRef.set
        console.log(newDocRef);
        });

        return batch.commit(); //return in an asynchronous way if there is a problem
  };
  export const convertCollectionSnapshotToMap = collections => {
   const transformedCollectionToObject = collections.docs.map(doc => {
     const { title, items } =doc.data();

     return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items  
     };
   });
    return transformedCollectionToObject.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection; 
      return accumulator;
    }, { });  
  };

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    })
  }
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account '});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;