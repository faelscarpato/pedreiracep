// Supondo que você tenha um arquivo "ceps.json" com os dados dos CEPs
    // Exemplo: { "Rua das Flores": "12345-678", "Avenida Brasil": "87654-321", ... }
   // Abrir pop-up de busca
function abrirPopup() {
  $('#popupBusca').modal('show');
}

// Buscar CEP
async function buscarCEP() {
  const termoBusca = document.getElementById('buscaRua').value.toLowerCase();
  const resposta = await fetch('Ceps.json');
  const ceps = await resposta.json();
  const resultadoDiv = document.getElementById('resultadoBusca');
  resultadoDiv.innerHTML = '';

  for (const rua in ceps) {
    if (rua.toLowerCase().includes(termoBusca) || ceps[rua].includes(termoBusca)) {
      resultadoDiv.innerHTML += `<div>${rua}: ${ceps[rua]}</div>`;
    }
  }
}

function limparBusca() {
  document.getElementById('buscaRua').value = '';
  document.getElementById('resultadoBusca').innerHTML = '';
}

