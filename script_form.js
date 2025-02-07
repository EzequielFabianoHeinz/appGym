document.addEventListener("DOMContentLoaded", function () {
    const camposExercicios = document.getElementById("camposExercicios");

    // Evento para o botão "calc"
    document.getElementById("calc").addEventListener("click", function () {
        const quantExer = parseInt(document.getElementById("quantExer").value, 10);

         // Limpa o conteúdo anterior
        camposExercicios.innerHTML = "";

        // Gera os campos para cada exercício
        for (let i = 1; i <= quantExer; i++) {
            const exercicioDiv = document.createElement("div");
            exercicioDiv.innerHTML = `
                <label for="nomeExercicio${i}" class="nome-exercicio">Nome do Exercício:</label>
                <input type="text" id="nomeExercicio${i}" name="nomeExercicio${i}" placeholder="Ex: Supino" required>

                <label for="series${i}" class="label-series">Número de Séries:</label>
                <input type="number" id="series${i}" name="series${i}" min="1" placeholder="Ex: 4" required>

                <label for="repeticoes${i}" class="label-repeticoes">Número de Repetições:</label>
                <input type="number" id="repeticoes${i}" name="repeticoes${i}" min="1" placeholder="Ex: 10" required>

                <!-- Contêiner para as séries deste exercício -->
                <div id="seriescontainer${i}" class="series-container"></div>
            `;
            camposExercicios.appendChild(exercicioDiv);
        }

        showPopup(`Você escolheu a quantidade: ${quantExer}`);
    });

    // Evento para o envio do formulário
    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault();

        const quantExer = parseInt(document.getElementById("quantExer").value, 10);

        // Processa cada exercício
        for (let i = 1; i <= quantExer; i++) {
            const nome = document.getElementById(`nomeExercicio${i}`).value;
            const series = parseInt(document.getElementById(`series${i}`).value, 10);
            const repeticoes = document.getElementById(`repeticoes${i}`).value;

            // Seleciona o contêiner de séries para este exercício
            const seriescontainer = document.getElementById(`seriescontainer${i}`);

            // Limpa o conteúdo anterior
            seriescontainer.innerHTML = "";

            // Adiciona o título do exercício
            const titulo = document.createElement("h4");
            titulo.textContent = `Exercício: ${nome} - ${repeticoes} repetições`;
            seriescontainer.appendChild(titulo);

            // Gera as séries com checkboxes
            for (let j = 1; j <= series; j++) {
                const linha = document.createElement("div");
                linha.innerHTML = `Série ${j}: <input type="checkbox" id="serie${i}_${j}">`;
                linha.style.marginBottom = "8px";
                seriescontainer.appendChild(linha);
            }

            seriescontainer.style.visibility = "visible"; // Mostra o contêiner
            seriescontainer.style.opacity = "1"; // Torna o contêiner opaco
        }
    });
});