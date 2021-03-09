import firebase from 'firebase/app'
import 'firebase/storage'

 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC32lkjiyr7WcjmRU2HOdZ1G18wzSMiGD0",
    authDomain: "mi-mandadero.firebaseapp.com",
    databaseURL: "https://mi-mandadero-default-rtdb.firebaseio.com",
    projectId: "mi-mandadero",
    storageBucket: "mi-mandadero.appspot.com",
    messagingSenderId: "1055645118874",
    appId: "1:1055645118874:web:fa2b0093b05e6c8ada0a23"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export  {
    storage, firebase as default
}