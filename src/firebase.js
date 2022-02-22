// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

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
export const db = getFirestore(app)

