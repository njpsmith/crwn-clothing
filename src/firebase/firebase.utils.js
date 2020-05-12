import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyArVXXcCKb7s8FojckqM6WRzSeL960cj2E',
  authDomain: 'crwn-db-d3e39.firebaseapp.com',
  databaseURL: 'https://crwn-db-d3e39.firebaseio.com',
  projectId: 'crwn-db-d3e39',
  storageBucket: 'crwn-db-d3e39.appspot.com',
  messagingSenderId: '589920704254',
  appId: '1:589920704254:web:9b6225321ba629f8cbf7af',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
