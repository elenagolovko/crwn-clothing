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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //allows to perform CRUD
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //represents the data
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const whenCreated = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        whenCreated,
        ...additionalData
      });
    } catch (e) {
      console.error("Error creating a user", e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  //batching requests together so they fail if one fails gives predictability
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    };
  });

  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

//GOOGLE AUTH
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
