function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark");
}


var users = [
  {
    email: "tapiaalvam@gmail.com",
    password: "Ma123",
  },
];

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

document.getElementById("checkInForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Check-in realizado correctamente.");
  closeModal("checkInModal");
});

document.getElementById("logInForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("logInEmail").value;
  let password = document.getElementById("logInPassword").value;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      alert("Iniciaste sesión correctamente.");
      window.location.href = "index2.html";
      break;
    } else {
      alert("Email o contraseña incorrectos. Por favor, intenta de nuevo.");
    }
  }
});




  





