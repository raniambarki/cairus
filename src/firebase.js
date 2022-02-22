// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getfirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKZbLhP-esB9__S8Lk9DqwpgAsn4e0l-k",
  authDomain: "mindup-18b5d.firebaseapp.com",
  projectId: "mindup-18b5d",
  storageBucket: "mindup-18b5d.appspot.com",
  messagingSenderId: "590360098300",
  appId: "1:590360098300:web:195e795bfb92d231ec6e79",
  measurementId: "G-S2PN45GXXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);