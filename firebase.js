import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPgv8rhCn4Z2cxxscbJ0Jntg_RYN-5k-0",
  authDomain: "amzn-cln-664ac.firebaseapp.com",
  projectId: "amzn-cln-664ac",
  storageBucket: "amzn-cln-664ac.appspot.com",
  messagingSenderId: "635432552003",
  appId: "1:635432552003:web:fa34f0261bb3774acd76f6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
