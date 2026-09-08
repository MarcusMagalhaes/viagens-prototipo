/* CADASTRO: TIPOS DE VEÍCULO. Cada tipo tem só a CAPACIDADE de passageiros.
   O veículo escolhe um tipo; a capacidade limita os passageiros na solicitação.
   O custo NÃO fica aqui: as tarifas são CONTRATADAS por FORNECEDOR (km viagem, km
   interno, hora parada) no cadastro de fornecedores. Espelho em tipos-veiculo.json. */
window.DB_TIPOS_VEICULO = [
  { "id": "ut3",  "nome": "Utilitário 3", "capacidade": 3  },
  { "id": "ut4",  "nome": "Utilitário 4", "capacidade": 4  },
  { "id": "van11","nome": "Van 11",       "capacidade": 11 },
  { "id": "van18","nome": "Van 18",       "capacidade": 18 }
];
