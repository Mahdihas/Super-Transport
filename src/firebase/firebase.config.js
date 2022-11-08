// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6KtFjx270GQ7Kc6puBvYk_251qNgWjtI",
  authDomain: "invention-18613.firebaseapp.com",
  projectId: "invention-18613",
  storageBucket: "invention-18613.appspot.com",
  messagingSenderId: "733185204475",
  appId: "1:733185204475:web:df2defcdb88827caaf505e",
  measurementId: "G-S7WT97XFEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;