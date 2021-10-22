const firebaseConfig = {
    apiKey: "AIzaSyDuK_XetyB80GB6e-01A3fdFm1WgQhl_Iw",
    authDomain: "let-s-chat-app-aa1c5.firebaseapp.com",
    projectId: "let-s-chat-app-aa1c5",
    storageBucket: "let-s-chat-app-aa1c5.appspot.com",
    messagingSenderId: "347356713290",
    appId: "1:347356713290:web:a7fa0b300d186947beb1b3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " +user_name+ "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room_name" +Room_names);
    row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>" +Room_names+ "</div> <hr>";
    document.getElementById("output").innerHTML+= row; 
    //End code
    });});}
getData();


function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name" , room_name);
    window.location = "lets_chat_page.html";
}

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "lets_chat_page.html";
}