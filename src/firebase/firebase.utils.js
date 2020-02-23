import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBoTulFuQMfKFk0RmlHIEctojGKTMhqV28",
  authDomain: "crown-db-5fc18.firebaseapp.com",
  databaseURL: "https://crown-db-5fc18.firebaseio.com",
  projectId: "crown-db-5fc18",
  storageBucket: "crown-db-5fc18.appspot.com",
  messagingSenderId: "663617035091",
  appId: "1:663617035091:web:128e9a8d3c3268174c1fa6",
  measurementId: "G-R0YB80F2C8"
};

firebase.initializeApp(config);

//GOOGLE AUTH
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
