# Apostila de Revisão do Curso

Status deste material: finalizado para entrega.

Esta apostila foi organizada para seguir a mesma progressão lógica do projeto. A ideia é estudar do começo ao fim, entendendo como cada peça prepara a próxima.

## Objetivo da apostila

- revisar os conceitos vistos no curso
- relacionar teoria com arquivos reais do projeto
- registrar o fluxo completo da aplicação
- servir como guia de estudo e apresentação

## Arquivos-base desta revisão

- `src/index.tsx`
- `src/App.tsx`
- `src/routes.tsx`
- `src/api.ts`
- `src/components/AppContext.tsx`
- `src/components/Header.tsx`
- `src/components/Layout.tsx`
- `src/components/Card.tsx`
- `src/components/CardInfo.tsx`
- `src/components/DButton.tsx`
- `src/pages/Home.tsx`
- `src/pages/Conta.tsx`
- `src/pages/ContaInfo.tsx`
- `src/services/login.tsx`
- `src/services/storage.tsx`
- `src/services/soma.tsx`

## Índice

1. [Visão geral do projeto](#visão-geral-do-projeto)
2. [Estrutura e responsabilidade das pastas](#estrutura-e-responsabilidade-das-pastas)
3. [Etapa 1 - Entrada da aplicação](#etapa-1---entrada-da-aplicação)
4. [Etapa 2 - Componentes e composição](#etapa-2---componentes-e-composição)
5. [Etapa 3 - Props, children e tipagem](#etapa-3---props-children-e-tipagem)
6. [Etapa 4 - Estado local com useState](#etapa-4---estado-local-com-usestate)
7. [Etapa 5 - Inputs controlados e eventos](#etapa-5---inputs-controlados-e-eventos)
8. [Etapa 6 - Services e async/await](#etapa-6---services-e-asyncawait)
9. [Etapa 7 - useEffect e efeitos colaterais](#etapa-7---useeffect-e-efeitos-colaterais)
10. [Etapa 8 - Rotas e navegação](#etapa-8---rotas-e-navegação)
11. [Etapa 9 - Context API e estado global](#etapa-9---context-api-e-estado-global)
12. [Etapa 10 - Persistência com localStorage](#etapa-10---persistência-com-localstorage)
13. [Etapa 11 - Fluxo completo de login e logout](#etapa-11---fluxo-completo-de-login-e-logout)
14. [Etapa 12 - Testes unitários](#etapa-12---testes-unitários)
15. [Etapa 13 - Pontos de segurança](#etapa-13---pontos-de-segurança)
16. [Erros comuns e confusões frequentes](#erros-comuns-e-confusões-frequentes)
17. [Roteiro rápido para apresentação](#roteiro-rápido-para-apresentação)
18. [Checklist final de revisão](#checklist-final-de-revisão)

## Visão geral do projeto

Este projeto é uma SPA feita com React + TypeScript.

Problema resolvido pela aplicação:

- a pessoa usuária acessa a Home
- informa email e senha
- o sistema compara as credenciais com uma API mockada
- quando a validação passa, o contexto marca o login como ativo
- a rota `/conta/:id` passa a ficar acessível
- o estado continua salvo no navegador até o logout

Resumo do raciocínio técnico:

- componentes montam a interface
- hooks controlam estado e comportamento
- services concentram regras e persistência
- contexto compartilha autenticação
- rotas definem as telas

## Estrutura e responsabilidade das pastas

### `components/`

Contém componentes reutilizáveis e a configuração do contexto global.

Exemplos:

- `Card.tsx` -> contêiner visual
- `DButton.tsx` -> botão reutilizável
- `Header.tsx` -> cabeçalho com logout
- `AppContext.tsx` -> contexto de autenticação

### `pages/`

Contém a composição das telas da aplicação.

Exemplos:

- `Home.tsx` -> tela de login
- `Conta.tsx` -> tela protegida com dados da conta
- `ContaInfo.tsx` -> página auxiliar de navegação

### `services/`

Contém funções reutilizáveis fora da camada visual.

Exemplos:

- `login.tsx` -> valida credenciais
- `storage.tsx` -> encapsula o `localStorage`
- `soma.tsx` -> funções simples usadas nos testes do curso

## Etapa 1 - Entrada da aplicação

Arquivos principais:

- `src/index.tsx`
- `src/App.tsx`

### O que acontece primeiro

Em `index.tsx`, o React encontra a `div` raiz e renderiza o componente `App`.

Em `App.tsx`, a aplicação é envolvida por:

- `BrowserRouter`
- `AppContextProvider`
- `ChakraProvider`
- `Layout`
- `MainRoutes`

### Por que essa ordem importa

- `BrowserRouter` habilita as rotas
- `AppContextProvider` disponibiliza o login global
- `ChakraProvider` libera os componentes visuais do Chakra
- `Layout` mantém o cabeçalho comum
- `MainRoutes` decide qual página será exibida

### Observação importante

O `App.tsx` também inicializa a chave principal do `localStorage` quando ela ainda não existe. Isso evita erro de leitura no primeiro acesso.

## Etapa 2 - Componentes e composição

Arquivos principais:

- `src/components/Card.tsx`
- `src/components/CardInfo.tsx`
- `src/components/DButton.tsx`
- `src/components/Header.tsx`
- `src/components/Layout.tsx`

### O que é um componente

No React, componente é uma função que retorna JSX.

Exemplos do projeto:

- `Card` encapsula estilo visual
- `DButton` encapsula ação de botão
- `Header` encapsula identidade da aplicação e logout
- `Layout` reaproveita o `Header` em todas as telas

### O que é composição

Composição é montar telas maiores a partir de partes menores.

Exemplo:

- `Layout` usa `Header`
- `Home` usa `Card` e `DButton`
- `Conta` usa `CardInfo`

## Etapa 3 - Props, children e tipagem

Arquivos principais:

- `src/components/Card.tsx`
- `src/components/Layout.tsx`
- `src/components/DButton.tsx`
- `src/components/CardInfo.tsx`

### O que são props

Props são dados passados de um componente para outro.

Exemplo:

```tsx
<DButton onClick={() => validateUser(email, password)} isDisabled={!email || !password} />
```

Nesse caso:

- `onClick` define a ação do botão
- `isDisabled` define quando ele deve ficar desabilitado

### O que é `children`

`children` representa o conteúdo interno enviado para um componente.

Exemplo:

```tsx
<Card>
  <h1>Faça o login</h1>
</Card>
```

### O que a tipagem resolve aqui

O TypeScript descreve o formato dos dados esperados:

- `ReactNode` tipa `children`
- interfaces tipam props
- funções recebem parâmetros tipados

## Etapa 4 - Estado local com useState

Arquivos principais:

- `src/pages/Home.tsx`
- `src/pages/Conta.tsx`
- `src/components/AppContext.tsx`

### O que é estado

Estado é um valor que o componente guarda e pode alterar ao longo do tempo.

Exemplo em `Home.tsx`:

```tsx
const [email, setEmail] = useState<string>('')
const [password, setPassword] = useState<string>('')
```

Leitura:

- `email` e `password` guardam os campos do formulário
- `setEmail` e `setPassword` atualizam esses valores

Exemplo em `Conta.tsx`:

```tsx
const [userData, setUserData] = useState<AccountData | null>(null)
```

Exemplo em `AppContext.tsx`:

```tsx
const [isLoggedIn, setIsLoggedIn] = useState<boolean>(getInitialLoginState)
```

Aqui, o estado inicial já é lido do navegador.

## Etapa 5 - Inputs controlados e eventos

Arquivo principal:

- `src/pages/Home.tsx`

### O que é input controlado

É quando o valor exibido no campo vem do estado do React.

Exemplo:

```tsx
<Input value={email} onChange={(event) => setEmail(event.target.value)} />
<Input value={password} onChange={(event) => setPassword(event.target.value)} />
```

### O que o botão faz

Quando a pessoa clica em `Entrar`, o componente chama:

```tsx
validateUser(email, password)
```

Fluxo:

1. o React já conhece os valores digitados
2. o clique dispara a validação
3. em caso de sucesso, o login é salvo no contexto e no `localStorage`

## Etapa 6 - Services e async/await

Arquivos principais:

- `src/services/login.tsx`
- `src/services/storage.tsx`
- `src/api.ts`

### Por que existe a pasta `services`

Ela separa regra de negócio da camada visual.

### Responsabilidades

- `login.tsx` valida email e senha
- `storage.tsx` centraliza leitura e escrita em `localStorage`
- `api.ts` simula resposta assíncrona com dados mockados

### O que `async/await` faz neste projeto

Exemplo:

```tsx
const loggedIn = await login(email, password)
```

Leitura:

- `login(...)` depende de dados assíncronos
- `await` espera a resposta antes de continuar o fluxo

## Etapa 7 - useEffect e efeitos colaterais

Arquivos principais:

- `src/App.tsx`
- `src/pages/Conta.tsx`

### O que é efeito colateral

É algo que acontece além da simples renderização da interface.

Exemplos neste projeto:

- inicializar o `localStorage`
- buscar os dados da conta mockada

### Exemplo em `App.tsx`

```tsx
useEffect(() => {
  if (!getAllLocalStorage()) {
    createLocalStorage()
  }
}, [])
```

### Exemplo em `Conta.tsx`

```tsx
useEffect(() => {
  const getData = async () => {
    const data = await api
    setUserData(data)
  }

  getData()
}, [])
```

### O que `[]` significa

Dependências vazias indicam que o efeito deve rodar uma vez na montagem do componente.

## Etapa 8 - Rotas e navegação

Arquivos principais:

- `src/App.tsx`
- `src/routes.tsx`
- `src/pages/Conta.tsx`
- `src/pages/ContaInfo.tsx`

### Conceitos usados

- `BrowserRouter`
- `Routes`
- `Route`
- `Navigate`
- `Link`
- `useNavigate`
- `useParams`

### O que cada um faz

- `Route` relaciona caminho e componente
- `Navigate` redireciona programaticamente pela árvore React
- `Link` navega sem recarregar a página
- `useNavigate` navega por função
- `useParams` lê valores dinâmicos da URL

### Exemplo de proteção de rota

```tsx
<Route
  path='/conta/:id'
  element={isLoggedIn ? <Conta /> : <Navigate to='/' replace />}
/>
```

Leitura:

- sem login, a pessoa volta para a Home
- com login, a rota protegida pode renderizar `Conta`

## Etapa 9 - Context API e estado global

Arquivo principal:

- `src/components/AppContext.tsx`

Arquivos que consomem o contexto:

- `src/components/Header.tsx`
- `src/pages/Home.tsx`
- `src/pages/Conta.tsx`
- `src/routes.tsx`

### Por que o contexto entrou no projeto

Várias partes da aplicação precisam saber se a autenticação está ativa.

Sem contexto, seria necessário passar props manualmente por vários níveis.

### O que o contexto guarda

```tsx
interface IAppContext {
  user: string
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
}
```

### Ideia central

- `createContext()` cria o canal
- `Provider` entrega os valores reais
- `useContext()` consome esses valores

## Etapa 10 - Persistência com localStorage

Arquivo principal:

- `src/services/storage.tsx`

### O problema resolvido

Sem persistência, o login seria perdido ao recarregar a página.

### O que o projeto faz

No login:

```tsx
changeLocalStorage({ login: true })
```

No logout:

```tsx
changeLocalStorage({ login: false })
```

Na criação do contexto:

```tsx
const [isLoggedIn, setIsLoggedIn] = useState<boolean>(getInitialLoginState)
```

Leitura didática:

1. salvar o estado no navegador
2. reler esse valor quando a aplicação abrir
3. restaurar o estado global automaticamente

## Etapa 11 - Fluxo completo de login e logout

Arquivos envolvidos:

- `src/pages/Home.tsx`
- `src/services/login.tsx`
- `src/api.ts`
- `src/components/AppContext.tsx`
- `src/services/storage.tsx`
- `src/routes.tsx`
- `src/pages/Conta.tsx`
- `src/components/Header.tsx`

### Papel de cada parte

`Home.tsx`

- captura email e senha
- chama `validateUser`
- atualiza contexto e persistência
- navega para `/conta/1`

`login.tsx`

- compara as credenciais digitadas com a conta mockada

`api.ts`

- simula atraso de rede
- devolve os dados da conta

`AppContext.tsx`

- centraliza `isLoggedIn`
- restaura o estado a partir do navegador

`routes.tsx`

- protege a rota da conta

`Header.tsx`

- mostra `Sair` apenas quando existe login
- executa logout

`Conta.tsx`

- carrega os dados da conta
- valida o `id` da URL
- exibe saldo e data

### Fluxo resumido

```text
Home
  -> usuario digita email e senha
  -> clique em Entrar
  -> validateUser(email, password)
  -> login(email, password)
  -> api devolve conta mockada
  -> se valido:
       setIsLoggedIn(true)
       changeLocalStorage({ login: true })
       navigate('/conta/1')

routes.tsx
  -> se isLoggedIn for true:
       renderiza Conta
  -> se isLoggedIn for false:
       redireciona para '/'

Header
  -> clique em Sair
  -> changeLocalStorage({ login: false })
  -> setIsLoggedIn(false)
  -> navigate('/')
```

Para o diagrama completo, veja `FLUXO_AUTENTICACAO.md`.

## Etapa 12 - Testes unitários

Arquivos:

- `src/services/soma.test.tsx`
- `src/services/login.test.tsx`
- `src/services/storage.test.tsx`

### O que está sendo praticado

- comparação entre sucesso e erro
- verificação de chamadas no `localStorage`
- testes de funções pequenas e isoladas
- uso de `jest.spyOn`

### Leitura didática

`soma.test.tsx`

- introduz assertions simples

`login.test.tsx`

- garante que email e senha corretos funcionam
- garante que email e senha errados falham

`storage.test.tsx`

- verifica leitura, criação e atualização da chave `diobank`

### Relação com TDD

O curso introduz o raciocínio:

- `red` -> o teste falha
- `green` -> o teste passa
- `refactor` -> o código melhora com comportamento preservado

## Etapa 13 - Pontos de segurança

Este projeto é didático. Por isso, alguns cuidados de produção aparecem aqui apenas como recomendação:

- frontend não deve ser a fonte de verdade da autenticação
- `localStorage` pode ser alterado manualmente
- validação real deve acontecer no backend
- rotas sensíveis devem ser protegidas também no servidor
- tokens e sessões precisam de proteção adequada

Em um cenário real, o ideal seria usar um backend ou BFF para:

- validar credenciais
- emitir sessão ou token
- controlar autorização
- aplicar rate limiting e logs de auditoria

## Erros comuns e confusões frequentes

### 1. Confundir valor com setter

- `isLoggedIn` é o valor
- `setIsLoggedIn` altera o valor

### 2. Confundir componente com função comum

- componente retorna JSX
- função de service retorna dado ou regra

### 3. Confundir `children` com variável mágica

- `children` vem das props
- ele representa o conteúdo interno do componente

### 4. Confundir tipo com valor

- interface descreve formato
- interface não cria objeto real

### 5. Confundir `Navigate` com `useNavigate`

- `Navigate` é componente de redirecionamento
- `useNavigate` devolve uma função para navegar por código

### 6. Confundir persistência com autenticação real

- persistir login não significa autenticar de forma segura
- o backend continua sendo a fonte de verdade em produção

## Roteiro rápido para apresentação

Uma sequência curta e coerente para apresentar o projeto:

1. explicar o objetivo da SPA
2. mostrar a estrutura de pastas
3. apresentar o fluxo `Home -> login -> contexto -> rota -> conta`
4. explicar como o `localStorage` mantém o login
5. mostrar os testes unitários
6. fechar com a observação de segurança sobre autenticação real no backend

## Checklist final de revisão

- [ ] Sei explicar a árvore principal da aplicação
- [ ] Sei explicar a responsabilidade de `components`, `pages` e `services`
- [ ] Sei explicar o que são props
- [ ] Sei explicar o que `children` representa
- [ ] Sei explicar por que `useState` é usado na Home, na Conta e no Context
- [ ] Sei explicar o que é input controlado
- [ ] Sei explicar o papel de `async/await`
- [ ] Sei explicar por que `useEffect(..., [])` aparece no projeto
- [ ] Sei explicar a diferença entre `Navigate`, `Link` e `useNavigate`
- [ ] Sei explicar como o contexto compartilha autenticação
- [ ] Sei explicar como o `localStorage` persiste o login
- [ ] Sei explicar o fluxo completo `Home -> login -> contexto -> conta -> sair`
- [ ] Sei apontar por que este login é didático e não de produção
