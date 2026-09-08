/* CADASTRO: TIPOS DE VEÍCULO. Cada tipo tem CAPACIDADE de passageiros e CUSTO POR KM (R$).
   O veículo escolhe um tipo; capacidade limita passageiros na solicitação; custo/km é usado
   no relatório de faturamento da cooperativa. Espelho em tipos-veiculo.json (backend). */
window.DB_TIPOS_VEICULO = [
  { "id": "ut3",  "nome": "Utilitário 3", "capacidade": 3,  "custoKm": 2.80 },
  { "id": "ut4",  "nome": "Utilitário 4", "capacidade": 4,  "custoKm": 3.10 },
  { "id": "van11","nome": "Van 11",       "capacidade": 11, "custoKm": 4.50 },
  { "id": "van18","nome": "Van 18",       "capacidade": 18, "custoKm": 5.90 }
];
