import firebase from 'firebase/firebase-app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCdQuq-ce6zir35J94xKWxXF13OzVH6yxY",
    authDomain: "myproject-d7000.firebaseapp.com",
    databaseURL: "https://myproject-d7000.firebaseio.com",
    projectId: "myproject-d7000",
    storageBucket: "myproject-d7000.appspot.com",
    messagingSenderId: "111854303047",
    appId: "1:111854303047:web:44d0925a745e61bf2f7e62",
    measurementId: "G-495657K491"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase