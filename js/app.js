let totalCarrinho = 0;
limpar()

function adicionar() {
    // capitura informações
    let produtoSelecionado = document.getElementById('produto').value;
    const myArray = produtoSelecionado.split(' - R$');
    let valorProduto = myArray[1];
    let nomeProduto = myArray[0];
    let quantidade = document.getElementById('quantidade').value;
    
    // Verificar se o produto selecionado é válido
    if (!produtoSelecionado || produtoSelecionado.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }


    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    // valor total
    let valorTotalProduto = valorProduto * quantidade;

    // adicionando no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotalProduto}</span>
        </section>`
    
    // soma total
    totalCarrinho = totalCarrinho + valorTotalProduto;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalCarrinho}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ 0`;
}