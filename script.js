document.getElementById("botao").addEventListener("click", function() {
  window.location.href = "form.html";
});

  document.getElementById("submit").addEventListener("click", function() {
    const nome = document.getElementById("nomeExercicio").value;
    const series = parseInt(document.getElementById("series").value, 10);
    const repeticoes = document.getElementById("repeticoes").value;
  
    const container = document.getElementById("linhasContainer");
    container.innerHTML = "";

    const titulo = document.createElement("h2");
    titulo.textContent = `Exercício: ${nome} - ${repeticoes} repetições`;
    container.appendChild(titulo);
  
    // Gera novas linhas com base no valor informado
    for (let i = 1; i <= series; i++) {
      const linha = document.createElement("div");
      linha.innerHTML = `Série ${i}: <input type="checkbox" id="serie${i}">`;
      linha.style.marginBottom = "8px";
      container.appendChild(linha);
    }
  });