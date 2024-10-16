 import { initializeApp } from "firebase/app"; 
 import { getFirestore } from "firebase/firestore";
  
  
  const firebaseConfig = {
  apiKey: "AIzaSyB-qzm4UrH4PBW2k9auLRSmtKUCclIvaC0",
  authDomain: "backend-esenciamerle.firebaseapp.com",
  projectId: "backend-esenciamerle",
  storageBucket: "backend-esenciamerle.appspot.com",
  messagingSenderId: "243919237014",
  appId: "1:243919237014:web:6c679786be798df68337b7",
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)