// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBt35_tJEcqrjirT1WRkgAFJ6hrV6M2mZI",
  authDomain: "react-todo-47283.firebaseapp.com",
  databaseURL: "https://react-todo-47283.firebaseio.com",
  projectId: "react-todo-47283",
  storageBucket: "react-todo-47283.appspot.com",
  messagingSenderId: "891988223456",
  appId: "1:891988223456:web:e43d62f4c06d6f23a87785",
  measurementId: "G-44NNTW8C2Y" 
})

const db = firebaseApp.firestore()

export default db