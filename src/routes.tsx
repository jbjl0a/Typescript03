import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AppContext } from "./components/AppContext"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import Home from "./pages/Home"

// Centraliza as rotas da aplicacao.
// A rota de conta depende do estado global de login.
const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)

    return(
        <Routes>
            {/* Tela inicial com o formulario de login. */}
            <Route path='/' element={<Home />} />

            {/* Exemplo simples de protecao de rota usando o contexto. */}
            <Route path='/conta/:id' element={ isLoggedIn ? <Conta /> : <Navigate to='/' replace /> } />

            {/* Tela secundaria usada no curso para demonstrar navegacao. */}
            <Route path='/infoconta' element={<ContaInfo />} />
        </Routes>
    )
}

export default MainRoutes
