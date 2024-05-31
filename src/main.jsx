//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOwDkLXjDiPsn3mrnjbg9bPy7e80DFfmU",
  authDomain: "uptownx-29d6b.firebaseapp.com",
  projectId: "uptownx-29d6b",
  storageBucket: "uptownx-29d6b.appspot.com",
  messagingSenderId: "215696695253",
  appId: "1:215696695253:web:e668df96e28c867f5f675c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
