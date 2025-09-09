// /js/cart-logic.js

// Carrinho (global p/ outros scripts acessarem se quiserem)
window.carrinho = [];

// Atualiza UI do carrinho
window.atualizarCarrinho = function atualizarCarrinho() {
  const carrinhoDiv = document.getElementById('carrinhoProdutos');
  const itemCount   = document.getElementById('itemCount');
  const totalPreco  = document.getElementById('totalPreco');

  if (!carrinhoDiv || !totalPreco) return; // Offcanvas ainda não carregado

  carrinhoDiv.innerHTML = '';
  let total = 0;

  window.carrinho.forEach(item => {
    const produtoDiv = document.createElement('div');
    produtoDiv.className = 'd-flex justify-content-between align-items-center mb-3';
    produtoDiv.innerHTML = `
      <span>${item.nome}</span> 
      <span>R$ ${item.preco.toFixed(2)}</span>
      <button class="btn btn-sm btn-danger" onclick="removerProduto(${item.id})">Remover</button>
    `;
    carrinhoDiv.appendChild(produtoDiv);
    total += item.preco;
  });

  if (itemCount) itemCount.textContent = window.carrinho.length;
  totalPreco.textContent = total.toFixed(2);
};

// Adiciona/Remove
window.adicionarProduto = function adicionarProduto(id, nome, preco) {
  window.carrinho.push({ id, nome, preco });
  window.atualizarCarrinho();
};

window.removerProduto = function removerProduto(id) {
  window.carrinho = window.carrinho.filter(item => item.id !== id);
  window.atualizarCarrinho();
};

// Liga os botões "Adicionar" (cards) e demais detalhes da página
document.addEventListener('DOMContentLoaded', () => {
  // contador de ano do rodapé (se existir)
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // listeners nos botões dos cards
  document.querySelectorAll('.btn-add').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const card  = btn.closest('.card-produto');
      const nome  = card.querySelector('h3').textContent;
      const precoTexto = card.querySelector('.preco').textContent.trim();
      const preco = parseFloat(precoTexto.replace('R$', '').replace(/\s/g,'').replace(',', '.'));
      window.adicionarProduto(index, nome, preco);

      // opcional: abrir o offcanvas ao adicionar
      // const ocEl = document.getElementById('carrinhoOffcanvas');
      // if (ocEl) new bootstrap.Offcanvas(ocEl).show();
    });
  });
});

// Esta função será chamada quando o fragmento HTML do carrinho for injetado
window.attachFinalizeHandler = function attachFinalizeHandler() {
  const btnFinalizar = document.getElementById('finalizarPedido');
  if (!btnFinalizar) return;

  // Evita múltiplos handlers ao re-injetar
  btnFinalizar.replaceWith(btnFinalizar.cloneNode(true));
  const novoBtn = document.getElementById('finalizarPedido');

  novoBtn.addEventListener('click', () => {
    if (window.carrinho.length === 0) {
      alert('Seu carrinho está vazio!');
    } else {
      alert('Pedido finalizado!');
      window.carrinho = [];
      window.atualizarCarrinho();
    }
  });

  // Atualiza UI caso já tenha itens antes do offcanvas carregar
  window.atualizarCarrinho();
};
