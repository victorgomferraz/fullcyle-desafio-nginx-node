# Desafio Full Cycle - Nginx com Node.js

## Descrição

Projeto deve possuir:
- Banco de dados MySQL;
- Backend em Node.js;
- Nginx como proxy reverso;

Ao acessar o nginx, ele deve apontar para o backend e deve ser exibido a página do frontend escrito
``` <h1>Full Cycle Rocks!</h1>``` e uma lista de nomes aleatorios que são inseridos no banco de dados toda vez que 
ocorre um acesso na página.

## Execução

### Desenvolvimento

O Ambiente de desenvolvimento as portas estão mapeadas, é possível acessar qualquer serviço sem passar pelo nginx,
o backend está configurado para livereload, ou seja, qualquer alteração no código é refletida automaticamente, e algumas imagens são menos 
otimizadas para facilitar o desenvolvimento.

```bash
$ docker-compose -f docker-compose.dev.yml up -d
```

### Release

Ambiente pedido pelo desafio, só podemos acessar a página através da porta 8080 pelo nginx.
As imagens são mais otimizadas e o backend não possui livereload.

```bash
$ docker-compose up -d
```

### Comum
Em todos os ambientes, é possível acessar o nginx pelo endereço http://localhost:8080