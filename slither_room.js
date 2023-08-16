var firebaseConfig = {
    apiKey: "AIzaSyDKlE7kZOqjMVxbvFsxcE_LbS8z-n9E8VY",
    authDomain: "kwitter-f417a.firebaseapp.com",
    databaseURL: "https://kwitter-f417a-default-rtdb.firebaseio.com",
    projectId: "kwitter-f417a",
    storageBucket: "kwitter-f417a.appspot.com",
    messagingSenderId: "473045830540",
    appId: "1:473045830540:web:a7b5e2872d09a0f72864a9"
  };
  
 firebase.initializeApp(firebaseConfig);
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    });});}
getData();

user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "welcome " + user_name + "!"

   function addRoom() {
      room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose: "adding"
});

      localStorage.setItem("room_name", room_name);
      window.location = "slither_room.html"
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class = 'room_names' id ="+Room_names+"onclick = redirectToRoomName(this.id)>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name) {

console.log(name);
localStorage.setItem("room_name", room_name);
window.location = "slither_room.html";
}

function logout() {

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}