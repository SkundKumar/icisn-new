import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUtwKe_O0XDatTgB_zicbrecDIDJhqzgk",
  authDomain: "icisn-714dd.firebaseapp.com",
  projectId: "icisn-714dd",
  storageBucket: "icisn-714dd.firebasestorage.app",
  messagingSenderId: "379245674674",
  appId: "1:379245674674:web:631e2ee6aae2a24182c9ab",
  measurementId: "G-2977YWQYXX",
}

// Initialize Firebase
let app
let analytics
let db

// Check if Firebase has been initialized
if (!getApps().length) {
  app = initializeApp(firebaseConfig)
  db = getFirestore(app)

  // Only initialize analytics on the client side
  if (typeof window !== "undefined") {
    analytics = getAnalytics(app)
  }
} else {
  app = getApps()[0]
  db = getFirestore(app)
}

export { app, db, analytics }
