// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-7b137.firebaseapp.com",
  projectId: "interviewiq-7b137",
  storageBucket: "interviewiq-7b137.firebasestorage.app",
  messagingSenderId: "500469387362",
  appId: "1:500469387362:web:f9021383384ebb30e5413b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}