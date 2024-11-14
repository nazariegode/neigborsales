import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD2v0qOHUfFEjO3VXgqjspv7C7EuhF3WPA",
  authDomain: "neigborsales.firebaseapp.com",
  projectId: "neigborsales",
  storageBucket: "neigborsales.firebasestorage.app",
  messagingSenderId: "265896311231",
  appId: "1:265896311231:web:58e085a68a35fe6ca3890a",
  measurementId: "G-YSM5YLGG7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
 
