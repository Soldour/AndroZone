// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZ_weLCdsDaZlD1Peu09XmYeCNdPhcFiU",
  authDomain: "androzone-29379.firebaseapp.com",
  projectId: "androzone-29379",
  storageBucket: "androzone-29379.appspot.com",
  messagingSenderId: "1080870908047",
  appId: "1:1080870908047:web:23fd29f872c6e34038c0fa",
  measurementId: "G-X0273MWGW2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
