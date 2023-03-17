import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCipEDq79f_WdHl1s39JzKIDvkNa0n-um8",
  authDomain: "filmuniverse-b1d6f.firebaseapp.com",
  projectId: "filmuniverse-b1d6f",
  storageBucket: "filmuniverse-b1d6f.appspot.com",
  messagingSenderId: "67411561208",
  appId: "1:67411561208:web:a9d8ec6d545814034e890d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");
export default app;
