// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHnK3nqcSj9_ep4AGBm0QAhSrPRuqQFS4",
  authDomain: "zimo-sign-up.firebaseapp.com",
  projectId: "zimo-sign-up",
  storageBucket: "zimo-sign-up.appspot.com",
  messagingSenderId: "13580351298",
  appId: "1:13580351298:web:0f004bfb166a410f1bbadb",
  measurementId: "G-N1ZCMZ4VHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);