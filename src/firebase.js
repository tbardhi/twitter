import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCwPw2R0cNsuoTScgAVW84uhOvCPwfU90",
  authDomain: "twitter-clone-6b419.firebaseapp.com",
  databaseURL: "https://twitter-clone-6b419.firebaseio.com",
  projectId: "twitter-clone-6b419",
  storageBucket: "twitter-clone-6b419.appspot.com",
  messagingSenderId: "591716555385",
  appId: "1:591716555385:web:7eafd1075a30b0cde112a8",
  measurementId: "G-0YY1N7Y943",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
