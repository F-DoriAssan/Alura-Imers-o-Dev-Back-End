// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase GAMERS that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "alura-firebase-535ad.firebaseapp.com",
  projectId: "alura-firebase-535ad",
  storageBucket: "alura-firebase-535ad.firebasestorage.app",
  messagingSenderId: "261015709190",
  appId: "1:261015709190:web:5a74597178b02a94cfc587"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
