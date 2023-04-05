// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe1qZt1XsQ5nSBAm72OPUWhPOmwvAlV0o",
  authDomain: "login-850df.firebaseapp.com",
  projectId: "login-850df",
  storageBucket: "login-850df.appspot.com",
  messagingSenderId: "604352060008",
  appId: "1:604352060008:web:a196ccd69456e405dd79dd",
  measurementId: "G-Y83JVHQ739"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider}
export default app;