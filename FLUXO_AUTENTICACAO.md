# Fluxo de Autenticação

Este arquivo resume o fluxo principal de autenticação do projeto.

## Diagrama Mermaid

```mermaid
flowchart TD
    A[App.tsx<br/>Inicializa localStorage e providers]
    B[AppContextProvider<br/>Lê login inicial do navegador]
    C[Home.tsx<br/>Captura email e senha]
    D[login.tsx<br/>Valida credenciais]
    E[api.ts<br/>Devolve conta mockada]
    F[changeLocalStorage<br/>Salva login true]
    G[routes.tsx<br/>Protege /conta/:id]
    H[Conta.tsx<br/>Carrega dados da conta]
    I[Header.tsx<br/>Logout]
    J[changeLocalStorage<br/>Salva login false]

    A --> B
    B --> G
    C --> D
    D --> E
    D -->|credenciais válidas| F
    F --> G
    G -->|isLoggedIn = true| H
    H --> I
    I --> J
    J --> G
```

## Leitura didática do fluxo

1. `App.tsx` garante a chave principal do `localStorage`.
2. `AppContextProvider` lê o login salvo e monta o estado global.
3. `Home.tsx` coleta email e senha.
4. `login.tsx` compara as credenciais com a resposta mockada de `api.ts`.
5. Em caso de sucesso, o login é salvo no contexto e no `localStorage`.
6. `routes.tsx` libera a rota `/conta/:id`.
7. `Conta.tsx` busca os dados da conta e mostra saldo e data.
8. `Header.tsx` executa logout, limpa o estado persistido e volta para a Home.

## Credenciais de teste

- Email: `test@teste.com`
- Senha: `123456`
