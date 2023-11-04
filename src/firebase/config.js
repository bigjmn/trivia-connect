import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCxkxFXPEFE3c-8z-l-H7PhUkCbs_8wCOc",
  authDomain: "trivia-connect.firebaseapp.com",
  projectId: "trivia-connect",
  storageBucket: "trivia-connect.appspot.com",
  messagingSenderId: "56601651260",
  appId: "1:56601651260:web:cc490e383e9a1e7bec3b39",
  measurementId: "G-JLSR35D4C3"
};

// Initialize Firebase
initializeApp(firebaseConfig)
//set up auth provider 
const auth = getAuth()
const firestore = getFirestore()

export { auth, firestore }
