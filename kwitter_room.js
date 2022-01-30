
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKlh_nyBF9GFChV3dU5Sx4g-1Sx__zhAo",
  authDomain: "kwitter-7e88f.firebaseapp.com",
  projectId: "kwitter-7e88f",
  storageBucket: "kwitter-7e88f.appspot.com",
  messagingSenderId: "947152064934",
  appId: "1:947152064934:web:d716f41d587ae3a9b0ff67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
