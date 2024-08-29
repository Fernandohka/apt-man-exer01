function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
    const body = document.getElementById("body");

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.textContent = "Login ou Senha Incorreto";

    body.appendChild(modal);
  }
}
