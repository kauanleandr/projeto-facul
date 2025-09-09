{/* <script>
  // Array para armazenar os itens do carrinho
  let carrinho = [];

  // Função para atualizar a exibição do carrinho
  function atualizarCarrinho() {
    let carrinhoDiv = document.getElementById('carrinhoProdutos');
    let itemCount = document.getElementById('itemCount');
    let totalPreco = document.getElementById('totalPreco');
    
    // Limpa a lista de produtos do carrinho
    carrinhoDiv.innerHTML = '';

    let total = 0;

    // Itera sobre os produtos no carrinho e cria a lista
    carrinho.forEach(item => {
      let produtoDiv = document.createElement('div');
      produtoDiv.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-3');
      produtoDiv.innerHTML = `
        <span>${item.nome}</span> 
        <span>R$ ${item.preco.toFixed(2)}</span>
        <button class="btn btn-sm btn-danger" onclick="removerProduto(${item.id})">Remover</button>
      `;
      carrinhoDiv.appendChild(produtoDiv);
      total += item.preco;
    });

    // Atualiza o contador de itens
    itemCount.textContent = carrinho.length;

    // Atualiza o preço total
    totalPreco.textContent = total.toFixed(2);
  }

  // Função para adicionar um produto ao carrinho
  function adicionarProduto(id, nome, preco) {
    carrinho.push({ id, nome, preco });
    atualizarCarrinho();
  }

  // Função para remover um produto do carrinho
  function removerProduto(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarCarrinho();
  }

  // Adiciona eventos de clique nos botões "Adicionar"
  document.querySelectorAll('.btn-add').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      let nome = btn.closest('.card-produto').querySelector('h3').textContent;
      let preco = parseFloat(btn.closest('.card-produto').querySelector('.preco').textContent.replace('R$ ', '').replace(',', '.'));
      adicionarProduto(index, nome, preco);
    });
  });

  // Finalizar pedido (aqui você pode adicionar lógica para enviar o pedido, por exemplo)
  document.getElementById('finalizarPedido').addEventListener('click', () => {
    if (carrinho.length === 0) {
      alert('Seu carrinho está vazio!');
    } else {
      alert('Pedido finalizado!');
      // Limpar carrinho após finalizar
      carrinho = [];
      atualizarCarrinho();
    }
  });
</script> */}
