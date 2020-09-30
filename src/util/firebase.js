import firebase from "firebase";
<<<<<<< HEAD

   var firebaseConfig = {
=======
import "firebase/auth";
import "firebase/firestore";

  var firebaseConfig = {
>>>>>>> 7b2abb5fb7259c79088f3e4812c5e765df637253
    apiKey: "AIzaSyAp4Ce9RZ9wv0gKBItcbkriA3TvZjdJGtY",
    authDomain: "tasklist-290920.firebaseapp.com",
    databaseURL: "https://tasklist-290920.firebaseio.com",
    projectId: "tasklist-290920",
    storageBucket: "tasklist-290920.appspot.com",
    messagingSenderId: "362411408273",
    appId: "1:362411408273:web:c17917d712a8369f7e3830",
    measurementId: "G-KX9XYY1V5X"
  };
<<<<<<< HEAD
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
=======

 const fire = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

  export default fire;
>>>>>>> 7b2abb5fb7259c79088f3e4812c5e765df637253
