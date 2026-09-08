/* CADASTRO DE FORNECEDORES DE TRANSPORTE — editável (array JSON).
   (A reunião pediu trocar "cooperativa" por "fornecedor": as empresas não são cooperativas.)
   Cada fornecedor atende um RAIO (km) a partir de um centro (a base/ponto de partida) no mapa.
   O roteamento é pela ORIGEM (embarque): se o embarque cair no raio, direciona ao fornecedor.
   Vários fornecedores podem cobrir o mesmo ponto (ex.: 2 em BH) — o SOLICITANTE escolhe.
   custos: TARIFAS CONTRATADAS (unitárias) por tipo de veículo. Variam por fornecedor.
     kmViagem   = R$/km rodado na viagem
     kmInterno  = R$/km de trânsito interno (na base/cidade destino; pode diferir do de viagem)
     horaParada = R$/hora parada (motorista à disposição)
   Diária, hospedagem, alimentação e franquia NÃO são tarifa contratada — são valores (R$)
   gastos, lançados pelo fornecedor no FECHAMENTO de cada viagem finalizada.
   Espelho em cooperativas.json (para o backend). */
window.DB_COOPERATIVAS = [
  {
    "id": "rc",
    "nome": "RC Transportes",
    "cnpj": "12.345.678/0001-90",
    "email": "op@rctransportes.com.br",
    "centro": [-19.4683, -42.5369],
    "cidadeBase": "Vale do Aço (Ipatinga)",
    "raioKm": 35,
    "prioridade": 1,
    "cor": "#64317B",
    "ativo": true,
    "custos": {
      "ut3":  { "kmViagem": 2.80, "kmInterno": 3.20, "horaParada": 35 },
      "ut4":  { "kmViagem": 3.10, "kmInterno": 3.60, "horaParada": 40 },
      "van11":{ "kmViagem": 4.50, "kmInterno": 5.00, "horaParada": 55 },
      "van18":{ "kmViagem": 5.90, "kmInterno": 6.40, "horaParada": 70 }
    }
  },
  {
    "id": "royal",
    "nome": "Royal",
    "cnpj": "98.765.432/0001-10",
    "email": "central@royaltransportes.com.br",
    "centro": [-17.6912, -42.5203],
    "cidadeBase": "Capelinha",
    "raioKm": 40,
    "prioridade": 2,
    "cor": "#E05206",
    "ativo": true,
    "custos": {
      "ut3":  { "kmViagem": 3.10, "kmInterno": 4.20, "horaParada": 38 },
      "ut4":  { "kmViagem": 3.40, "kmInterno": 4.60, "horaParada": 42 },
      "van11":{ "kmViagem": 4.90, "kmInterno": 6.10, "horaParada": 58 },
      "van18":{ "kmViagem": 6.30, "kmInterno": 7.60, "horaParada": 74 }
    }
  },
  {
    "id": "vitoria",
    "nome": "Vitória Táxi",
    "cnpj": "45.678.912/0001-33",
    "email": "reservas@vitoriataxi.com.br",
    "centro": [-19.9191, -43.9386],
    "cidadeBase": "Belo Horizonte",
    "raioKm": 45,
    "prioridade": 3,
    "cor": "#2f7d5a",
    "ativo": true,
    "custos": {
      "ut3":  { "kmViagem": 3.30, "kmInterno": 3.30, "horaParada": 45 },
      "ut4":  { "kmViagem": 3.60, "kmInterno": 3.60, "horaParada": 48 },
      "van11":{ "kmViagem": 5.10, "kmInterno": 5.10, "horaParada": 62 },
      "van18":{ "kmViagem": 6.60, "kmInterno": 6.60, "horaParada": 78 }
    }
  },
  {
    "id": "exclusive",
    "nome": "Exclusive",
    "cnpj": "33.222.111/0001-44",
    "email": "atendimento@exclusive.com.br",
    "centro": [-19.9250, -43.9350],
    "cidadeBase": "Belo Horizonte",
    "raioKm": 45,
    "prioridade": 4,
    "cor": "#1d6fb8",
    "ativo": true,
    "custos": {
      "ut3":  { "kmViagem": 3.50, "kmInterno": 3.50, "horaParada": 50 },
      "ut4":  { "kmViagem": 3.80, "kmInterno": 3.80, "horaParada": 53 },
      "van11":{ "kmViagem": 5.40, "kmInterno": 5.40, "horaParada": 66 },
      "van18":{ "kmViagem": 6.90, "kmInterno": 6.90, "horaParada": 82 }
    }
  }
];
