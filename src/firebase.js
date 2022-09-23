// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeTTXZXYKAYqaM4n03rSyJ13JfMmhBlHE",
  authDomain: "fir-try-853ed.firebaseapp.com",
  projectId: "fir-try-853ed",
  storageBucket: "fir-try-853ed.appspot.com",
  messagingSenderId: "850222200479",
  appId: "1:850222200479:web:150be7c12a3e2f4b99d4aa",
  measurementId: "G-ZGTDJNX2JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
        })
        .catch((error) => {
            console.log(error)
    })
}
