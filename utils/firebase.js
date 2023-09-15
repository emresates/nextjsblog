// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "testblog-78246.firebaseapp.com",
  projectId: "testblog-78246",
  storageBucket: "testblog-78246.appspot.com",
  messagingSenderId: "1057101435677",
  appId: "1:1057101435677:web:83610dea48843a7afa87f4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
