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
    // const body = document.getElementById("body");

    // const modal = document.createElement("div");
    // modal.className = "modal";
    // modal.textContent = "Login ou Senha Incorreto";
    // modal.id = "modal";

    // const botao = document.createElement("button");
    // botao.setAttribute("onclick", "fechar()");

    // const imagem = document.createElement("img");
    // imagem.src = "../Imagens/botaoFechar.png";
    // imagem.style.width = "25px";
    // imagem.style.height = "25px";

    // botao.appendChild(imagem);
    // modal.appendChild(botao);
    // body.appendChild(modal);
    document.getElementById("modal").style.display = "flex";
  }
}

function fechar() {
  document.getElementById("modal").style.display = "none";
}

function toggleimg(){
  let input = document.getElementById("senha");
  if(input.type == "password"){
    input.setAttribute("type", "text");
  }
  else {
    input.setAttribute("type", "password");
  }
}
