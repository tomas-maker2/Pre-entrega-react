import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDntgAkLTm1VEIj4DynL1sBpy7K0hjj0jk",
  authDomain: "primera-practica-6ed3a.firebaseapp.com",
  projectId: "primera-practica-6ed3a",
  storageBucket: "primera-practica-6ed3a.appspot.com",
  messagingSenderId: "938243227137",
  appId: "1:938243227137:web:820a65e583eb19f65c4a00",
  measurementId: "G-1BTKJ3X1B7"
};

// Initialize Firebase
initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


