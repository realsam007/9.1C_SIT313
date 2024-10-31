import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiJ0zE-65E78QNcocqCVuiK_6biZbSNRQ",
  authDomain: "task7-1p-full-stack.firebaseapp.com",
  projectId: "task7-1p-full-stack",
  storageBucket: "task7-1p-full-stack.appspot.com",
  messagingSenderId: "1024719991743",
  appId: "1:1024719991743:web:e024439546ca8660f4670a",
  measurementId: "G-TYVBZX4024"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Exporting functions to use in other components
export { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut }; // Export signOut
