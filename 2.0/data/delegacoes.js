/* DELEGAÇÕES MANUAIS DE APROVAÇÃO (reunião 03/09).
   Além da substituição que vem do SAP (férias etc.), a área precisa poder DELEGAR
   manualmente a aprovação de uma pessoa para outra, por um período, mediante e-mail.
   REGRA: a delegação manual é MANDATÓRIA sobre a substituição do SAP (ela vence).
   No protótipo a delegação é por NÍVEL/papel de aprovação (2 = Gerente Executivo, 3 = Diretor).
   Espelho em delegacoes.json (backend). */
window.DB_DELEGACOES = [
  {
    "id": "del1",
    "nivel": 2,
    "deQuem": "Bruno Almeida (Gerente Executivo)",
    "paraQuem": "Marina Coelho",
    "inicio": "2026-09-01",
    "fim": "2026-11-30",
    "motivo": "Gerente em campo — e-mail formalizado 28/08",
    "ativo": true
  }
];
