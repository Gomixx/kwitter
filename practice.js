
//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = {
   apiKey: "AIzaSyCAC4gkAqVZABrt3lqbUyCZ20WnC39wrH8",
   authDomain: "kwitter-d055c.firebaseapp.com",
   databaseURL: "https://kwitter-d055c-default-rtdb.firebaseio.com",
   projectId: "kwitter-d055c",
   storageBucket: "kwitter-d055c.appspot.com",
   messagingSenderId: "198823435521",
   appId: "1:198823435521:web:aeab1129d4d80ca4464f00"
 };
 


// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);



// Adicionar a função para adicionar usuário 

function addUser(){
   user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
   purpose:"adicionando usuario"
  });
}













































































































































































