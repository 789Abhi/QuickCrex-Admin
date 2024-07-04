// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAzhhB384sKwOwtbt1_R60vl9hsQqQ7KMs",
    authDomain: "quickcrex-score-admin.firebaseapp.com",
    projectId: "quickcrex-score-admin",
    storageBucket: "quickcrex-score-admin.appspot.com",
    messagingSenderId: "405704285705",
    appId: "1:405704285705:web:6e3bd54267de6bf82e62d8",
    measurementId: "G-CL70GFY714"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
