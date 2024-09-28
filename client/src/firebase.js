// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9876f.firebaseapp.com",
  projectId: "mern-blog-9876f",
  storageBucket: "mern-blog-9876f.appspot.com",
  messagingSenderId: "70851088372",
  appId: "1:70851088372:web:f4305bb7b3d09a897073a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
