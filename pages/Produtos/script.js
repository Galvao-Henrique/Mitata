const botoes = document.querySelectorAll(".categoria");
const produtos = document.querySelectorAll(".produto");
const contador = document.querySelector(".topo-produtos strong");

function filtrarProdutos(filtro) {
    let quantidade = 0;

    produtos.forEach(produto => {
        const deveExibir = filtro === "todos" || produto.dataset.categoria === filtro;

        produto.style.display = deveExibir ? "block" : "none";

        if (deveExibir) {
            quantidade++;
        }
    });

    contador.textContent = `${quantidade} ${quantidade === 1 ? "produto" : "produtos"}`;
}

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        botoes.forEach(btn => btn.classList.remove("ativo"));
        botao.classList.add("ativo");

        filtrarProdutos(botao.dataset.filtro);
    });
});

filtrarProdutos("todos");
