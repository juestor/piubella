import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBIczC1jto7PmqMQg-nPfB0tyifWVMv1Bs",
  authDomain: "piubella-jewelry.firebaseapp.com",
  projectId: "piubella-jewelry",
  storageBucket: "piubella-jewelry.appspot.com",
  messagingSenderId: "906199379022",
  appId: "1:906199379022:web:30c9ee4c1faa2cdac1e71f"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if(!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
