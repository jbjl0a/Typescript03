import {Box, Center, Input} from "@chakra-ui/react";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../components/AppContext";
import {Card} from "../components/Card";
import DButton from "../components/DButton";
import {login} from "../services/login";
import {changeLocalStorage} from "../services/storage";

// Tela inicial com o formulario de login do projeto.
const Home = () => {
    // Estado local para armazenar o email digitado no input.
    const [email, setEmail] = useState<string>('')
    // Estado local para armazenar a senha digitada.
    const [password, setPassword] = useState<string>('')
    // Setter global do contexto para atualizar o status de autenticacao.
    const {setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()

    // Valida as credenciais informadas e, se forem validas, conclui o fluxo de login.
    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            return alert('Email ou senha inválidos')
        }

        setIsLoggedIn(true)
        changeLocalStorage({login: true})
        navigate('/conta/1')
    }


    return (
        <Box padding="25px">

            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                {/* Input controlado: o valor sempre reflete o estado email. */}
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                {/* A senha agora participa da validacao basica do login mockado. */}
                <Input
                    placeholder="password"
                    type="password"
                    value={password}
                    marginTop="12px"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Center>
                    <DButton
                        onClick={() => validateUser(email, password)}
                        isDisabled={!email || !password}
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;
