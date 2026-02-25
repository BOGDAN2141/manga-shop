// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2lBAcRoCF9HZA2iAv-yMcwWUe5R4dqhg",
  authDomain: "manga-shop-6986c.firebaseapp.com",
  projectId: "manga-shop-6986c",
  storageBucket: "manga-shop-6986c.firebasestorage.app",
  messagingSenderId: "871841674193",
  appId: "1:871841674193:web:39dff414bb2829140226f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);