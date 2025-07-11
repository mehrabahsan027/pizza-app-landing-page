// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbIJxtAi7nqTN8DWVfyqbSvgrWD0lCchg",
  authDomain: "pizza-80c3b.firebaseapp.com",
  projectId: "pizza-80c3b",
  storageBucket: "pizza-80c3b.firebasestorage.app",
  messagingSenderId: "162363192555",
  appId: "1:162363192555:web:ff173ab4fbb9f8f5d2baae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;