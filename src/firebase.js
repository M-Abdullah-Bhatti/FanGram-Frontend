import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc8fJIOOBRJUiSnS6HmoAfAxpvKnL-I0Y",
    authDomain: "fangram-3c63f.firebaseapp.com",
    projectId: "fangram-3c63f",
    storageBucket: "fangram-3c63f.appspot.com",
    messagingSenderId: "204661684293",
    appId: "1:204661684293:web:3deec162542b86cda40b2c",
    measurementId: "G-914YSZ05FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;