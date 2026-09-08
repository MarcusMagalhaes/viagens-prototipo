/* CADASTRO DE WORKFLOW DE APROVAÇÃO POR ESTAÇÃO.
   niveis = ordem da cadeia. regraKm opcional: nível só exigido acima do km.
   O sistema gera o fluxo a partir da estação do solicitante. Espelho em aprovadores.json. */
window.DB_APROVADORES = [
  {
    "estacaoId": "est-timoteo", "estacao": "Timóteo",
    "niveis": [
      { "ordem": 1, "nome": "Marina Coelho", "cargo": "Gestora imediata" },
      { "ordem": 2, "nome": "João Braga",    "cargo": "Gerência de Logística", "regraKm": 150 }
    ]
  },
  {
    "estacaoId": "est-capelinha", "estacao": "Capelinha",
    "niveis": [
      { "ordem": 1, "nome": "Beatriz Lopes", "cargo": "Coordenação" }
    ]
  }
];
