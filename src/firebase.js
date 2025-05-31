// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Paste your config from Firebase Console here:
const firebaseConfig = {
  apiKey: "AIzaSyCRVZKkP56rZ48jdpY92Fqh3caP7dWLtUk",
  authDomain: "personal-portfolio-ad3d6.firebaseapp.com",
  projectId: "personal-portfolio-ad3d6",
  storageBucket: "personal-portfolio-ad3d6.appspot.com",
  messagingSenderId: "488342352477",
  appId: "1:488342352477:web:22790c92fa69193deb93b4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
