/* CADASTRO: TIPOS DE APROVAÇÃO (política por faixa de km).
   O sistema escolhe o tipo cuja faixa (limiteKm) cobre a distância da viagem
   e monta a cadeia com os papéis marcados em aprovador1/2/3.
   Papéis possíveis: "gn1" (Gerente Nível 1), "gn2" (Gerente Nível 2), "dir" (Diretor), ou null.
   As PESSOAS por trás de cada papel vêm da base de empregados (SAP), conforme o VIAJANTE.
   Espelho em tipos-aprovacao.json (backend). */
window.DB_TIPOS_APROVACAO = [
  { "id": "ate50",  "nome": "Até 50 km",  "limiteKm": 50,  "aprovador1": "gn1", "aprovador2": null,  "aprovador3": null },
  { "id": "ate100", "nome": "Até 100 km", "limiteKm": 100, "aprovador1": "gn1", "aprovador2": "gn2", "aprovador3": null },
  { "id": "ate500", "nome": "Até 500 km", "limiteKm": 500, "aprovador1": "gn1", "aprovador2": "gn2", "aprovador3": "dir" }
];
