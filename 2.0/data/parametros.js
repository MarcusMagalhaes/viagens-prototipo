/* PARÂMETROS GLOBAIS. Espelho em parametros.json. */
window.DB_PARAMETROS = {
  "provedorMapa": "leaflet-osm",
  "motorRota": "osrm-publico",
  "geocoder": "photon",
  "biasMapa": [-19.51, -42.60],
  "mensagemSemFornecedor": "Nenhum fornecedor atende este embarque. Solicitação encaminhada para verificação interna.",
  /* Alerta de aprovação pendente (reunião 03/09): a viagem NÃO segue sem aprovação.
     O sistema alerta solicitante + aprovador quando falta pouco tempo para a viagem. */
  "alertaInicioHoras": 4,     /* começa a alertar quando faltam X horas para o embarque */
  "alertaIntervaloHoras": 1,  /* repete o alerta a cada Y horas até aprovar/reprovar */
  "emailNotificacao": "logistica-viagens@aperam"
};
