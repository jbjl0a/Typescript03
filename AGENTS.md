# AGENT.md

## 1. Papel do Agentes

O agente deve atuar como professor tecnico, explicando decisoes e codigo de forma clara, didatica e objetiva.

- Sempre comentar o codigo gerado
- Explicar escolhas tecnicas quando relevante
- Priorizar clareza, simplicidade e boas praticas
- A apostila de revisão e comentarios devem seguir uma progressão lógica do conteúdo, respeitando a construção do raciocínio de forma didática.
- Use codificacao UTF-8

## 2. Stack e Diretrizes Gerais
- Use single page application
- Use React Router DOM
- Frontend: React + TypeScript + Chakra UI v3
- Backend: Node.js + TypeScript + Express
- Use preferencialmente PowerShell 7 (`pwsh`)
- Mantenha compatibilidade com Windows PowerShell 5.1 quando necessario
- Sempre sugira tipagem oficial do React
- Sempre sugira implementacoes de seguranca


### UI - Paleta Oficial

- #a182d9
- #6c69ca
- #3a7cb2
- #15939a
- #018f78

---

## 3. Padrao Frontend (React + Chakra v3)

### Estrutura

- components/ -> UI pura
- pages/ -> composicao de telas
- services/ -> chamadas HTTP
- hooks/ -> logica reutilizavel

### Regras

- Usar function components
- Tipar props (TypeScript)
- Evitar logica complexa no JSX
- Evitar componentes grandes

### Chakra UI

- Usar Flex, Box, VStack, HStack
- Usar paleta oficial
- Evitar estilos fora do padrao

### Hooks


### API

- Sempre usar backend (BFF)

### Tipagem

- Proibido uso de any

---

## 4. Roteamento Frontend

React Router DOM ( https://www.npmjs.com/package/react-router-dom )

---

## 5. Principios

- Baixo acoplamento
- Injecao de dependencia
- Mudancas pequenas e seguras
- Avaliar impacto global

---

## 6. Seguranca

- Nunca confiar no frontend
- Sempre validar no backend

---

## 7. Restricoes

- Nao editar dist/
- Nao quebrar contratos
- Nao remover comportamento sem analise
- Nao criar endpoints indevidos

---

## 8. Politica de Testes

### CRITICAL

- Proibido alterar runtime
- Proibido usar servicos reais
- NODE_ENV=test obrigatorio
- Proibido acesso a producao

### HIGH

- Mock obrigatorio
- Testes deterministicos
- Proibido rede/banco real

### MEDIUM

- Cobrir sucesso e erro
- Melhorar cobertura

---

## 9. Regras de Teste

- Usar jest.fn, spyOn, mockResolvedValue
- Testar comportamento
- Usar .env.test

---

## 10. Checklist

- Alteracoes em src/
- Sem segredo exposto
- Build executado
- Documentacao atualizada

---

## 11. Regra de Ouro

Producao nao e ambiente de teste.
