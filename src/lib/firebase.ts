// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg9xxAwrgwB29LNPdGYO4puFHSHbxU6yU",
  authDomain: "shft-2a377.firebaseapp.com",
  projectId: "shft-2a377",
  storageBucket: "shft-2a377.firebasestorage.app",
  messagingSenderId: "506688898972",
  appId: "1:506688898972:web:dc1762619ecf6579fbea59",
  measurementId: "G-ZRZHR76B04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
