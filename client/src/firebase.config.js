import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBJuvz5TFoHPUwRYPL730Z8RaC3jNUzU1Q",
  authDomain: "react-recipe-yt.firebaseapp.com",
  projectId: "react-recipe-yt",
  storageBucket: "react-recipe-yt.appspot.com",
  messagingSenderId: "477940487473",
  appId: "1:477940487473:web:8184943d38ec332ed78c10"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }