// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "carsbyzee-ef1fa.firebaseapp.com",
  projectId: "carsbyzee-ef1fa",
  storageBucket: "carsbyzee-ef1fa.appspot.com",
  messagingSenderId: "746589508426",
  appId: "1:746589508426:web:e0e466f50cf574e287e7b3",
  measurementId: "G-FL9K0EPBRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
