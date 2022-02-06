
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrUGFb-MQGTrH95gREaQGEfTYorkfiXC0",
  authDomain: "kwitter-2-project.firebaseapp.com",
  projectId: "kwitter-2-project",
  storageBucket: "kwitter-2-project.appspot.com",
  messagingSenderId: "289429471838",
  appId: "1:289429471838:web:1611bc9d4b18d7daeaaacf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
