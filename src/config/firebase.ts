import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCvNJXkaFIa-Vo_dNHHSDscO6znkdwpxmE",
  authDomain: "cluster-arena.firebaseapp.com",
  projectId: "cluster-arena",
  storageBucket: "cluster-arena.appspot.com",
  messagingSenderId: "732755188941",
  appId: "1:732755188941:web:0bf2574f636b7269645d84",
  measurementId: "G-7WXVYC27VW",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
