import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDntiDwNHgJxsjInl-3A9Ke-cDEIQQCM0g",
    authDomain: "olx-clone-336a9.firebaseapp.com",
    projectId: "olx-clone-336a9",
    storageBucket: "olx-clone-336a9.appspot.com",
    messagingSenderId: "88117419215",
    appId: "1:88117419215:web:08513efd8c3d813d6c6bba",
    measurementId: "G-BR3E0BTGD9"
  };
  

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
