//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDKlE7kZOqjMVxbvFsxcE_LbS8z-n9E8VY",
    authDomain: "kwitter-f417a.firebaseapp.com",
    databaseURL: "https://kwitter-f417a-default-rtdb.firebaseio.com",
    projectId: "kwitter-f417a",
    storageBucket: "kwitter-f417a.appspot.com",
    messagingSenderId: "473045830540",
    appId: "1:473045830540:web:a7b5e2872d09a0f72864a9"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

function send() {

    msg = document.getElementById("msg").value;
    firebase.datanase().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code



//End code
    } });  }); }
getData();
