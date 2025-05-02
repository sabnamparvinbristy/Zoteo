// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env. VITE_FIREBASE_API_KEY,
  authDomain: "zoteo-21d3c.firebaseapp.com",
  projectId: "zoteo-21d3c",
  storageBucket: "zoteo-21d3c.firebasestorage.app",
  messagingSenderId: "860783515289",
  appId: "1:860783515289:web:30e477bc9bb708a1a58a08"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);