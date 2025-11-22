
// Seleciona o botão
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Verifica se o botão existe antes de prosseguir
if (!scrollTopBtn) {
  console.error("Botão 'scrollTopBtn' não encontrado no DOM.");
} else {
  // Função para mostrar ou esconder o botão com throttling
  let isThrottled = false;
  const throttleDelay = 100; // ms

  function toggleScrollTopBtn() {
    if (isThrottled) return;
    isThrottled = true;

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }

    setTimeout(() => {
      isThrottled = false;
    }, throttleDelay);
  }

  // Adiciona event listener para scroll
  window.addEventListener("scroll", toggleScrollTopBtn);

  // Ao clicar, volta suavemente para o topo
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Melhorias de acessibilidade
  scrollTopBtn.setAttribute("aria-label", "Voltar ao topo da página");
  scrollTopBtn.setAttribute("role", "button");
  scrollTopBtn.setAttribute("tabindex", "0");

  // Permite navegação por teclado
  scrollTopBtn.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollTopBtn.click();
    }
  });
}
