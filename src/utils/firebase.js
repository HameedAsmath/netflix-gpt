// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmg-0t-XNnLD0_4oqejjbmxtv59qLzRKA",
  authDomain: "netflixgpt-1d389.firebaseapp.com",
  projectId: "netflixgpt-1d389",
  storageBucket: "netflixgpt-1d389.appspot.com",
  messagingSenderId: "178585385871",
  appId: "1:178585385871:web:19253a423b049a8ae169fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();