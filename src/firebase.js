// import firebase from './firebase';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBVhkFnJnjC-9iTvcjL-7InPj3X6_Yb0B0",
    authDomain: "linkedup-85b8b.firebaseapp.com",
    projectId: "linkedup-85b8b",
    storageBucket: "linkedup-85b8b.appspot.com",
    messagingSenderId: "733169636782",
    appId: "1:733169636782:web:92696f40771e255516643f"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
// Get a reference to the firebase realtime database service
const database = getDatabase(app);

export default app; // Default export for Firebase app
export { db, auth , database}; // Named exports