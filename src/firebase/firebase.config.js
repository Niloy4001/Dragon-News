// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfOMT3V1ofu0Dfl668smnabGqdkC9bhVg",
  authDomain: "dragon-news-609c0.firebaseapp.com",
  projectId: "dragon-news-609c0",
  storageBucket: "dragon-news-609c0.firebasestorage.app",
  messagingSenderId: "345839402772",
  appId: "1:345839402772:web:62b76b476eadffe25ccc01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)