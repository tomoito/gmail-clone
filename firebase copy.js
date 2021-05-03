import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbkD5x0Cf8dCNMek2syc_PEG0O4pwbdAM",
  authDomain: "clone-6cc5b.firebaseapp.com",
  projectId: "clone-6cc5b",
  storageBucket: "clone-6cc5b.appspot.com",
  messagingSenderId: "232187605591",
  appId: "1:232187605591:web:46627685432f76d0a7e912",
  measurementId: "G-EBDDJHKHX0",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
