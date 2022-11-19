import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAljYQbeVQR5Mo7EdMOK4vbg2lyT3fkFZU",
    authDomain: "twitter-clone-758eb.firebaseapp.com",
    projectId: "twitter-clone-758eb",
    storageBucket: "twitter-clone-758eb.appspot.com",
    messagingSenderId: "991261780539",
    appId: "1:991261780539:web:e9b4bc0bd81c39b1690a1e",
    measurementId: "G-LL7MTWCGVP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  export default db

