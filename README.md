# Automação Web — PGTAS

Este repositório contém o projeto desenvolvido na pós-graduação PGTAS para a disciplina de **Automação Web**. O objetivo é praticar testes automatizados na camada de interface usando Cypress no site de demonstração [Automation Exercise](https://automationexercise.com/).

## Sobre o projeto

Os testes ficam em `cypress/e2e/automationExercise/automationExercise.cy.js` e cobrem cenários de cadastro, login, logout, validação de credenciais, produtos, busca, inscrição na newsletter e finalização de pedidos.

Os comandos reutilizáveis do Cypress estão separados por área em `cypress/support`:

- `login`: login e cadastro de usuários;
- `account`: exclusão da conta criada durante o teste;
- `cart`: inclusão de produtos no carrinho;
- `checkout`: preenchimento dos dados de pagamento.

Os dados usados pelos comandos ficam em `cypress/fixtures`, organizados por área. O endereço do site testado está configurado como `baseUrl` em `cypress.config.js`.

## Requisitos

- Node.js e npm instalados;
- acesso à internet para instalar as dependências e acessar o site testado.

## Instalação

Na pasta do projeto, instale as dependências:

```bash
npm install
```

## Executar os testes

Para abrir a interface do Cypress e escolher os testes:

```bash
npx cypress open
```

Para executar os testes em modo headless pelo terminal:

```bash
npx cypress run
```

## Integração contínua

O workflow em `.github/workflows/cypress.yml` executa os testes em eventos de `push` e `pull_request`, e também pode ser iniciado manualmente pelo GitHub Actions. Ele instala o Node.js e as dependências e então executa `npx cypress run`.
