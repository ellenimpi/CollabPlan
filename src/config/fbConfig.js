import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyD1Ss626dDTfMno15ncwW6xpg7MG9DslvI",
    authDomain: "the-project-planner.firebaseapp.com",
    databaseURL: "https://the-project-planner.firebaseio.com",
    projectId: "the-project-planner",
    storageBucket: "",
    messagingSenderId: "561765950228",
    appId: "1:561765950228:web:7f44853415119c83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;