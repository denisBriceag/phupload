
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDI-9lHtUq0p_nenXXWfO-dUTCbQeKbYOU",
  authDomain: "upload-8ef17.firebaseapp.com",
  projectId: "upload-8ef17",
  storageBucket: "upload-8ef17.appspot.com",
  messagingSenderId: "480942867988",
  appId: "1:480942867988:web:f521cb3c190d13779e4901"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timestamp };