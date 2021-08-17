import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const APIKEY = process.env.API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyCKAFFdj_85Dj6FIHoSAVppfaAKigZJz0M",
  authDomain: "trello-fea2b.firebaseapp.com",
  projectId: "trello-fea2b",
  storageBucket: "trello-fea2b.appspot.com",
  messagingSenderId: "453817543339",
  appId: "1:453817543339:web:00f5e393c35e613a8765ee",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// firebase.firestore().enablePersistence()
const auth = firebase.auth();

export { firebase, db, auth };
