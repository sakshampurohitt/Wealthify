// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCm-YvtbdCPhm9cGQ9BPSqQx4KQuOM-8k",
  authDomain: "wealthify-7c945.firebaseapp.com",
  projectId: "wealthify-7c945",
  storageBucket: "wealthify-7c945.appspot.com",
  messagingSenderId: "976570455437",
  appId: "1:976570455437:web:c2d730436b2ac6cb8419c4",
  measurementId: "G-MM7D31BG49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };
