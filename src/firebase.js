import firebase from 'firebase/app';
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDzeVBTX3DRhLfYg7C1kv73sNdn8lWsrQk",
    authDomain: "demovuejs-5f8f7.firebaseapp.com",
    databaseURL: "https://demovuejs-5f8f7-default-rtdb.firebaseio.com",
    projectId: "demovuejs-5f8f7",
    storageBucket: "demovuejs-5f8f7.appspot.com",
    messagingSenderId: "481981238467",
    appId: "1:481981238467:web:28450d0ce1d28a3eb1e676"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.database()