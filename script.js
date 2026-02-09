
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAnalytics } from "firebase/analytics";

var fb_gamedb


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCblc0qaUW2Vgw7YD7d9UfH19BFQOP6krQ",
  authDomain: "scotty13compsci.firebaseapp.com",
  projectId: "scotty13compsci",
  storageBucket: "scotty13compsci.firebasestorage.app",
  messagingSenderId: "369606866071",
  appId: "1:369606866071:web:313c69059ecae87eee65d2",
  measurementId: "G-X75EMXKZ1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

fb_gamedb = getDatabase(app);
console.info(fb_gamedb);         	//DIAG


var messageSpace = document.getElementById("welcomeMessage");
var inputMessage = document.getElementById("inputMessage");
messageSpace.innerHTML = "You've connected to the JavaScript!";

function changeHeading(){
    messageSpace.innerHTML = inputMessage.value;
}
