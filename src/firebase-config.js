import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: `${process.env.API_KEY}`,
    authDomain: `${process.env.AuthDomain}`,
    projectId: `electricfox-460df`,
    storageBucket: `electricfox-460df.appspot.com`,
    messagingSenderId: `916440837670`,
    appId: `1:916440837670:web:f36519b81d86f6f8acc0e7`,
  };

const firebaseDatabase = initializeApp(firebaseConfig); 



export const db = getFirestore(firebaseDatabase);