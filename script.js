// Supondo que você tenha um arquivo "ceps.json" com os dados dos CEPs
    // Exemplo: { "Rua das Flores": "12345-678", "Avenida Brasil": "87654-321", ... }
    async function buscarCEP() {
        const termoBusca = document.getElementById('busca').value.toLowerCase();
        const resposta = await fetch('Ceps.json');
        const ceps = await resposta.json();
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = '';
  
        for (const rua in ceps) {
          if (rua.toLowerCase().includes(termoBusca) || ceps[rua].includes(termoBusca)) {
            resultadoDiv.innerHTML += `<div>${rua}: ${ceps[rua]}</div>`;
          }
        }
      }