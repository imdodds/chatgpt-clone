import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7mkrSd8uzo4HjeE4-4_2U1BsG77y89Ko",
  authDomain: "chatgpt-clone-f53f3.firebaseapp.com",
  projectId: "chatgpt-clone-f53f3",
  storageBucket: "chatgpt-clone-f53f3.appspot.com",
  messagingSenderId: "1089216063626",
  appId: "1:1089216063626:web:636fbe8406b4e4a1c3a573",
  measurementId: "G-E13KM283Y7"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
