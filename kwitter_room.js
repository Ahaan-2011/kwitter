
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD4V1D9_Fml3xgy00nEoa2VGlLc1-vxzAs",
      authDomain: "classtest-cac35.firebaseapp.com",
      databaseURL: "https://classtest-cac35-default-rtdb.firebaseio.com",
      projectId: "classtest-cac35",
      storageBucket: "classtest-cac35.appspot.com",
      messagingSenderId: "727151973875",
      appId: "1:727151973875:web:a35673fc99710cec6eae86"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
