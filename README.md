# Dio Bank

SPA acadêmica desenvolvida com React + TypeScript para demonstrar login mockado, roteamento, contexto global, persistência em `localStorage` e testes unitários.

## Status do projeto

Projeto finalizado para entrega da disciplina, com documentação revisada e fluxo principal validado por build e testes.

## Objetivo

O sistema simula um pequeno internet banking didático:

- a pessoa usuária informa email e senha
- o frontend valida as credenciais contra uma API mockada
- o estado de autenticação é compartilhado com Context API
- o login fica persistido em `localStorage`
- a rota da conta só pode ser acessada quando a autenticação está ativa

## Funcionalidades implementadas

- formulário de login com validação de email e senha
- rota protegida para a conta
- exibição de saldo e data de acesso
- logout com limpeza do estado persistido
- navegação SPA com React Router DOM
- testes unitários para serviços

## Credenciais mockadas

Use os dados abaixo para entrar na aplicação:

- Email: `test@teste.com`
- Senha: `123456`

## Stack utilizada

- React 18
- TypeScript 4
- Chakra UI `2.2.8`
- React Router DOM `6`
- Jest + Testing Library
- Create React App

## Estrutura do projeto

```text
src/
  components/  -> componentes reutilizáveis de interface e contexto global
  pages/       -> composição das telas
  services/    -> regras de negócio e persistência local
  api.ts       -> API mockada
  routes.tsx   -> configuração das rotas
```

## Rotas da aplicação

- `/` -> tela de login
- `/conta/:id` -> tela protegida com dados da conta
- `/infoconta` -> tela auxiliar de navegação usada no curso

## Como executar

No Windows, a recomendação do projeto é usar `pwsh` quando disponível.

```powershell
npm install
npm start
```

A aplicação será iniciada em modo de desenvolvimento pelo `react-scripts`.

## Scripts disponíveis

```powershell
npm start
npm test -- --watchAll=false
npm run build
```

## Testes e validação

Os testes cobrem:

- validação de login
- persistência no `localStorage`
- funções simples usadas no conteúdo do curso

Antes da entrega, também foi executado:

- `npm test -- --watchAll=false`
- `npm run build`

## Documentação complementar

- [REVISAO_CURSO.md](./REVISAO_CURSO.md) -> apostila de revisão em ordem didática
- [FLUXO_AUTENTICACAO.md](./FLUXO_AUTENTICACAO.md) -> diagrama e leitura do fluxo de login

## Observações de segurança

Este projeto é didático e usa autenticação apenas no frontend. Em produção, o correto seria:

- validar credenciais no backend ou em um BFF
- nunca confiar no `localStorage` como fonte de verdade de autenticação
- usar sessão ou token com proteção adequada, preferencialmente `HttpOnly`
- aplicar validação de entrada, rate limiting e proteção de rotas no servidor

## Melhorias futuras

- migrar a autenticação mockada para backend real
- adicionar feedback visual de erro sem uso de `alert`
- cobrir componentes com testes de interface
- alinhar a base visual para um tema Chakra centralizado
