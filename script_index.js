document.addEventListener("DOMContentLoaded", function() {
  const botao = document.getElementById("botao");

  if (botao) {
    botao.addEventListener("click", function() {
      window.location.href = "form.html";
    });
  }
});