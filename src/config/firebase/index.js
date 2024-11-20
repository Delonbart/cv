// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdygm8ca-vuxuVs1JsJhnZP5c9SPoleHg",
  authDomain: "mycv-135e5.firebaseapp.com",
  projectId: "mycv-135e5",
  storageBucket: "mycv-135e5.firebasestorage.app",
  messagingSenderId: "44480002214",
  appId: "1:44480002214:web:efe6dad06c3a33304bdc67",
  measurementId: "G-0KJQP6FTPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);