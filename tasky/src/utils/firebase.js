import firebase from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

console.log('firebaseConfig = ', firebaseConfig);
firebase.initializeApp(firebaseConfig);
const db = getFirestore();

// export const auth = firebase.auth();
export default firebase;
