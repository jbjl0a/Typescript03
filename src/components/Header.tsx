import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'

// Cabecalho fixo da aplicacao com nome do banco e acao de logout.
export const Header  = () => {
  // Le do contexto o estado de login e a funcao que atualiza esse estado.
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  // Ao sair, atualiza a persistencia, o estado global e volta para a Home.
  const logout = () => {
    changeLocalStorage({ login: false})
    setIsLoggedIn(false)
    navigate('/')
  }

  return(
    <Flex backgroundColor='#018f78' color='white' padding='10px 16px' alignItems='center'>
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank</Text>
        </Center>
      </Box>
      {
        // O botao so aparece quando existe autenticacao no contexto.
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              onClick={() => logout()}
              backgroundColor='#a182d9'
              color='white'
              _hover={{ backgroundColor: '#6c69ca' }}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>
    
  )
}
