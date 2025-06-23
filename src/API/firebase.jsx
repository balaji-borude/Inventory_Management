// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC3C4W0bYXjX8bBlEVzpeP3Ab5K8WnqFdk",
    authDomain: "inventory-b7283.firebaseapp.com",
    projectId: "inventory-b7283",
    storageBucket: "inventory-b7283.firebasestorage.app",
    messagingSenderId: "863694177596",
    appId: "1:863694177596:web:953a9c57b89ecd2b59ca39"
}
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyC3C4W0bYXjX8bBlEVzpeP3Ab5K8WnqFdk",
//     authDomain: "inventory-b7283.firebaseapp.com",
//     projectId: "inventory-b7283",
//     storageBucket: "inventory-b7283.firebasestorage.app",
//     messagingSenderId: "863694177596",
//     appId: "1:863694177596:web:953a9c57b89ecd2b59ca39"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(); 

// export default app;






// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
