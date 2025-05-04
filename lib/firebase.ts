import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDs7OwIlGygKURPj_IbHDxMnOtuO4tpC0M",
  authDomain: "fitx-12924.firebaseapp.com",
  projectId: "fitx-12924",
  storageBucket: "fitx-12924.firebasestorage.app",
  messagingSenderId: "887638277730",
  appId: "1:887638277730:web:0555aa9c936e675b62db3b",
  measurementId: "G-N5MEX0JW1M",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app)
const storage = getStorage(app)
const googleProvider = new GoogleAuthProvider()

export { app, auth, db, functions, storage, googleProvider }
