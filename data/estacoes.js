/* CADASTRO DE ESTAÇÕES / LOCALIDADES DE ORIGEM (pontos de embarque padrão).
   A estação vincula o solicitante ao workflow de aprovação (ver aprovadores.js).
   Espelho em estacoes.json. */
window.DB_ESTACOES = [
  { "id": "est-timoteo",   "nome": "Portaria Principal — Aperam", "localidade": "Timóteo",            "coord": [-19.5782, -42.6353], "ativo": true },
  { "id": "est-fabri",     "nome": "Administração Central",        "localidade": "Coronel Fabriciano", "coord": [-19.5180, -42.6290], "ativo": true },
  { "id": "est-capelinha", "nome": "Escritório Capelinha",         "localidade": "Capelinha",          "coord": [-17.6912, -42.5203], "ativo": true },
  { "id": "est-itabirito", "nome": "Unidade Serra Azul",           "localidade": "Itabirito",          "coord": [-20.2530, -43.8010], "ativo": false }
];
