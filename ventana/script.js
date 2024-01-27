document.addEventListener("DOMContentLoaded", function () {
    var mostrarVentanaBtn = document.getElementById("mostrarVentana");
    var cerrarVentanaBtn = document.getElementById("cerrarVentana");
    var ventanaFlotante = document.getElementById("ventanaFlotante");
  
    mostrarVentanaBtn.addEventListener("click", function () {
      ventanaFlotante.style.display = "block";
    });
  
    cerrarVentanaBtn.addEventListener("click", function () {
      ventanaFlotante.style.display = "none";
    });
  });
  