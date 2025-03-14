import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX3YOXTzD3-JAVnQ0zqbO2IFNB-PRo5VQ",
  authDomain: "react-ecom-b00fd.firebaseapp.com",
  projectId: "react-ecom-b00fd",
  storageBucket: "react-ecom-b00fd.firebasestorage.app",
  messagingSenderId: "172828477009",
  appId: "1:172828477009:web:a388d65431f9d0d1e09a70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app);

export {fireDB, auth}