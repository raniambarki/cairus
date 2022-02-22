// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBrisaajBvxJx79f8KGsEWN_je-PgV6-iU",
  authDomain: "cairus-ff66d.firebaseapp.com",
  projectId: "cairus-ff66d",
  storageBucket: "cairus-ff66d.appspot.com",
  messagingSenderId: "792154832403",
  appId: "1:792154832403:web:76944fc7484f7cf99c09e6",
  measurementId: "G-XGG1WEFMGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

