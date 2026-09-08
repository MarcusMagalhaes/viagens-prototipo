# Aperam.Viagens — Sistema de Viagens Corporativas

Plataforma única com perfis (Solicitante, Aprovador, Cooperativa, Admin). Solicitação de viagem com mapa, roteamento por raio de atuação das cooperativas e workflow de aprovação por estação. Referência de arquitetura: **FitCultural**.

## Pastas

| Pasta | O que é |
|---|---|
| `viagens-prototipo.html` | **Protótipo clicável** para apresentação (não apagar). Leaflet+OSM, Photon, OSRM; cadastros em `data/`. |
| `data/` | Cadastros JSON do protótipo (cooperativas com raio, estações, workflow, parâmetros). |
| `BACK/` | Backend **.NET 9 Clean Architecture**, persistência em **arquivos JSON** (`db-json/`, sem banco/DBA). Ver `BACK/README.md`. |
| `FRONT/` | Frontend **React 19 + Vite + MUI + RTK Query**. Ver `FRONT/README.md`. |

## Fluxo do sistema

1. **Solicitante** escolhe embarque/destino (autocomplete + mapa). O embarque cai (ou não) no **raio** de uma cooperativa.
2. **Roteamento**: cooperativa de menor **prioridade** que cobre o ponto é escolhida; se várias cobrem, o solicitante pode trocar. Nenhuma → verificação interna.
3. **Workflow** de aprovação é gerado pela **estação** do solicitante (níveis, regra por km).
4. **Aprovadores** decidem em cadeia; aprovada → visível para a **cooperativa**, que aloca veículo/motorista.

## Decisões travadas

- Login: **plataforma única com perfis** (não portal separado).
- Desempate de cooperativas: **prioridade única** (validada no serviço).
- Persistência: **JSON em arquivos** (protótipo, sem banco/DBA); trocável por EF/Postgres ou SQLite depois.
- Mapa/geocoder: **Leaflet/OSM + Photon + OSRM** no protótipo; **Google Maps** como opção de produção.
