// import Swal from "../node_modules/sweetalert2/src/";

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
    console.log("Nome:", firstName);
    console.log("Sobrenome:", lastName);
    console.log("Email:", email);
    console.log("Mensagem:", message);

    // Limpa os campos de entrada
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    validationName(firstName);
    validationlastName(lastName);
    validationEmail(email);
    validationCommentary(message);
  });

function validationName(value) {
  if (value == "" || value.length < 3) {
    Swal.fire({
      icon: "warning",
      title: "Campo Nome Inválido",
      text: "O campo nome precisa ter no mínimo 3 caracteres ou estar preenchido.",
      confirmButtonText: "OK",
    });
  }
}
function validationlastName(value) {
  if (value == "" || value.length < 2) {
    Swal.fire({
      icon: "warning",
      title: "Campo Sobrenome Inválido",
      text: "O campo nome precisa ter no mínimo 2 caracteres ou estar preenchido.",
      confirmButtonText: "OK",
    });
  }
}

function validationEmail(value) {
  if (value.indexOf("@") == -1 || value.indexOf(".") == -1) {
    Swal.fire({
      icon: "warning",
      title: "Email Inválido",
      text: "Informe um endereço de email válido.",
      confirmButtonText: "OK",
    });
  }
}

function validationCommentary(value) {
  if (value.length < 15) {
    Swal.fire({
      icon: "warning",
      title: "Campo Comentário Inválido",
      text: "O campo comentário precisa ter no mínimo 15 caracteres.",
      confirmButtonText: "OK",
    });
  }
}
