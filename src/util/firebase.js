import "firebase/auth";
import "firebase/firestore";

  var firebaseConfig = {

    apiKey: "AIzaSyAp4Ce9RZ9wv0gKBItcbkriA3TvZjdJGtY",
    authDomain: "tasklist-290920.firebaseapp.com",
    databaseURL: "https://tasklist-290920.firebaseio.com",
    projectId: "tasklist-290920",
    storageBucket: "tasklist-290920.appspot.com",
    messagingSenderId: "362411408273",
    appId: "1:362411408273:web:c17917d712a8369f7e3830",
    measurementId: "G-KX9XYY1V5X"
  };

 const fire = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

  export default fire;
