import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAnJLGeX7Ko4zNGJ_6u0dJUrY_jWk8tUiI",
  authDomain: "note-pad---react.firebaseapp.com",
  projectId: "note-pad---react",
  storageBucket: "note-pad---react.appspot.com",
  messagingSenderId: "549553355051",
  appId: "1:549553355051:web:9502a18d1943f78a8fed6e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes" ); 
