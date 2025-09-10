// carrega o HTML do carrinho (offcanvas) via fetch
(async () => {
  try {
    const resp = await fetch('/partials/cart-offcanvas.html', { cache: 'no-cache' });
    const html = await resp.text();

    // injeta no fim do body
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    document.body.appendChild(wrapper);

    // agora que o HTML existe, ligamos o botão "finalizar"
    if (window.attachFinalizeHandler) {
      window.attachFinalizeHandler();
    }
  } catch (e) {
    console.error('Falhou ao carregar o carrinho:', e);
  }
})();
