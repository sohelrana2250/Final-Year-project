// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxcpaBW9DuqilcOVnNiMCDNU49JJ39gUU",
    authDomain: "employeebox-a254f.firebaseapp.com",
    projectId: "employeebox-a254f",
    storageBucket: "employeebox-a254f.appspot.com",
    messagingSenderId: "977052024443",
    appId: "1:977052024443:web:d8684435680efef03facde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export default auth;
