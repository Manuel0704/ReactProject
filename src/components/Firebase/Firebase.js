import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig =
{
    apiKey: "AIzaSyDxQVEv5B1HHD6PH1AxjQREKmVsM6WOVuo",
    authDomain: "makross-store.firebaseapp.com",
    projectId: "makross-store",
    storageBucket: "makross-store.appspot.com",
    messagingSenderId: "680191844055",
    appId: "1:680191844055:web:ef1e1827559473b4ca1a92",
    measurementId: "G-E2MK3WY1WT"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);