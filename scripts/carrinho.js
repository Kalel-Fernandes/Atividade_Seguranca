function mostrarCarrinho() {
    let lista = document.getElementById("listaCarrinho");
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    lista.innerHTML = "";

    carrinho.forEach(produto => {
        let item = document.createElement("li");
        item.textContent = produto;
        lista.appendChild(item);
    });
}

function limparCarrinho() {
    localStorage.removeItem("carrinho");
    mostrarCarrinho();
}