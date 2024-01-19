// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* 
apiKey: "AIzaSyBxcpaBW9DuqilcOVnNiMCDNU49JJ39gUU",
    authDomain: "employeebox-a254f.firebaseapp.com",
    projectId: "employeebox-a254f",
    storageBucket: "employeebox-a254f.appspot.com",
    messagingSenderId: "977052024443",
    appId: "1:977052024443:web:d8684435680efef03facde"

     apiKey: process.env.RECAT_APP_apiKey,
    authDomain: process.env.RECAT_APP_authDomain,
    projectId: process.env.RECAT_APP_projectId,
    storageBucket: process.env.RECAT_APP_storageBucket,
    messagingSenderId: process.env.RECAT_APP_messagingSenderId,
    appId: process.env.RECAT_APP_appId

*/



const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export default auth;
