import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAYfiV2RYKMe7FChkgkV-0Xe75IaQAmLPE",
    authDomain: "inception-65767.firebaseapp.com",
    databaseURL: "https://inception-65767.firebaseio.com",
    projectId: "inception-65767",
    storageBucket: "inception-65767.appspot.com",
    messagingSenderId: "596209717732"
  };

  
   
export var firebaseApp = firebase.initializeApp(config);
export var firebaseDatabaseRef = firebase.database().ref();
export default firebase;