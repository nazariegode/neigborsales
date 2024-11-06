/* import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAxQs7reY021HQGTRwz28qfDdo_MSWZ-3E",
  authDomain: "reactjs-nazariego.firebaseapp.com",
  projectId: "reactjs-nazariego",
  storageBucket: "reactjs-nazariego.appspot.com",
  messagingSenderId: "547660438616",
  appId: "1:547660438616:web:8484bbc47a9450719cbe2d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
/* import { getAnalytics } from "firebase/analytics";
 */// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
/* const analytics = getAnalytics(app); */