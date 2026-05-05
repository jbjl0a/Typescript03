import {
  ChakraProvider
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import {  AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';
import { useEffect } from "react";

// Componente raiz da aplicacao.
// Aqui ficam os providers globais e a estrutura principal das rotas.
function App() {
  useEffect(() => {
    // Garante a chave padrao do projeto no navegador sem disparar efeito colateral durante a renderizacao.
    if (!getAllLocalStorage()) {
      createLocalStorage()
    }
  }, [])

  return (

    // A ordem dos wrappers importa:
    // BrowserRouter cuida das rotas, AppContextProvider compartilha o estado global
    // e ChakraProvider libera os componentes visuais da biblioteca.
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            < MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
