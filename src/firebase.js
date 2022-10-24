import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// fireba configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9_BD-lqi7K119HTf7g62e30oZMoXrzWI",
  authDomain: "todo-list-738a3.firebaseapp.com",
  projectId: "todo-list-738a3",
  storageBucket: "todo-list-738a3.appspot.com",
  messagingSenderId: "145563344520",
  appId: "1:145563344520:web:70fbbe00c81f44aef8093d",
  measurementId: "G-PWJQGE48H6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
