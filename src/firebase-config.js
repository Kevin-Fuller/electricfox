import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: `${process.env.API_KEY}`,
    authDomain: `${process.env.AuthDomain}`,
    projectId: `electricfox-502bf`,
    storageBucket: `electricfox-502bf.appspot.com`,
    messagingSenderId: `350531897110`,
    appId: `1:350531897110:web:0c9a49cfd13976abce3237`,
    measurementId: `G-PED0LPCMWB`
  };

const firebaseDatabase = initializeApp(firebaseConfig); 



export const db = getFirestore(firebaseDatabase);