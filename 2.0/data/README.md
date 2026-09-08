# Cadastros (JSON) — protótipo Viagens

Cada cadastro tem **dois arquivos com o mesmo conteúdo**:

| `.js` (usado pelo protótipo) | `.json` (espelho p/ backend) | O que é |
|---|---|---|
| `cooperativas.js` | `cooperativas.json` | Cooperativas + **raio de atuação** (km) |
| `estacoes.js` | `estacoes.json` | Estações/localidades de origem |
| `aprovadores.js` | `aprovadores.json` | Workflow de aprovação por estação |
| `parametros.js` | `parametros.json` | Parâmetros globais |

## Por que `.js` E `.json`?

Aberto por **duplo-clique** (`file://`), o Chrome bloqueia `fetch()` de `.json` local (CORS).
Os `.js` contornam isso atribuindo o mesmo array a uma variável global (`window.DB_*`) via `<script>`.
**Edite o `.js`** para ver a mudança no protótipo. O `.json` é a fonte real para o backend .NET.

Para trabalhar só com `.json` (fetch), sirva a pasta por HTTP:

```bash
cd C:\_Trabalho\Projetos\Viagens
python -m http.server 8080
# abre http://localhost:8080/viagens-prototipo.html
```

## Roteamento por raio (cooperativas)

- Cada cooperativa tem `centro: [lat, lon]` e `raioKm`.
- Ao definir o **embarque**, o sistema calcula a distância (Haversine) até cada centro.
- Se o ponto estiver **dentro do raio** → direciona à cooperativa (menor `prioridade` desempata).
- Se **nenhuma** cobrir → mensagem de "sem cooperativa, verificar no sistema" (`parametros.mensagemSemCooperativa`).
