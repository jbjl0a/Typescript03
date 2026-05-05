import {Center, SimpleGrid, Spinner} from "@chakra-ui/react"
import {Navigate, useParams} from "react-router-dom"
import {useContext, useEffect, useState} from "react"
import {AccountData, api} from "../api"
import CardInfo from "../components/CardInfo"
import {AppContext} from "../components/AppContext"

// Esta pagina mostra os dados da conta e depende do login global.

const Conta = () => {
    // Guarda os dados da usuaria carregados da API simulada.
    const [userData, setUserData] = useState<AccountData | null>(null)

    // Le o parametro "id" vindo da URL, por exemplo: /conta/1
    const {id} = useParams()

    // Le do contexto global se a pessoa esta autenticada.
    const {isLoggedIn} = useContext(AppContext)

    useEffect(() => {
        // Funcao assincrona para buscar os dados da conta.
        const getData = async () => {
            const data = await api
            setUserData(data)
        }

        // Executa a busca quando o componente e montado.
        getData()
    }, [])

    // A protecao principal continua nas rotas, mas este retorno evita renderizar a pagina sem login.
    if (!isLoggedIn) {
        return <Navigate to='/' replace />
    }

    // Garante que o id da URL corresponde ao id retornado pela API.
    if (userData && id !== userData.id) {
        return <Navigate to='/' replace />
    }

    // Formata data e moeda para uma leitura mais natural em portugues do Brasil.
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date())

    const formattedBalance = userData
        ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(userData.balance)
        : ''

    return (
        <Center>
            {/* Organiza os cards em grade para apresentar os dados da conta. */}
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    // Enquanto os dados ainda nao chegaram, mostra um indicador de carregamento.
                    userData === null ?
                        (
                            <Center>
                                <Spinner size='xl' color='white'/>
                            </Center>
                        ) :
                        (
                            <>
                                {/* Exibe saudacao e a data atual apos o carregamento dos dados. */}
                                <CardInfo mainContent={`Bem vinda ${userData?.name}`}
                                          content={formattedDate}/>

                                {/* Exibe o saldo da usuaria retornado pela API. */}
                                <CardInfo mainContent='Saldo' content={formattedBalance}/>
                            </>
                        )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta
