document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;
    const errorMsg = document.getElementById("errorMsg");

    if (usuario === "yinyamir" && clave === "1970") {
      window.location.href = "index.html";
    } else {
      errorMsg.textContent = "Usuario o contraseña incorrectos.";
    }
  });
