import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

// Pagina simples usada no curso para comparar navegacao com Link e com tag a.
const ContaInfo = () => {
    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                {"Informa\u00e7\u00f5es da conta"}
            </Text>

            {/* Link do React Router: navega sem recarregar toda a aplicacao. */}
            <Link to='/conta/1'>
                <Text fontSize='xl'>
                    Conta
                </Text>
            </Link>

            {/* Link HTML tradicional: o navegador faz uma nova requisicao da pagina. */}
            <a href='/conta/1'>
                Link com tag a
            </a>
        </>
    )
}

export default ContaInfo
