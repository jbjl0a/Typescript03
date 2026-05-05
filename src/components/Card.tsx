import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode
}

// Componente visual simples usado para envolver conteudo com o mesmo estilo.
export const Card = ({ children }: CardProps) => {
  return (
    // Renderiza o conteudo recebido via children dentro de uma caixa estilizada.
    <Box backgroundColor="#FFFFFF" borderRadius="8px" padding="15px" boxShadow="md">
      { children }
    </Box>
  );
};
