import { createContext, ReactNode, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

// Este arquivo concentra o contexto global de autenticacao usado no curso.
// A ideia e evitar passar props manualmente por varios componentes.

// Define o formato dos dados compartilhados pelo contexto.
interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

interface AppContextProviderProps {
    children: ReactNode
}

// Cria o contexto que sera consumido com useContext.
// O objeto passado aqui e apenas o valor padrao do contexto.
// Os valores reais sao definidos pelo Provider mais abaixo.
export const AppContext = createContext({} as IAppContext)

// Le o estado inicial direto do localStorage para evitar piscadas de rota ao recarregar a pagina.
const getInitialLoginState = (): boolean => {
    const storage = getAllLocalStorage()

    if (!storage) {
        return false
    }

    try {
        const { login } = JSON.parse(storage) as { login?: boolean }
        return Boolean(login)
    } catch {
        return false
    }
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    // Estado global de autenticacao.
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(getInitialLoginState)

    // Exemplo de dado compartilhado pelo contexto.
    const user = 'nathally'

    return (
        // Disponibiliza os valores para os componentes filhos.
        // Todo componente dentro deste Provider pode consumir esse contexto com useContext.
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
            { children }
        </AppContext.Provider>
    )
}
