import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

// Tipa a funcao que sera executada quando o botao for clicado.
interface IDButton {
    onClick: MouseEventHandler
    isDisabled?: boolean
}

// Botao reutilizavel do formulario de login.
export const DButton = ({ onClick, isDisabled = false }: IDButton) => {
    return(
        <Button
          onClick={onClick}
          backgroundColor="#018f78"
          color="white"
          _hover={{ backgroundColor: "#15939a" }}
          size="sm"
          width="100%"
          marginTop="5px"
          isDisabled={isDisabled}
        >
          {/* O texto do botao fica centralizado automaticamente pelo Chakra UI. */}
          Entrar
        </Button>
    )
}

export default DButton
