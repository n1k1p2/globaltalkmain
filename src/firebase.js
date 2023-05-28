import {initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
import {getAnalytics} from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { onValue, ref, set } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFg4YKcMJvWa-iT-J6AXBz906nEJbCqdw",
  authDomain: "globaltalk-fe843.firebaseapp.com",
  projectId: "globaltalk-fe843",
  storageBucket: "globaltalk-fe843.appspot.com",
  messagingSenderId: "347985491182",
  appId: "1:347985491182:web:c024ce18847c6b96172fff",
  measurementId: "G-P1T25RMCMK",
  databaseURL: 'https://globaltalk-fe843-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}
export const db = getDatabase(app);
