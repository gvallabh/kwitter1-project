
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
user_name= localstorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+ user_name + "!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"add from user"
  });
  localStorage.setItem("room_name" , room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log("room name -" + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
     
    function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name );
      window.location="kwitter_page.html";
    }

    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";
    }

