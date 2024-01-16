import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvMI9m5H5qUrdFHftZG2dtko0MYJ0wOMw",
  authDomain: "clone-dc4d5.firebaseapp.com",
  projectId: "clone-dc4d5",
  storageBucket: "clone-dc4d5.appspot.com",
  messagingSenderId: "733983480053",
  appId: "1:733983480053:web:6772aaf80f91771cbacdbc",
  measurementId: "G-PZJJF04L50"
}


const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth()

export { auth, db }