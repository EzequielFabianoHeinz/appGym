document.getElementById("submit").addEventListener("click", function () {
    const formularioQuantExer = document.getElementById("formularioQuantExer");
    const camposExercicios = document.getElementById("camposExercicios");
    const formulario = document.getElementById("formulario");


    if (formularioQuantExer) {
        const gerarCamposButton = document.getElementById("gerarCampos");

        gerarCamposButton.addEventListener("click", function () {
            const quantExer = parseInt(document.getElementById("quantExer").value, 10);

            camposExercicios.innerHTML = "";

            for (let i = 1; i <= quantExer; i++) {
                const exercicioDiv = document.createElement("div");
                exercicioDiv.innerHTML = `
                    <h3>Exercício ${i}</h3>
                    <label for="nomeExercicio${i}">Nome do Exercício:</label>
                    <input type="text" id="nomeExercicio${i}" name="nomeExercicio${i}" placeholder="Ex: Supino" required>

                    <label for="series${i}">Número de Séries:</label>
                    <input type="number" id="series${i}" name="series${i}" min="1" placeholder="Ex: 4" required>

                    <label for="repeticoes${i}">Número de Repetições:</label>
                    <input type="number" id="repeticoes${i}" name="repeticoes${i}" min="1" placeholder="Ex: 10" required>
                `;
                camposExercicios.appendChild(exercicioDiv);
            }
        });
    }

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

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
    }
});