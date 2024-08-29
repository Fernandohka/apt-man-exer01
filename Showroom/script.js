let produtos;

document.addEventListener("DOMContentLoaded", function () {
    fetch("../Dados/loja.json")
      .then((response) => response.json())
      .then((data) => {
        produtos = data;
        const produtosContainer = 
          document.getElementById("cards");
  
        produtos.map((produto, index) => {
            const card = document.createElement("div");
            card.className = "card";

            const nome = document.createElement("h2");
            nome.textContent = produto.nome;

            const imagem = document.createElement("img")
            imagem.src = produto.imagem;
            imagem.className = "img";

            const precobola = document.createElement("div");
            precobola.className = "centro";

            const preco = document.createElement("h4");
            preco.textContent = "Preço: R$" + produto.valor.toFixed(2);

            const bola = document.createElement("div");
            bola.className = "bola";
            bola.style.backgroundColor = (produto.status == false) ? "green" : "red";

            precobola.appendChild(preco);
            precobola.appendChild(bola);

            card.appendChild(nome);
            card.appendChild(imagem);
            card.appendChild(precobola);

            produtosContainer.appendChild(card);
        });
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));

});