// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js';
// import { getDatabase, ref, set, update } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js';

// const firebaseConfig = {
//     apiKey: "AIzaSyDXc1hesqQkd304iS0d85EJf2f0dSBwRiQ",
//     authDomain: "sylani-online-store.firebaseapp.com",
//     databaseURL: "https://sylani-online-store-default-rtdb.firebaseio.com",
//     projectId: "sylani-online-store",
//     storageBucket: "sylani-online-store.appspot.com",
//     messagingSenderId: "563191373992",
//     appId: "1:563191373992:web:b41f0cee333689fac1229d",
//     measurementId: "G-QY9V2G87N8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);

// //   SIGN UP FUNCTIONALITY:

// document.addEventListener("DOMContentLoaded", function () {
//     // Your code here, including event listener setup

//     const signUpBtn = document.getElementById('signUpBtn');
//     signUpBtn.addEventListener('click', (e) => {
//         const username = document.getElementById("username").value;
//         const email = document.getElementById("email").value;
//         const contact = document.getElementById("contact").value;
//         const password = document.getElementById("password").value;
//         console.log(email, password);
//         //firebase code
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed up
//                 // document.write("You are Signed Up");
//                 const user = userCredential.user;
//                 //use uid
//                 set(ref(database, 'users/' + user.uid), {
//                     username: username,
//                     email: email,
//                     contact:contact,
//                     password: password
//                 })
//                     .then(() => {
//                         // Data saved successfully!
//                         alert('you are signed up');
//                         console.log(userCredential);
//                     })
//                     .catch((error) => {
//                         // The write failed...
//                         alert(error)
//                     });

//             })
//             .catch((error) => {
//                 console.log(error.code);
//                 console.log(error.message);
//                 // ..
//             });
//     });
// });

