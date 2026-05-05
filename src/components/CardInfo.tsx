import { Box, Text } from "@chakra-ui/react";

// Define os textos que o card precisa receber para exibir a informacao.
interface ICardInfo {
    mainContent: string,
    content: string
}

// Componente reutilizavel para exibir um titulo e um valor.
const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box 
        backgroundColor="white" 
        minHeight="120px" 
        padding={8}
        borderRadius="8px"
    >
        {/* Texto principal do card, usado como destaque visual. */}
        <Text fontSize='2xl' fontWeight='bold'>
            { mainContent }
        </Text>

        {/* Texto complementar com o valor ou detalhe da informacao. */}
        <Text fontSize='xl'>
            { content }
        </Text>
    </Box>
  );
};

export default CardInfo;
