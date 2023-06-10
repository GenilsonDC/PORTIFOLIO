document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos de entrada
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Faz algo com os valores capturados
    // console.log("Nome:", firstName);
    // console.log("Sobrenome:", lastName);
    // console.log("Email:", email);
    // console.log("Mensagem:", message);

    // Limpa os campos de entrada
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkAWNEpm2HMOA5fKdEzbSI10rdlfF_pz4",
  authDomain: "portifolio-8b457.firebaseapp.com",
  projectId: "portifolio-8b457",
  storageBucket: "portifolio-8b457.appspot.com",
  messagingSenderId: "721098858954",
  appId: "1:721098858954:web:d886035a1b2d0e2e3d6f33",
  measurementId: "G-9W0VMRL6MZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
