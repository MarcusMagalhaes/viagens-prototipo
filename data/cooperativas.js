/* CADASTRO DE COOPERATIVAS — editável (array JSON).
   Cada cooperativa atende um RAIO (km) a partir de um centro no mapa.
   Se o EMBARQUE cair dentro do raio, a viagem é direcionada a ela.
   Se nenhuma cooperativa cobrir o ponto -> viagem vai para verificação interna.
   Espelho em cooperativas.json (para o backend). */
window.DB_COOPERATIVAS = [
  {
    "id": "cootramon",
    "nome": "COOTRAMON",
    "cnpj": "12.345.678/0001-90",
    "email": "op@cootramon.coop.br",
    "centro": [
      -19.5782,
      -42.6353
    ],
    "cidadeBase": "Timóteo",
    "raioKm": 25,
    "prioridade": 1,
    "cor": "#64317B",
    "ativo": true
  },
  {
    "id": "transvale",
    "nome": "TRANSVALE",
    "cnpj": "98.765.432/0001-10",
    "email": "central@transvale.coop.br",
    "centro": [
      -17.6912,
      -42.5203
    ],
    "cidadeBase": "Capelinha",
    "raioKm": 40,
    "prioridade": 2,
    "cor": "#E05206",
    "ativo": true
  },
  {
    "id": "rotacentral",
    "nome": "ROTA CENTRAL",
    "cnpj": "45.678.912/0001-33",
    "email": "contato@rotacentral.com",
    "centro": [
      -20.253,
      -43.801
    ],
    "cidadeBase": "Itabirito",
    "raioKm": 30,
    "prioridade": 3,
    "cor": "#2f7d5a",
    "ativo": true
  }
];
